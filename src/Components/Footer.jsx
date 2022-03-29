import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center justify-content-center mb-60">
          <div className="col-md-12">
            <h2 className="primary-heading center">Join The Discord</h2>
          </div>
          <div className="col-md-12 center justify-content-center d-flex">
            <a
              href="https://discord.gg/EUBrXznj44"
              target={"_blank"}
              rel="noopener noreferrer nofollow"
              className="btn btn-white btn-sm btn-social"
              style={{ maxWidth: "135px" }}
            >
              <i class="fab fa-discord fa-2x" aria-hidden="true"></i>
              Discord
            </a>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-12 center">
            <p className="copyright-text mt-20">
              ©2022 Ryu World | All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
