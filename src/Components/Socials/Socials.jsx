import React from "react";
import "./socials.css";

export const Socials = () => {
  return (
    <div className="social-items d-flex flex-row align-items-center justify-content-center">
      <ul style={{ display: "flex", alignItems: "center" }}>
        <li>
          <a
            href="https://twitter.com/RyuWorld_NFT"
            target={"_blank"}
            rel="noopener noreferrer nofollow"
            className="btn btn-white btn-sm btn-social"
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="TwitterIcon"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
            </svg>{" "}
            Twitter
          </a>
        </li>

        <li>
          <a
            href="https://discord.gg/EUBrXznj44"
            target={"_blank"}
            rel="noopener noreferrer nofollow"
            className="btn btn-white btn-sm btn-social"
          >
            <i class="fab fa-discord fa-2x" aria-hidden="true"></i>
            Discord
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ryuworld_official/"
            target={"_blank"}
            rel="noopener noreferrer nofollow"
            className="btn btn-white btn-sm btn-social"
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AdbIcon"
            >
              <path d="M 7.328125 2.441406 C 5.230469 2.691406 3.390625 4.1875 2.703125 6.1875 C 2.40625 7.070312 2.414062 6.871094 2.414062 12 C 2.414062 16.332031 2.417969 16.691406 2.5 17.0625 C 2.925781 19.058594 4.316406 20.65625 6.1875 21.296875 C 7.070312 21.59375 6.871094 21.585938 12 21.585938 C 16.332031 21.585938 16.691406 21.582031 17.0625 21.5 C 19.109375 21.0625 20.703125 19.644531 21.320312 17.714844 C 21.589844 16.859375 21.585938 17.011719 21.585938 11.976562 C 21.585938 7.664062 21.582031 7.308594 21.5 6.9375 C 21.070312 4.9375 19.683594 3.34375 17.8125 2.703125 C 16.941406 2.410156 17.195312 2.417969 12.210938 2.410156 C 9.710938 2.40625 7.515625 2.417969 7.328125 2.441406 Z M 18.066406 5.75 C 18.449219 6.042969 18.496094 6.625 18.164062 6.957031 C 17.816406 7.304688 17.203125 7.25 16.941406 6.851562 C 16.640625 6.398438 16.890625 5.742188 17.398438 5.640625 C 17.628906 5.59375 17.914062 5.640625 18.066406 5.75 Z M 13.28125 7.378906 C 14.140625 7.636719 14.761719 8 15.378906 8.621094 C 15.992188 9.234375 16.355469 9.84375 16.625 10.71875 C 16.742188 11.105469 16.753906 11.1875 16.753906 12 C 16.753906 12.8125 16.742188 12.894531 16.625 13.28125 C 16.355469 14.15625 15.992188 14.765625 15.378906 15.378906 C 14.765625 15.992188 14.15625 16.355469 13.28125 16.625 C 12.894531 16.742188 12.8125 16.753906 12 16.753906 C 11.1875 16.753906 11.105469 16.742188 10.710938 16.621094 C 9.050781 16.121094 7.890625 14.949219 7.375 13.28125 C 7.257812 12.894531 7.246094 12.8125 7.246094 12 C 7.246094 11.1875 7.257812 11.105469 7.375 10.71875 C 7.867188 9.125 8.976562 7.953125 10.472656 7.457031 C 11.101562 7.25 11.320312 7.222656 12.140625 7.238281 C 12.757812 7.25 12.929688 7.273438 13.28125 7.378906 Z M 13.28125 7.378906 "></path>
            </svg>{" "}
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};
