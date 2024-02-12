import React from 'react';
import '../public/global.css'; // Make sure the path is correct

const Main = ({ title, description }) => {
  // You can add state and effects here if needed

  return (
    <div>
      <head>
        {/* Your meta tags here */}
        <title>{title}</title>
        {/* Link your stylesheets here */}
      </head>
      <body>
        <header className="container">
          <h1 className="heading">{title}</h1>
          <p className="description">{description}</p>
          {/* Add navigation or other header content here */}
        </header>

        <main>
          {/* Main page content goes here */}
        </main>

        <footer className="footer">
          {/* Footer content goes here */}
        </footer>
      </body>
    </div>
  );
};

export default Main;
