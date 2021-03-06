import React, { useState } from 'react';
import { Menu, Icon, Drawer, Button } from 'antd';
import nav from './navbar.module.scss';

// Strings only for navbar}

// // NavBar Responsive contents and styling
// const NavRightMenu: React.FC = () => {
//   return (
//     <Menu className={nav.height} mode="horizontal">
//       <Menu.Item key="home">
//         <a href="profile">Signin</a>
//       </Menu.Item>
//       <Menu.Item key="signup">
//         <a href="">Signup</a>
//       </Menu.Item>
//     </Menu>
//   );
// };

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
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <React.Fragment>
      <nav className={nav.menuBar}>
        <div className={nav.logo}>
          <a href="logo">Anifolio</a>
        </div>
        <div className={nav.menuCon}>
          <div className={nav.leftMenu}>
            <NavLeftMenu />
          </div>
          <Button
            onClick={() => setVisible(true)}
            className={nav.barsMenu}
            type="primary"
          >
            <span className={nav.barsBtn} />
          </Button>
          <Drawer
            onClose={() => setVisible(false)}
            visible={visible}
            placement="right"
            closable={false}
          >
            <div className={nav.login}>
              <div className={nav.items}>
                <a>Login</a>
                <a> Register</a>
              </div>
            </div>
            <nav className={nav.drawerflex}>
              <a>
                <Icon type="home" />
                Home
              </a>
              <a>
                <Icon type="info-circle" />
                About
              </a>
              <a>
                <Icon type="question-circle" />
                FAQ
              </a>
              <a>
                <Icon type="mail" />
                Contact Us
              </a>
            </nav>
          </Drawer>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
