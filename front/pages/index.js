import React from "react";
import AppLayout from "../components/AppLayout";
const Home = () => {
  const message = "hello";
  return (
    <AppLayout>
      <div>{message}</div>
    </AppLayout>
  );
};

export default Home;
