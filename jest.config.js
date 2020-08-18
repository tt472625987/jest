module.exports = {
  roots: ["<rootDir>/src"], // 目录文件
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"], // 覆盖率是从哪些文件生产的 （不分析类型申明文件）
  setupFiles: ["react-app-polyfill/jsdom"], // 运行之前额外准备什么 （react-app-polyfill/jsdom dom兼容性上的问题）
  setupFilesAfterEnv: [
    "./node_modules/jest-enzyme/lib/index.js", // jest-enzyme
    "<rootDir>/src/setupTests.js",
  ], // 环境搭建好后去执行的文件
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ], // 匹配要测试的文件
  testEnvironment: "jest-environment-jsdom-fourteen", // 测试运行的环境 （在node环境下模拟浏览器上的一些api或者方法）
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest", // 先用babel-jest转换
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js", // css文件的转化 不会对样式做测试
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js", // 对其他文件的转化
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ], // 忽略转换的文件
  modulePaths: [], // module查找路径
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy", // cssmodule 第三方模块 把css的key和value转化成一样的
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ], // 查找文件的后缀名
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ], // 测试模式 插件
};
