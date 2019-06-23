module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testMatch: [
  //   'src/**/__tests__/*.test.tsx?'
  // ],
  collectCoverageFrom: [
    'src/**/*.tsx?'
  ],
  setupFiles: [
    '<rootDir>/testSetup.ts'
  ]
};
