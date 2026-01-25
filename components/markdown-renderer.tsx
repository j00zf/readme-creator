'use client';

import React from 'react';

interface MarkdownRendererProps {
  markdown: string;
}

export default function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      /* =======================
         HEADINGS
      ======================= */
      if (line.startsWith('# ')) {
        elements.push(
          <h1
            key={i}
            className="text-4xl font-bold mt-8 mb-4 pb-3 border-b border-border"
          >
            {line.replace(/^# /, '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={i}
            className="text-3xl font-bold mt-7 mb-3 pb-2 border-b border-border"
          >
            {line.replace(/^## /, '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-2xl font-bold mt-6 mb-3">
            {line.replace(/^### /, '')}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={i} className="text-xl font-bold mt-5 mb-2">
            {line.replace(/^#### /, '')}
          </h4>
        );
      }

      /* =======================
         DIVIDER
      ======================= */
      else if (line === '---') {
        elements.push(<hr key={i} className="my-6 border-border" />);
      }

      /* =======================
         CODE BLOCKS
      ======================= */
      else if (line.startsWith('```')) {
        const lang = line.replace('```', '').trim();
        let code = '';
        i++;

        while (i < lines.length && !lines[i].startsWith('```')) {
          code += lines[i] + '\n';
          i++;
        }

        elements.push(
          <div
            key={i}
            className="bg-muted border border-border rounded-lg overflow-hidden my-4"
          >
            {lang && (
              <div className="bg-muted-foreground/10 px-4 py-1 text-xs font-mono text-muted-foreground border-b border-border">
                {lang}
              </div>
            )}
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm font-mono text-foreground">
                {code.trim()}
              </code>
            </pre>
          </div>
        );
      }

      /* =======================
         BLOCK QUOTES
      ======================= */
      else if (line.startsWith('> ')) {
        let quote = line.replace(/^> /, '');
        i++;

        while (i < lines.length && lines[i].startsWith('> ')) {
          quote += '\n' + lines[i].replace(/^> /, '');
          i++;
        }
        i--;

        elements.push(
          <blockquote
            key={i}
            className="border-l-4 border-primary/50 pl-4 py-2 my-4 text-muted-foreground bg-muted/50 rounded"
          >
            {quote}
          </blockquote>
        );
      }

      /* =======================
         SHIELDS.IO BADGES
         (MUST COME BEFORE IMAGE HANDLER)
      ======================= */
      else if (line.includes('img.shields.io/badge/')) {
        const badges =
          line.match(/!\[.*?\]\(https:\/\/img\.shields\.io\/.*?\)/g) || [];

        elements.push(
          <div
            key={i}
            className="flex flex-wrap gap-2 items-center my-4"
          >
            {badges.map((badge, idx) => {
              const match = badge.match(/^!\[(.*?)\]\((.*?)\)$/);
              if (!match) return null;

              return (
                <img
                  key={idx}
                  src={match[2]}
                  alt={match[1]}
                  className="h-7"
                  draggable={false}
                />
              );
            })}
          </div>
        );
      }

      /* =======================
         SINGLE IMAGE
      ======================= */
      else if (line.match(/^!\[.*?\]\(.*?\)$/)) {
        const match = line.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (match) {
          elements.push(
            <div
              key={i}
              className="my-4 border border-border rounded-lg overflow-hidden"
            >
              <img
                src={match[2] || '/placeholder.svg'}
                alt={match[1]}
                className="w-full h-auto"
              />
            </div>
          );
        }
      }

      /* =======================
         LINKS
      ======================= */
      else if (
        line.match(/^\[.*?\]\(.*?\)$/) &&
        !line.startsWith('!') &&
        !line.includes('img.shields.io')
      ) {
        const match = line.match(/^\[(.*?)\]\((.*?)\)$/);
        if (match) {
          elements.push(
            <a
              key={i}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-block my-2"
            >
              {match[1]}
            </a>
          );
        }
      }

      /* =======================
         BULLET LIST
      ======================= */
      else if (line.startsWith('- ')) {
        const items: string[] = [];

        while (i < lines.length && lines[i].startsWith('- ')) {
          items.push(lines[i].replace(/^- /, ''));
          i++;
        }
        i--;

        elements.push(
          <ul key={i} className="list-disc ml-6 my-3 space-y-2">
            {items.map((item, idx) => (
              <li key={idx} className="text-foreground">
                {item}
              </li>
            ))}
          </ul>
        );
      }

      /* =======================
         NUMBERED LIST
      ======================= */
      else if (line.match(/^\d+\. /)) {
        const items: string[] = [];

        while (i < lines.length && lines[i].match(/^\d+\. /)) {
          items.push(lines[i].replace(/^\d+\. /, ''));
          i++;
        }
        i--;

        elements.push(
          <ol key={i} className="list-decimal ml-6 my-3 space-y-2">
            {items.map((item, idx) => (
              <li key={idx} className="text-foreground">
                {item}
              </li>
            ))}
          </ol>
        );
      }

      /* =======================
         PARAGRAPH
      ======================= */
      else if (line.trim()) {
        elements.push(
          <p key={i} className="my-3 leading-relaxed text-foreground">
            {line}
          </p>
        );
      }

      i++;
    }

    return elements;
  };

  return (
    <div className="prose prose-sm max-w-none text-foreground dark:prose-invert">
      {renderMarkdown(markdown)}
    </div>
  );
}
