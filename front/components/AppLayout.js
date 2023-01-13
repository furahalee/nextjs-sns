import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Menu, Input, Row, Col } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
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
    <ProfileOutlined />
  ),
  getItem(<SearchInput />, "sub3", null),
  getItem(
    <Link href="/signup">
      <a>Signup</a>
    </Link>,
    "sub4",
    <UserAddOutlined />
  ),
];

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Menu mode="horizontal" items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/furahalee"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Furahalee
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
