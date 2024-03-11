import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Index() {
  return (
    <div>
      <h1>index page</h1>
      <NavLink to="/about">跳转到about页面</NavLink>
    </div>
  );
}

export default Index;
