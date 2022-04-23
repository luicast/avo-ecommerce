import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
    return (
      <Html lang="en">
        <Head>
          { /*favicon*/ }
          { /*Webfont*/ }
          { /*Estilos externos */ }
          { /*Scripts externos */ }
        </Head>
        <body className='my-body-class'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument