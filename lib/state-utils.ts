import { Block } from '@/types';

const STORAGE_KEY = 'readme-generator-blocks';

export function saveBlocksToLocalStorage(blocks: Block[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
  } catch (error) {
    console.error('Failed to save blocks to localStorage', error);
  }
}

export function loadBlocksFromLocalStorage(): Block[] | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Failed to load blocks from localStorage', error);
    return null;
  }
}

export function clearBlocksFromLocalStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear blocks from localStorage', error);
  }
}

export function exportBlocksAsJson(blocks: Block[]): string {
  return JSON.stringify(blocks, null, 2);
}

export function importBlocksFromJson(json: string): Block[] | null {
  try {
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return null;
  } catch (error) {
    console.error('Failed to parse JSON', error);
    return null;
  }
}
