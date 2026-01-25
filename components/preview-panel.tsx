'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Copy, Check, Sun, Moon } from 'lucide-react';
import { Block } from '@/types';
import { blocksToMarkdown } from '@/lib/markdown-converter';
import MarkdownRenderer from './markdown-renderer';
import { useTheme } from 'next-themes';

interface PreviewPanelProps {
  blocks: Block[];
}

export default function PreviewPanel({ blocks }: PreviewPanelProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const markdown = blocksToMarkdown(blocks);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-80 border-l border-border bg-card flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">Preview</h2>

      </div>

      {/* Preview */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <MarkdownRenderer markdown={markdown} />
        </div>
      </div>

      {/* Actions */}
      <div className="border-t border-border p-4 space-y-2 flex-shrink-0">
        <Button
          onClick={copyToClipboard}
          className="w-full bg-transparent"
          variant="outline"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Markdown
            </>
          )}
        </Button>

        <Button onClick={downloadMarkdown} className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Download README.md
        </Button>
      </div>
    </div>
  );
}
