import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <head>
          <Head />
          <link
            rel="shortcut icon"
            href="../assets/images/favicon-32x32.png"
            type="image/x-icon"
          />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
