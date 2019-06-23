module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/__tests__/*.test.tsx?"
  ],
  collectCoverageFrom: [
    "src/**/*.tsx?"
  ]
};