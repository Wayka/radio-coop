import React from 'react';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">Acerca De</h2>
      <p>
        Acerca de Radio Cooperativa ...
      </p>
    </div>
  );
};

export default AboutPage;
