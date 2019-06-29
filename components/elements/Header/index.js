import React from 'react';
import style from './style.scss';
import Link from 'next/link';
import LinkText from '../LinkText';
import Logo from '../../../images/logo.svg';
import navIcon from '../../../images/hamburger.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <header className={style.topArea}>
        <Logo className={style.logo} />
        <nav className={style.navArea}>
          <LinkText href="/">TOP</LinkText>
          <LinkText href="/about">ABOUT</LinkText>
          <LinkText href="/news">NEWS</LinkText>
          <LinkText href="/contact">CONTACT</LinkText>
        </nav>
        <nav className={style.hamburger} onClick={this.toggleSidebar}>
          <div className={style.icon} data-open={this.state.isOpen}></div>
          <p className={style.menuText} data-open={this.state.isOpen}>{this.state.isOpen ? "CLOSE" : "MENU"}</p>
          <div className={style.sidebar} data-open={this.state.isOpen}>
            <a className={style.sideLink} href="/">TOP</a>
            <a className={style.sideLink} href="/about">ABOUT</a>
            <a className={style.sideLink} href="/news">NEWS</a>
            <a className={style.sideLink} href="/contact">CONTACT</a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;