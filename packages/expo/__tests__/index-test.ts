/* eslint-env jest */
import fs from 'fs-extra';

import { execute, projectRoot } from './utils';

beforeAll(async () => {
  await fs.mkdirp(projectRoot);
});

it('runs `npx expo --version`', async () => {
  const results = await execute('--version');
  expect(results.stdout).toEqual(require('../package.json').version);
});

it('runs `npx expo --help`', async () => {
  const results = await execute('--help');
  expect(results.stdout).toMatchInlineSnapshot(`
    "
        [1mUsage[22m
          [1m$[22m npx expo <command>

        [1mAvailable commands[22m
          config

        [1mOptions[22m
          --version, -v   Version number
          --help, -h      Displays this message

        For more information run a command with the --help flag
          [1m$[22m expo start --help
      "
  `);
});
