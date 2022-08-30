#### 개발 환경 및 패키지 설치

이슈 번호 7번 [커밋 내용](https://github.com/0andme/FC-30-projects-with-react/commit/67ca428b72e99008cd41c8ef0762299d6cc3f0c6)

#### fortawesome 설치 및 적용

[site - fontawesome docs](https://fontawesome.com/docs/web/setup/packages)

```shell
npm install --save @fortawesome/fontawesome-free

```

```css
@import url('~@fortawesome/fontawesome-free/css/all.min.css');
```

#### 이미지를 위한 webpack 설정

asset/inline : 이미지를 읽어들일 때 웹팩에 있는 로더로 읽겠다는 의미

```js
module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      //아래부터 추가 코드
      {
        test: /\.jpeg$/,
        type:'asset/inline'
      }
    ],
  },
```

#### 이전 다음 버튼 기능

슬라이드 변경 시 css:left 속성 값을 이용. 이때 left값의 변경시 transition을 주게 되는데 이때 전 상태에 left 속성이 없었다면 transition 적용이 안됨

[CSS Transitions](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

[요소 내부너비 Element.clientWidth](https://developer.mozilla.org/ko/docs/Web/API/Element/clientWidth)

#### 인디케이터 기능

새로운 빈 DocumentFragment를 생성

[Document.createDocumentFragment()](https://developer.mozilla.org/ko/docs/Web/API/Document/createDocumentFragment)

:nth-child 인덱스 1부터 시작

[:nth-child](https://developer.mozilla.org/ko/docs/Web/CSS/:nth-child)

Number.isInteger() 주어진 값이 정수인지 판별

[Number.isInteger()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
