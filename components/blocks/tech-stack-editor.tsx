'use client';

import React, { useState } from 'react';
import { Block } from '@/types';
import { Button } from '@/components/ui/button';
import { Trash2, Search } from 'lucide-react';

interface TechStackEditorProps {
  block: Block;
  onUpdate: (updates: Partial<Block>) => void;
}

/**
 * Technology metadata for shields.io
 * logo → shields logo slug
 * color → official brand color
 */
const TECH_META: Record<string, { logo: string; color: string }> = {
  // AI / ML
  LangChain: { logo: 'langchain', color: '1C3C3C' },
  OpenAI: { logo: 'openai', color: '412991' },
  'Hugging Face': { logo: 'huggingface', color: 'FFD21E' },
  TensorFlow: { logo: 'tensorflow', color: 'FF6F00' },
  PyTorch: { logo: 'pytorch', color: 'EE4C2C' },

  // Frontend
  HTML: { logo: 'html5', color: 'E34F26' },
  CSS: { logo: 'css3', color: '1572B6' },
  JavaScript: { logo: 'javascript', color: 'F7DF1E' },
  TypeScript: { logo: 'typescript', color: '3178C6' },
  React: { logo: 'react', color: '61DAFB' },
  Tailwind: { logo: 'tailwindcss', color: '06B6D4' },
  'Next.js': { logo: 'nextdotjs', color: '000000' },
  Vue: { logo: 'vuedotjs', color: '4FC08D' },
  Angular: { logo: 'angular', color: 'DD0031' },
  Svelte: { logo: 'svelte', color: 'FF3E00' },

  // Backend
  'Node.js': { logo: 'nodedotjs', color: '339933' },
  Express: { logo: 'express', color: '000000' },
  NestJS: { logo: 'nestjs', color: 'E0234E' },
  Django: { logo: 'django', color: '092E20' },
  Flask: { logo: 'flask', color: '000000' },
  FastAPI: { logo: 'fastapi', color: '009688' },
  Laravel: { logo: 'laravel', color: 'FF2D20' },

  // Databases
  MySQL: { logo: 'mysql', color: '4479A1' },
  PostgreSQL: { logo: 'postgresql', color: '4169E1' },
  MongoDB: { logo: 'mongodb', color: '47A248' },
  Redis: { logo: 'redis', color: 'DC382D' },
  Firebase: { logo: 'firebase', color: 'FFCA28' },
  Supabase: { logo: 'supabase', color: '3ECF8E' },

  // DevOps / Cloud
  Docker: { logo: 'docker', color: '2496ED' },
  Kubernetes: { logo: 'kubernetes', color: '326CE5' },
  AWS: { logo: 'amazonaws', color: '232F3E' },
  'Google Cloud': { logo: 'googlecloud', color: '4285F4' },
  Azure: { logo: 'microsoftazure', color: '0078D4' },
  Vercel: { logo: 'vercel', color: '000000' },
  Netlify: { logo: 'netlify', color: '00C7B7' },

  // Tools
  Git: { logo: 'git', color: 'F05032' },
  GitHub: { logo: 'github', color: '181717' },
  'GitHub Actions': { logo: 'githubactions', color: '2088FF' },
  Linux: { logo: 'linux', color: 'FCC624' },
  Ubuntu: { logo: 'ubuntu', color: 'E95420' },

  // Languages
  Python: { logo: 'python', color: '3776AB' },
  Java: { logo: 'openjdk', color: 'ED8B00' },
  'C++': { logo: 'cplusplus', color: '00599C' },
  Go: { logo: 'go', color: '00ADD8' },
  Rust: { logo: 'rust', color: '000000' },
};

/**
 * Generate shields.io badge URL
 */
const badgeUrl = (tech: string) => {
  const meta = TECH_META[tech];
  if (!meta) return '';

  return `https://img.shields.io/badge/${encodeURIComponent(
    tech
  )}-${meta.color}?style=for-the-badge&logo=${meta.logo}&logoColor=white`;
};

export default function TechStackEditor({
  block,
  onUpdate,
}: TechStackEditorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const technologies = block.technologies || [];

  const addTechnology = (tech: string) => {
    if (!technologies.includes(tech)) {
      onUpdate({ technologies: [...technologies, tech] });
    }
    setSearchTerm('');
  };

  const removeTechnology = (tech: string) => {
    onUpdate({
      technologies: technologies.filter((t) => t !== tech),
    });
  };

  const filteredTechs = Object.keys(TECH_META).filter(
    (tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !technologies.includes(tech)
  );

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search technologies..."
          className="w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Suggestions */}
      {searchTerm && filteredTechs.length > 0 && (
        <div className="border border-border rounded-md p-2 max-h-48 overflow-y-auto">
          {filteredTechs.slice(0, 10).map((tech) => (
            <Button
              key={tech}
              onClick={() => addTechnology(tech)}
              variant="ghost"
              className="w-full justify-start text-sm"
            >
              {tech}
            </Button>
          ))}
        </div>
      )}

      {/* Selected Tech Badges */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 border border-border rounded-md px-2 py-1 bg-muted"
            >
              <img
                src={badgeUrl(tech)}
                alt={tech}
                className="h-7"
                draggable={false}
              />
              <Button
                onClick={() => removeTechnology(tech)}
                size="icon"
                variant="ghost"
                className="h-6 w-6"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {technologies.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Search and add technologies to generate README badges
        </p>
      )}
    </div>
  );
}
