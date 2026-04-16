
export function truncateString(text: string, maxLength: number): string {
  return (text.length > maxLength) ? text.slice(0, maxLength) + "..." : text; 
}
