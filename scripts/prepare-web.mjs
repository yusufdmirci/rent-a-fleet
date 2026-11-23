import { mkdir, copyFile } from 'node:fs/promises';

await mkdir('www', { recursive: true });
await copyFile('index.html', 'www/index.html');
await copyFile('manifest.json', 'www/manifest.json');
console.log('Web assets copied to www/.');
