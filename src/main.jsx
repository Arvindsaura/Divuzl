import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
const clerk_key=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!clerk_key)throw new Error('VITE_CLERK_PUBLISHABLE_KEY is not defined');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={clerk_key}>
     <App />
  </ClerkProvider>
   
  </React.StrictMode>
);
