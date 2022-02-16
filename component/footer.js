

export default function footer() {
    return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="footer-widget-about">
                <img src="./assets/images/logo.svg" alt="logo" className="mb-30" style={{height: 40}}/>
                <p className="color-gray">We're on a mission to back extraordinary entrepreneurs out of Africa solving
                  important problems in large markets.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
              <div className="footer-widget-nav px-3">
                <h6 className="footer-widget__title">Links</h6>
                <nav>
                  <ul className="list-unstyled grid-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Companies</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Landscape</a></li>
                    <li><a href="#">Connect</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-widget-contact">
                <h6 className="footer-widget__title color-heading">Quick Contacts</h6>
                <ul className="contact-list list-unstyled">
                  <li>If you have any questions, feel free to contact with our team.</li>
                  <li>
                    <a href="mailto:hello@voltron.africa" className="footer_email">
                      <i className="fa fa-mail"></i> <span>hello@voltron.africa</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <span className="fz-14">&copy; 2020 Voltron Capital
                <script>document.write(new Date().getFullYear())</script>, All Rights Reserved.
              </span>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <nav>
                <ul className="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end mb-0">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookies</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </footer>
      )
}