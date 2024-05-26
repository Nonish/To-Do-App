/* eslint-env browser */
// https://stackoverflow.com/questions/41858052/solving-linter-error-no-undef-for-document

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
