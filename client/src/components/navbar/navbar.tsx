import React from 'react';
import { Menu } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

// Strings only for navbar}

// NavBar Responsive contents and styling
const NavRightMenu: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <a href="profile">Signin</a>
      </Menu.Item>
      <Menu.Item key="signup">
        <a href="">Signup</a>
      </Menu.Item>
    </Menu>
  );
};

// Navbar contents and styling
const NavLeftMenu: React.FC = () => {
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
  return (
    <React.Fragment>
      <NavLeftMenu />
      <NavRightMenu />
    </React.Fragment>
  );
};

export default NavBar;
