import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';
import adds, { resta } from './functions.js';
import Main from './main.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main adds={adds} resta={resta} />, document.querySelector("#root"));





// import { createRoot } from 'react-dom/client';

// function App() {
//   return <div>Hello World</div>;
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
