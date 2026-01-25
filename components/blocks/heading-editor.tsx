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

interface HeadingEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

export default function HeadingEditor({ block, onUpdate }: HeadingEditorProps) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Select
          value={String(block.level || 1)}
          onValueChange={(value) => onUpdate({ level: Number(value) })}
        >
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4].map((level) => (
              <SelectItem key={level} value={String(level)}>
                H{level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input
          type="text"
          value={block.content || ''}
          onChange={(e) => onUpdate({ content: e.target.value })}
          placeholder="Enter heading text..."
          className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
}
