import React from "react";
import { PropTypes } from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

//공통메뉴를 넣음
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>next.js sns</title>
      </Head>
      <Component />
    </>
  );
};
App.prototypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
