module.exports = {
  setupFiles: ['<rootDir>/test.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testRegex: 'test\\.js$',
  rootDir: '.',
  testEnvironment: 'node'
}
