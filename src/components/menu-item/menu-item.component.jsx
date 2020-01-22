import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

// so the with router enables to pass items without havving to do prob drilling an anti pattern. Prop dirllilng is when you pass down state multiple levels
// even though the intermediate levels may noto need the state
// to get around this with router will allow to get access to the link methods or properties such as history and match
// i thinkn it is similar to the idea of how seems like this lower level compomemt souldnt be able to get higher levels stuf but at the end of the day its all one file anyway
