import React from 'react';
import './global.css'; // Assuming global CSS is applicable

const MyPageComponent = ({ title, description, home }) => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preload" href="/fonts/PacaembuVar-subset.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="preload" href="/fonts/MulishVar-subset.woff2" as="font" type="font/woff2" crossorigin />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#5cebdf" />
        <meta name="theme-color" content="#ffffff" />
        <title>{title}</title>
        {/* Styles moved to CSS file */}
      </head>
      <body>
        <header className="container">
          <h1 className="heading">{title}</h1>
          <p className="description">{description}</p>
          {!home && (
            <p>
              <a href="/">&larr; back to home</a>
            </p>
          )}
        </header>

        {/* Slot for child components or additional content */}
        
        <footer className="footer">
          <nav>
            <ul>
              <li><a className="footer-link" href="https://www.netlify.com/trust-center/">Trust Center</a></li>
              <li><a className="footer-link" href="https://www.netlify.com/privacy/">Privacy</a></li>
              <li><a className="footer-link" href="https://www.netlify.com/security/">Security</a></li>
              <li><a className="footer-link" href="https://www.netlify.com/gdpr-ccpa/">GDPR/CCPA</a></li>
              <li><a className="footer-link" href="mailto:fraud@netlify.com?subject=Abuse%20report&body=Please%20include%20the%20site%20URL%20and%20reason%20for%20your%20report%2C%20and%20we%20will%20reply%20promptly." target="_blank" rel="noopener noreferrer">Abuse</a></li>
            </ul>
          </nav>
        </footer>
      </body>
    </>
  );
};

export default MyPageComponent;
