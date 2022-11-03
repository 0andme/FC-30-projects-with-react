### 1. 개발 환경 설정

- snowpack
- eslint&prettier

#### snowpack 설치 및 설정

[snowpack 공식 페이지](https://www.snowpack.dev/)
[관련 정리 블로그](https://heropy.blog/2020/10/31/snowpack/)

```shell
npm i -D snowpack
npm i -D @snowpack/plugin-sass
```

**snowpack.config.js**

[snowpack.config.js](./snowpack.config.js)
[snowpack 공식 홈피의 config 설정 관련 글](https://www.snowpack.dev/reference/configuration)

#### eslint-prettier 설정 파일

[.prettierignore](./.prettierignore)
[.prettierrc.json](./.prettierrc.json)
[.eslintignore](./.eslintignore)
[.eslintrc.json](./.eslintrc.json)

#### 2. html (s)css

**grid 속성**

grid는 2차원 배열

```css
display: grid;
grid-template-columns: repeat(7, 1fr); /*1fr (fraction)*/
grid-column-start: 7;
```

[MD CSS 그리드 레이아웃](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout)

[MDN grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

[MDN grid-column-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)

##### 기타

[favicon 사이트 ](https://favicon.io/)
