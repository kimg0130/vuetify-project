/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: false,  // 프로젝트의 최상위 디렉토리에만 적용할지 여부
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:markdown/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  ignorePatterns: ["src/**/*.json"],
  /** https://eslint.org/docs/latest/rules/ */
  rules: {
    eqeqeq: "warn", // 비교 연산자 사용 규칙
    "no-debugger": "warn",  // debugger 사용 규칙
    "no-restricted-imports": [    // 특정 패키지 사용 제한
      "warn",
      {
        paths: [
          {
            name: "lodash",
            message: "Tree Shaking 을 위해 lodash/<function> 또는 lodash-es 를 사용해 주세요."
          }
        ]
      }
    ],
    "no-unused-vars": "warn", // 사용하지 않는 변수 사용 규칙
    "no-var": "warn", // var 사용 규칙
    "require-await": "warn",  // async 함수에 await 사용 규칙
    "vue/multi-word-component-names": "off",  // 컴포넌트 이름에 여러 단어 사용 규칙
    "vue/no-dupe-keys": "warn", // 중복된 키 사용 규칙
    "vue/no-setup-props-destructure": "off",  // props 구조 분해 사용 규칙
    "vue/return-in-computed-property": "warn" // computed 속성에서 return 사용 규칙
  }
}
