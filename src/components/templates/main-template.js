import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from 'styles/global-styles';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang='pl' />
        <meta charSet='utf-8' />
        <title>advocats</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyle />
      <div>
        <h1>hello advocats</h1>
        {children}
      </div>
    </>
  );
};

export default MainTemplate;
