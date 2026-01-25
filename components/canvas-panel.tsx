'use client';

import React, { useState } from 'react';
import { Block, BlockType } from '@/types';
import BlockEditor from './block-editor';
import { GripVertical } from 'lucide-react';

interface CanvasPanelProps {
  blocks: Block[];
  onAddBlock: (type: BlockType, index?: number) => void;
  onUpdateBlock: (id: string, updates: Partial<Block>) => void;
  onDeleteBlock: (id: string) => void;
  onReorderBlocks: (fromIndex: number, toIndex: number) => void;
}

export default function CanvasPanel({
  blocks,
  onAddBlock,
  onUpdateBlock,
  onDeleteBlock,
  onReorderBlocks,
}: CanvasPanelProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (index: number) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      onReorderBlocks(draggedIndex, index);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="flex-1 border-r border-border bg-background overflow-y-auto p-8">
      <div className="max-w-3xl mx-auto space-y-4">
        {blocks.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">No blocks yet. Add one from the left panel.</p>
          </div>
        ) : (
          blocks.map((block, index) => (
            <div key={block.id} className="group">
              <div
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => {
                  e.preventDefault();
                  handleDragOver(index);
                }}
                onDragLeave={handleDragLeave}
                onDrop={(e) => {
                  e.preventDefault();
                  handleDrop(index);
                }}
                onDragEnd={handleDragEnd}
                className={`p-4 border-2 rounded-lg transition-all cursor-move ${
                  dragOverIndex === index
                    ? 'border-primary bg-primary/10 scale-105 shadow-lg'
                    : 'border-border hover:border-border/60'
                } ${draggedIndex === index ? 'opacity-50 bg-muted' : ''}`}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity pt-1">
                    <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab active:cursor-grabbing" />
                  </div>
                  <div className="flex-1">
                    <BlockEditor
                      block={block}
                      index={index}
                      onUpdate={(updates) => onUpdateBlock(block.id, updates)}
                      onDelete={() => onDeleteBlock(block.id)}
                      onAddBlockAfter={() => onAddBlock('paragraph', index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
