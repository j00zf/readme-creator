'use client';

import React from 'react';
import { Block } from '@/types';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';

interface ListEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

export default function ListEditor({ block, onUpdate }: ListEditorProps) {
  const items = block.items || [''];

  const updateItem = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onUpdate({ items: newItems });
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onUpdate({ items: newItems.length > 0 ? newItems : [''] });
  };

  const addItem = () => {
    onUpdate({ items: [...items, ''] });
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2 items-start">
          <span className="text-muted-foreground text-sm pt-2 w-6">
            {block.type === 'numbered-list' ? `${index + 1}.` : '•'}
          </span>
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
            placeholder={`Item ${index + 1}...`}
            className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {items.length > 1 && (
            <Button
              onClick={() => removeItem(index)}
              size="sm"
              variant="ghost"
              className="text-destructive"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      ))}
      <Button
        onClick={addItem}
        size="sm"
        variant="outline"
        className="mt-2 bg-transparent"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Item
      </Button>
    </div>
  );
}
