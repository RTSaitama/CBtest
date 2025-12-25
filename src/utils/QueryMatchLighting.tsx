import type { ReactNode } from 'react';

export function QueryMatchLighting(text: string, query: string): ReactNode[] {
  if (!query.trim()) return [text];

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  let index = lowerText.indexOf(lowerQuery);
  
  while (index !== -1) {
    if (index > lastIndex) {
      parts.push(text.substring(lastIndex, index));
    }
    
    parts.push(
      <mark key={index} style={{ backgroundColor: '#FFF619' }}>
        {text.substring(index, index + lowerQuery.length)}
      </mark>
    );
    
    lastIndex = index + lowerQuery.length;
    index = lowerText.indexOf(lowerQuery, lastIndex);
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}