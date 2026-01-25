'use client';

import React from 'react';
import { Block } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CodeEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

const LANGUAGES = [
  'javascript',
  'typescript',
  'python',
  'java',
  'cpp',
  'csharp',
  'php',
  'ruby',
  'go',
  'rust',
  'sql',
  'html',
  'css',
  'bash',
  'json',
  'xml',
];

export default function CodeEditor({ block, onUpdate }: CodeEditorProps) {
  return (
    <div className="space-y-2">
      <Select
        value={block.language || 'javascript'}
        onValueChange={(value) => onUpdate({ language: value })}
      >
        <SelectTrigger className="w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {LANGUAGES.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {lang}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <textarea
        value={block.content || ''}
        onChange={(e) => onUpdate({ content: e.target.value })}
        placeholder="Enter code..."
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none min-h-32"
      />
    </div>
  );
}
