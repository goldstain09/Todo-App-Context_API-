import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoHome from './Components/TodoHome';
import { StoreProvider } from './Context/Todo.Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <TodoHome />
    </StoreProvider>

  </React.StrictMode>
);
