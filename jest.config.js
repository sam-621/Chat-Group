// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/modules/**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', '.'],
  moduleNameMapper: {
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@components/(.*)$': '<rootDir>/src/common/components/$1',
    '^@atoms/(.*)$': '<rootDir>/src/common/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/src/common/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/common/components/organisms/$1',
    '^@constants/(.*)$': '<rootDir>/src/common/constants/$1',
    '^@contexts/(.*)$': '<rootDir>/src/common/contexts/$1',
    '^@helpers/(.*)$': '<rootDir>/src/common/helpers/$1',
    '^@hooks/(.*)$': '<rootDir>/src/common/hooks/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/common/interfaces/$1',
    '^@services/(.*)$': '<rootDir>/src/common/services/$1',
    '^@api/(.*)$': '<rootDir>/src/common/api/$1',
    '^@state/(.*)$': '<rootDir>/src/common/state/$1',
    '\\.(css|scss)$': '<rootDir>/__mocks__/utils/styles/styleMock.ts'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
