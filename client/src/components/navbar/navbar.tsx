import React from 'react';
import { Menu } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

// Strings only for navbar}

// Navbar contents and styling
const NavItems: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <a href="home">Home</a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="about">About</a>
      </Menu.Item>
      <Menu.Item key="faq">
        <a href="faq">FAQ</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="love">Contact Us</a>
      </Menu.Item>
    </Menu>
  );
};

// Navbar mapping items plus main container styling
const NavBar: React.FC = () => {
  return <NavItems />;
};

export default NavBar;
