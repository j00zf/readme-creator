'use client';

import React from 'react';
import { Block } from '@/types';

interface ParagraphEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

export default function ParagraphEditor({
  block,
  onUpdate,
}: ParagraphEditorProps) {
  return (
    <textarea
      value={block.content || ''}
      onChange={(e) => onUpdate({ content: e.target.value })}
      placeholder="Enter paragraph text..."
      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none min-h-24"
    />
  );
}
