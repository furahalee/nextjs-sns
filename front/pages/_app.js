import React from "react";
import "antd/dist/antd.css";
import { PropTypes } from "prop-types";
import Head from "next/head";
("");
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

export default App;
