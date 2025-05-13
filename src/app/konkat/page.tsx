"use client";
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Konkat() {
  const [numberOfLines, setNumberOfLines] = useState(0);
  const sourceRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLTextAreaElement>(null);

  const handleSource = () => {
    const source = sourceRef.current!.value.trim();
    const lines = source.split("\n");
    if (lines[0] === "") {
      return;
    }
    return lines;
  };

  const copyToClipboard = () => {
    const output = outputRef.current!.value;
    if (output === "") return;
    navigator.clipboard.writeText(output);
  };

  const numberOfElements = () => {
    const source = handleSource();
    if (!source) return;
    const numberOfLines = source.length;
    setNumberOfLines(numberOfLines);
  };

  const handleComma = () => {
    const source = handleSource();
    if (!source) return;
    const output = source!
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .map((line) => `${line}`)
      .join(",\n");
    outputRef.current!.value = output;
    numberOfElements();
    copyToClipboard();
  };

  const handleSimple = () => {
    const source = handleSource();
    if (!source) return;
    const output = source!
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .map((line) => `\'${line}\'`)
      .join(",\n");
    outputRef.current!.value = output;
    numberOfElements();
    copyToClipboard();
  };

  const handleDouble = () => {
    const source = handleSource();
    if (!source) return;
    const output = source!
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .map((line) => `\"${line}\"`)
      .join(",\n");
    outputRef.current!.value = output;
    numberOfElements();
    copyToClipboard();
  };

  const handleReset = () => {
    sourceRef.current!.value = "";
    outputRef.current!.value = "";
    sourceRef.current!.focus();
    setNumberOfLines(0);
    navigator.clipboard.writeText("");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Konkat</h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-2">
          <Label htmlFor="textarea" className="font-bold">
            Source
          </Label>
          <Textarea
            ref={sourceRef}
            id="textarea"
            rows={12}
            className="resize-none"
            placeholder="Raw data..."
            autoFocus
          />
          <div className="flex  gap-2">
            <Button onClick={handleComma}>Comma</Button>
            <Button onClick={handleSimple}>Simple quotes</Button>
            <Button onClick={handleDouble}>Double quotes</Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="textarea" className="font-bold">
            Output
          </Label>
          <Textarea
            ref={outputRef}
            id="textarea"
            rows={12}
            className="resize-none"
            placeholder="Formated data..."
          />
          <p>
            <span>{numberOfLines === 0 ? "" : numberOfLines}</span>
            <span>
              {numberOfLines === 0
                ? ""
                : numberOfLines === 1
                ? " ligne copiée"
                : " lignes copiées"}
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
