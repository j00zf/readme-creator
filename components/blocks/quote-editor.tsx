'use client';

import React from 'react';
import { Block } from '@/types';

interface QuoteEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

export default function QuoteEditor({ block, onUpdate }: QuoteEditorProps) {
  return (
    <div className="border-l-4 border-primary pl-4">
      <textarea
        value={block.content || ''}
        onChange={(e) => onUpdate({ content: e.target.value })}
        placeholder="Enter quote text..."
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground italic focus:outline-none focus:ring-2 focus:ring-primary resize-none min-h-20"
      />
    </div>
  );
}
