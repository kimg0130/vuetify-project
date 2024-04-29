// https://prettier.io/docs/en/options.html

module.exports = {
  printWidth: 100, // 한줄에 쓰는 코드 최대길이, 넘어가면 줄바꿈
  tabWidth: 2,  // 탭의 너비, space 2칸
  useTabs: false, // 탭 대신 스페이스 사용
  semi: false, // 세미콜론 사용
  singleQuote: false, // 문자열은 홑따옴표 사용 false: 쌍따옴표
  quoteProps: "as-needed", // 객체 속성에 따옴표 사용 여부
  jsxSingleQuote: false,  // jsx에서 문자열은 홑따옴표 사용 false: 쌍따옴표
  trailingComma: "none",  // 여러줄 사용시 후행 콤마 사용 여부 none: 사용안함, es5: 사용, all: 사용
  bracketSpacing: true,  // 객체 리터럴에서 { 뒤와 } 앞에 공백 삽입 여부
  bracketSameLine: false, // 객체 리터럴의 닫는 중괄호 } 를 같은 줄에 쓸지 다음 줄에 쓸지 여부 false: 다음줄
  arrowParens: "avoid", // 화살표 함수의 인자가 하나일때 괄호 사용 여부 avoid: 생략, always: 사용
  rangeStart: 0,  // 포맷팅을 시작할 문자열 인덱스
  rangeEnd: Infinity, // 포맷팅을 끝낼 문자열 인덱스
  requirePragma: false,  // 파일 상단에 포맷팅 설정을 적용할지 여부
  insertPragma: false,  // 파일 상단에 포맷팅 설정을 적용할 pragma 주석 삽입 여부
  proseWrap: "preserve",  // 마크다운 텍스트 줄바꿈 방식 preserve: 유지, always: 항상, never: 절대안함
  htmlWhitespaceSensitivity: "css", // html 파일의 공백처리 방식 css: css와 같이 처리, strict: html과 같이 처리
  vueIndentScriptAndStyle: false, // vue 파일에서 script와 style 태그의 들여쓰기 설정
  endOfLine: "auto",  // 줄바꿈 문자 설정 auto: OS에 맞게 설정
  embeddedLanguageFormatting: "auto", // 포맷팅을 적용할 언어 설정 auto: 자동, off: 사용안함
  singleAttributePerLine: false // 여러 속성을 가진 태그를 여러 줄에 걸쳐 작성할지 여부
}
