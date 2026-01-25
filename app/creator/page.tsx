'use client';

import React, { useState, useCallback, useEffect } from 'react';
import EditorPanel from '@/components/editor-panel';
import CanvasPanel from '@/components/canvas-panel';
import PreviewPanel from '@/components/preview-panel';
import Header from '@/components/header';
import { Block, BlockType } from '@/types';
import { saveBlocksToLocalStorage, loadBlocksFromLocalStorage } from '@/lib/state-utils';
import Footer from '@/components/footer';
import FloatingCoffee from '@/components/floating-coffee';

export default function ReadmeGenerator() {
  const [blocks, setBlocks] = useState<Block[]>([
    {
      id: '1',
      type: 'heading',
      content: 'My Project',
      level: 1,
    },
  ]);

  // Auto-save to localStorage
  useEffect(() => {
    saveBlocksToLocalStorage(blocks);
  }, [blocks]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadBlocksFromLocalStorage();
    if (saved) {
      setBlocks(saved);
    }
  }, []);

  const addBlock = useCallback((type: BlockType, index?: number) => {
    const newBlock: Block = {
      id: Date.now().toString(),
      type,
      content: '',
      level: type === 'heading' ? 2 : undefined,
      language: type === 'code' ? 'javascript' : undefined,
      items: type === 'bullet-list' || type === 'numbered-list' ? [''] : undefined,
      technologies: type === 'tech-stack' ? [] : undefined,
    };

    setBlocks((prev) => {
      const newBlocks = [...prev];
      if (typeof index === 'number') {
        newBlocks.splice(index + 1, 0, newBlock);
      } else {
        newBlocks.push(newBlock);
      }
      return newBlocks;
    });
  }, []);

  const updateBlock = useCallback((id: string, updates: Partial<Block>) => {
    setBlocks((prev) =>
      prev.map((block) => (block.id === id ? { ...block, ...updates } : block))
    );
  }, []);

  const deleteBlock = useCallback((id: string) => {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
  }, []);

  const reorderBlocks = useCallback((fromIndex: number, toIndex: number) => {
    setBlocks((prev) => {
      const newBlocks = [...prev];
      const [removed] = newBlocks.splice(fromIndex, 1);
      newBlocks.splice(toIndex, 0, removed);
      return newBlocks;
    });
  }, []);

  return (
    <>
    <div>
      <Header title="MyReadme.md" subtitle="Create your project documentation" />
    </div>
    <div className="flex h-screen bg-background">

        {/* Left Panel - Block Controls */}
        <EditorPanel onAddBlock={addBlock} />

        {/* Center Panel - Canvas Editor */}
        <CanvasPanel
          blocks={blocks}
          onAddBlock={addBlock}
          onUpdateBlock={updateBlock}
          onDeleteBlock={deleteBlock}
          onReorderBlocks={reorderBlocks} />

        {/* Right Panel - Live Preview */}
        <PreviewPanel blocks={blocks} />
      </div>
      <FloatingCoffee />

      <div><Footer /></div>
    </>
  );
}
