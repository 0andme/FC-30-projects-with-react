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
