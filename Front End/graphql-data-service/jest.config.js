module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.{js,ts}', '!**/*.d.ts', '!**/node_modules/**'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
  transformIgnorePatterns: ['/node_modules'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
};
