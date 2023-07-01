import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style.css';



// Render component App vào #root element
ReactDOM.render(
    <Router>
        <App />
    </Router>    

, document.getElementById('root'))

