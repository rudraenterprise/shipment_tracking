import React from 'react';
import NewsLetterStyle from './NewsletterStyle';
import { Email, Send } from '@mui/icons-material';

const Newsletter = () => {
  const classes = NewsLetterStyle();

  return (
    <div className={classes.newsletterContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.content}>
          <div className={classes.icon}>
            <Email />
          </div>
          <div className={classes.text}>
            <h3>Subscribe</h3>
            <h2>Our Newsletter</h2>
          </div>
        </div>
        <div className={classes.inputContainer}>
          <input type='text' placeholder='Enter Email'/>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <button>Subscribe<Send /></button>
      </div>
    </div>
  );
};

export default Newsletter;