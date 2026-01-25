'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';
import { Block } from '@/types';
import HeadingEditor from './blocks/heading-editor';
import ParagraphEditor from './blocks/paragraph-editor';
import CodeEditor from './blocks/code-editor';
import ListEditor from './blocks/list-editor';
import ImageEditor from './blocks/image-editor';
import LinkEditor from './blocks/link-editor';
import QuoteEditor from './blocks/quote-editor';
import TechStackEditor from './blocks/tech-stack-editor';

interface BlockEditorProps {
  block: Block;
  index: number;
  onUpdate: (updates: Partial<Block>) => void;
  onDelete: () => void;
  onAddBlockAfter: () => void;
}

export default function BlockEditor({
  block,
  onUpdate,
  onDelete,
  onAddBlockAfter,
}: BlockEditorProps) {
  const [isHovering, setIsHovering] = useState(false);

  const renderEditor = () => {
    switch (block.type) {
      case 'heading':
        return <HeadingEditor block={block} onUpdate={onUpdate} />;
      case 'paragraph':
        return <ParagraphEditor block={block} onUpdate={onUpdate} />;
      case 'code':
        return <CodeEditor block={block} onUpdate={onUpdate} />;
      case 'bullet-list':
      case 'numbered-list':
        return <ListEditor block={block} onUpdate={onUpdate} />;
      case 'image':
        return <ImageEditor block={block} onUpdate={onUpdate} />;
      case 'link':
        return <LinkEditor block={block} onUpdate={onUpdate} />;
      case 'quote':
        return <QuoteEditor block={block} onUpdate={onUpdate} />;
      case 'tech-stack':
        return <TechStackEditor block={block} onUpdate={onUpdate} />;
      case 'divider':
        return <div className="w-full h-px bg-border my-4" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="space-y-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {renderEditor()}
      {isHovering && (
        <div className="flex gap-2 justify-end pt-2 border-t border-border">
          <Button
            onClick={onAddBlockAfter}
            size="sm"
            variant="ghost"
            title="Add block after"
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            onClick={onDelete}
            size="sm"
            variant="ghost"
            className="text-destructive"
            title="Delete block"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
