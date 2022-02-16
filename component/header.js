import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <>
    <Head>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description"
        content="We're on a mission to back extraordinary entrepreneurs out of Africa solving important problems in large markets"/>
      <link href="assets/images/favicon.png" rel="icon"/>
      <title>Home | Voltron Capital</title>
      <link rel="styleseet" href="assets/css/libraries.css"/>
      <link rel="stylesheet" href="assets/css/style.css"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"/>
      
    </head>
    </Head>
      <header className="header header-layout">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo-light.svg" className="logo-light top-logo" alt="logo" />
              <img src="assets/images/logo-dark.svg" className="logo-dark top-logo" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav ml-auto">
                <li className="nav__item">
                  <a href="#home" className="nav__item-link active">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__item-link">About</a>
                </li>
                <li className="nav__item">
                  <a href="#companies" className="nav__item-link">Companies</a>
                </li>
                <li className="nav__item">
                  <a href="#founders" className="nav__item-link">Founders</a>
                </li>
                <li className="nav__item">
                  <a href="#quotes" className="nav__item-link">Quotes</a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__item-link">Connect</a>
                </li>
              </ul>
              <button className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></button>
            </div>
          </div>
        </nav>
      </header>
      </>
    )
}