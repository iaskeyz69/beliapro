import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const testKey = 'test-key-embedded-at-build-time';

// Simulate Vercel: only process.env, no .env file dependency
const build = spawnSync('npm', ['run', 'build'], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    WEB3FORMS_ACCESS_KEY: testKey,
    PUBLIC_WEB3FORMS_ACCESS_KEY: '',
  },
  shell: true,
  stdio: 'pipe',
  encoding: 'utf8',
});

if (build.status !== 0) {
  console.error('FAIL: Build failed');
  console.error(build.stderr || build.stdout);
  process.exit(1);
}

const html = readFileSync('dist/contact/index.html', 'utf8');
const match = html.match(/const web3formsKey = "([^"]*)"/);

if (!match) {
  console.error('FAIL: Could not find web3formsKey in built contact page');
  process.exit(1);
}

if (match[1] !== testKey) {
  console.error(`FAIL: Expected embedded key "${testKey}", got "${match[1]}"`);
  process.exit(1);
}

console.log('PASS: WEB3FORMS_ACCESS_KEY is embedded in the contact page at build time');
