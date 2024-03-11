import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from '../configs/route';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
