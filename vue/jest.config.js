module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "json", "vue", "ts"],
  testMatch: ["**/tests/unit/**/*.spec.[jt]s?(x)", "**/__tests__/*.[jt]s?(x)"],
};
