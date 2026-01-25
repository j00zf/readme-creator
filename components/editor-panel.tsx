'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { BlockType } from '@/types';

interface EditorPanelProps {
  onAddBlock: (type: BlockType) => void;
}

const BLOCK_TYPES: Array<{ type: BlockType; label: string; icon: string }> = [
  { type: 'heading', label: 'Heading', icon: 'H' },
  { type: 'paragraph', label: 'Text', icon: '¶' },
  { type: 'divider', label: 'Divider', icon: '−' },
  { type: 'bullet-list', label: 'Bullet List', icon: '•' },
  { type: 'numbered-list', label: 'Numbered List', icon: '1' },
  { type: 'code', label: 'Code', icon: '</>' },
  { type: 'quote', label: 'Quote', icon: '"' },
  { type: 'image', label: 'Image', icon: '🖼' },
  { type: 'link', label: 'Link', icon: '🔗' },
  { type: 'tech-stack', label: 'Tech Stack', icon: '⚙' },
];

export default function EditorPanel({ onAddBlock }: EditorPanelProps) {
  return (
    <div className="w-48 border-r border-border bg-card p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4 text-foreground">Blocks</h2>
      <div className="space-y-2">
        {BLOCK_TYPES.map((item) => (
          <Button
            key={item.type}
            onClick={() => onAddBlock(item.type)}
            variant="outline"
            className="w-full justify-start text-sm"
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
