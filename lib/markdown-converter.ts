import { Block } from '@/types';

export function blockToMarkdown(block: Block): string {
  switch (block.type) {
    case 'heading':
      return `${'#'.repeat(block.level || 1)} ${block.content || ''}\n`;

    case 'paragraph':
      return `${block.content || ''}\n`;

    case 'divider':
      return '---\n';

    case 'bullet-list':
      return (block.items || [])
        .map((item) => `- ${item}`)
        .join('\n') + '\n';

    case 'numbered-list':
      return (block.items || [])
        .map((item, idx) => `${idx + 1}. ${item}`)
        .join('\n') + '\n';

    case 'code':
      return `\`\`\`${block.language || ''}\n${block.content || ''}\n\`\`\`\n`;

    case 'quote':
      return (block.content || '')
        .split('\n')
        .map((line) => `> ${line}`)
        .join('\n') + '\n';

    case 'image':
      return `![${block.content || 'image'}](${block.url || ''})\n`;

    case 'link':
      return `[${block.title || 'link'}](${block.url || ''})\n`;

    case 'tech-stack':
      return (block.technologies || [])
        .map(
          (tech) =>
            `![${tech}](https://img.shields.io/badge/${encodeURIComponent(tech)}-000?style=for-the-badge&logo=${tech.toLowerCase()}&logoColor=white)`
        )
        .join(' ') + '\n';

    default:
      return '';
  }
}

export function blocksToMarkdown(blocks: Block[]): string {
  return blocks
    .map((block) => blockToMarkdown(block))
    .join('\n')
    .trim();
}
