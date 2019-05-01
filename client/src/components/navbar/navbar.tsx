import React from 'react';
import { Menu } from 'antd';
import { Drawer, Button } from 'antd';
import nav from './navbar.module.scss';

// Strings only for navbar}

// NavBar Responsive contents and styling
const NavRightMenu: React.FC = () => {
  return (
    <Menu className={nav.height} mode="horizontal">
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
    <Menu className={nav.height} mode="horizontal">
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
      <nav className={nav.menuBar}>
        <div className={nav.logo}>
          <a href="logo">Logo</a>
        </div>
        <div className={nav.menuCon}>
          <div className={nav.leftMenu}>
            <NavLeftMenu />
          </div>
          <div className={nav.rightMenu}>
            <NavRightMenu />
          </div>
          <Button className={nav.barsMenu} type="primary">
            <span className={nav.barsBtn} />
          </Button>
          <Drawer title="Basic Drawer" placement="right" closable={false}>
            <NavLeftMenu />
            <NavRightMenu />
          </Drawer>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
