import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";

function getItem(label, key, icon, type) {
  return {
    key,
    icon,
    label,
    type,
  };
}

const items = [
  getItem(
    <Link href="/">
      <a>Home</a>
    </Link>,
    "sub1",
    <HomeOutlined />
  ),
  getItem(
    <Link href="/profile">
      <a>Profile</a>
    </Link>,
    "sub2",
    <HomeOutlined />
  ),
  getItem(<Input.Search />, "sub3", <HomeOutlined />),
  getItem(
    <Link href="/signup">
      <a>Signup</a>
    </Link>,
    "sub4",
    <HomeOutlined />
  ),
];

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal" items={items} />
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
