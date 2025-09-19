export function greet(name: string): string {
  return `👋 Hello, ${name}! Welcome to TypeScript 🚀`;
}

if (require.main === module) {
  console.log(greet("GitHub"));
}
