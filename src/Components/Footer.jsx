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
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AdbIcon"
              >
                <path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
              </svg>
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
