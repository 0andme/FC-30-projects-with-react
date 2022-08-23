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
