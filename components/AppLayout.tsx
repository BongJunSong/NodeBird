import React, { useState } from "react";
import { Input, Menu, Row, Col } from "antd";
import Link from "next/link";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search style={{ verticalAlign: "middle" }} enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">signup</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://gitlab.com/chaosts0981"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Song
          </a>
        </Col>
      </Row>
    </>
  );
};

export default AppLayout;
