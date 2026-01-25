'use client';

import React from 'react';
import { Block } from '@/types';

interface ImageEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

export default function ImageEditor({ block, onUpdate }: ImageEditorProps) {
  return (
    <div className="space-y-2">
      <input
        type="text"
        value={block.url || ''}
        onChange={(e) => onUpdate({ url: e.target.value })}
        placeholder="Enter image URL..."
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="text"
        value={block.content || ''}
        onChange={(e) => onUpdate({ content: e.target.value })}
        placeholder="Enter alt text..."
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {block.url && (
        <div className="mt-3 border border-border rounded-md overflow-hidden max-h-48 bg-muted flex items-center justify-center">
          <img
            src={block.url || "/placeholder.svg"}
            alt={block.content || 'Preview'}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
