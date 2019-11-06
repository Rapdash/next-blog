import App from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-roboto";
import "typeface-russo-one";

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return(
      <Component {...pageProps} />
    )
  }
}