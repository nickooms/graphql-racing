import { Link } from 'react-router-dom';
import React from 'react';

const ChannelsListItem = ({ id, name }) => (
  <div key={id} className={`channel ${id < 0 ? 'optimistic' : ''}`}>
    <Link to={id < 0 ? `/` : `channel/${id}`}>{name}</Link>
  </div>
);

export default ChannelsListItem;
