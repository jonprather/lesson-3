import React from 'react';

import CollectionItem from '../collection-item/collection-item';
//he had a diff naming conventions where he would end with.styles or . component bassed on type
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

// can chain array methods to easily change how many items get displayed its taking the shop data from state goes down to this collections and renders
// some html with the appropriatie data 
//member this function call waill get called every time that could be laggy if array is large or slow cpu
