export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'divider'
  | 'bullet-list'
  | 'numbered-list'
  | 'code'
  | 'quote'
  | 'image'
  | 'link'
  | 'tech-stack';

export interface Block {
  id: string;
  type: BlockType;
  content?: string;
  level?: number; // For headings (1-4)
  language?: string; // For code blocks
  items?: string[]; // For lists
  technologies?: string[]; // For tech stack
  url?: string; // For images and links
  title?: string; // For links
}

export interface Technology {
  name: string;
  shields?: string; // Shields.io URL
}
