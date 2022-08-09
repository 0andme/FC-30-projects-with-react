# FC-projects-with-react

#### 개발 환경

- vs code
- chrome
- es lint
- prettier
- node js v16.14.2

#### npm 패키지 설치 (-D 옵션)

- webpack ^5.65.0
- webpack-cli ^4.9.1
- webpack-dev-server ^4.7.2
- terser-webpack-plugin
- html-webpack-plugin
- mini-css-extract-plugin
- css-loader
- css-minimizer-webpack-plugin
- eslint
- eslint-config-prettier
- eslint-plugin-prettier

#### webpack.config.js 파일 추가 및 작성

[webpack.config.js 파일 ](./webpack.config.js)

```Shell
npx webpack
```

#### eslint - prettier 설정 : .eslintrc.json 추가

[.eslintrc.json 파일](./.eslintrc.json)

```Shell
npx eslint --init
```

옵션들

- ❯ To check syntax and find problems
- ❯ JavaScript modules (import/export)
- ❯ None of these
- TypeScript? ❯ No
- ❯ Browser
- ❯ JSON

[.eslintignore 파일](./.eslintignore)

[.prettierrc.json 파일](./.prettierrc.json)

[prettierignore 파일](./.prettierignore)

- [참고자료 - prettier options](https://prettier.io/docs/en/options.html)
- [참고자료 - prettier demo ](https://prettier.io/playground/)
- [참고자료 - eslint rules ](https://eslint.org/docs/latest/rules/)
- [참고자료 - eslint demo](https://eslint.org/play/)

#### vscode editor setting

command+shift+P -> preferences open workspace settings
[vscode 세팅 파일 settings.json](./.vscode/settings.json)

#### 다크 모드 적용

[Private class fields](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

[Document.documentElement](https://developer.mozilla.org/ko/docs/Web/API/Document/documentElement)

[Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

#### 폰트 변경 기능

```js
document.body.style.fontFamily;
```

#### 이벤트 버블링

[event.bubbles](https://developer.mozilla.org/ko/docs/Web/API/Event/bubbles)

#### 키보드 이벤트

[? < Optional chaining](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

[RegExp.prototype.test())](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

[Element.classList.toggle](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

한글 입력 정규식

```js
/[ㄱ-ㅎ|ㅏ-ㅣㅣ가-힣]/;
```

#### 마우스 이벤트

[Element.closest()](https://developer.mozilla.org/ko/docs/Web/API/Element/closest)

[Function.prototype.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

- html 속성 data-val = js 에서 dataset.val로 접근 가능
- `-`외에도 `-` `.` `:` `_` 가능

```html
<div class="key" data-code="KeyQ" data-val="q">Q</div>
```

```js
Element?.dataset.val;
```
