import {defineConfig} from 'vitest/config';

export default defineConfig({
  // Specify the environment that your tests will be run in
  test: {
    watch: true,
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'], // output formats for the coverage reports
      all: true, // whether to include all files in the source map for coverage
      include: ['src/**/*.{js,ts}'], // specify files to include for coverage
      exclude: ['**/*.d.ts', 'tests/**/*'], // specify files to exclude from coverage
    },
  },
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
});
