'use client';

import React from 'react';
import { Block } from '@/types';

interface LinkEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

export default function LinkEditor({ block, onUpdate }: LinkEditorProps) {
  return (
    <div className="space-y-2">
      <input
        type="text"
        value={block.title || ''}
        onChange={(e) => onUpdate({ title: e.target.value })}
        placeholder="Enter link text..."
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="text"
        value={block.url || ''}
        onChange={(e) => onUpdate({ url: e.target.value })}
        placeholder="Enter URL..."
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
