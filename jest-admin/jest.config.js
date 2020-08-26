/*
 * @Author: zhangzheng
 * @Date: 2020-08-24 11:18:22
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-08-24 11:23:17
 * @Descripttion:
 */
const path = require("path");

module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  rootDir: path.resolve(__dirname, ".."),
  moduleFileExtensions: ["js", "json", "vue"],
  testPathIgnorePatterns: [
    "<rootDir>/jest-console/tests/e2e",
    "<rootDir>/jest-admin/"
  ],
  moduleNameMapper: {
    "^@/(.*?.?(js|vue)?|)$": "<rootDir>/jest-console/src/$1", // @路径转换，例如：@/components/Main.vue -> rootDir/src/components/Main.vue
    "^~/(.*?.?(js|vue)?|)$": "<rootDir>/jest-common/src/$1", // @路径转换，例如：@/components/Main.vue -> rootDir/src/components/Main.vue
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest-console/tests/__mocks__/fileMock.js", // 模拟加载静态文件
    "\\.(css|less|scss|sass)$": "<rootDir>/tests/__mocks__/styleMock.js" // 模拟加载样式文件
  },
  projects: ["<rootDir>/jest-console/src/views/**/*.(vue)"],
  testMatch: [
    //匹配测试用例的文件
    "<rootDir>/jest-console/tests/unit/*.spec.js"
  ],
  // setupFiles: [
  //   "<rootDir>/scripts/testSetup.js"
  // ],
  transform: {
    "^.+\\.js$": "<rootDir>/jest-console/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/jest-console/node_modules/vue-jest"
  },
  moduleDirectories: ["<rootDir>/jest-console"],
  // setupFiles: ['<rootDir>/test/unit/setup'],
  snapshotSerializers: [
    "<rootDir>/jest-console/node_modules/jest-serializer-vue"
  ],
  coverageDirectory: "<rootDir>/jest-console/tests/unit/coverage", // 覆盖率报告的目录
  collectCoverageFrom: [
    // 测试报告想要覆盖那些文件，目录，前面加！是避开这些文件
    // 'src/components/**/*.(js|vue)',
    "src/**/*.(js|vue)",
    "<rootDir>/jest-console/src/views/**/*.(vue)",
    "!<rootDir>/jest-admin/**",
    "!<rootDir>/jest-clinet/**",
    "!src/main.js",
    "!src/router/index.js",
    "!**/node_modules/**"
  ]
};
