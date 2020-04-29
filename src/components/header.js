import React from 'react';

const Header = ({ image }) => (
  <div className="h-64 flex justify-center my-16">
    <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image.url})`, width: '600px' }} />
  </div>
);

export default Header;
