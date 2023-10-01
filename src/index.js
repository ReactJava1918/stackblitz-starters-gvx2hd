// Import React and other necessary modules
import React, { StrictMode } from 'react';

// Import the createRoot function from ReactDOM
import { createRoot } from 'react-dom/client';

// Import Bootstrap CSS and JavaScript files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the Redux store
import store from './store';

// Import the Provider component from react-redux
import { Provider } from 'react-redux';

// Import the main application component
import App from './App';

// Create a root React element using createRoot and specify the DOM element where it should be rendered
const root = createRoot(document.getElementById('app'));

// Render the entire application within a StrictMode component
root.render(
  <StrictMode>
    {/* Provide the Redux store to the application using the Provider */}
    <Provider store={store}>
      {/* Render the main application component */}
      <App />
    </Provider>
  </StrictMode>
);
