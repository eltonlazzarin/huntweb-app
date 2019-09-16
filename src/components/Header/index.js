import React from 'react';

// importing css
import "./styles.css";

// stateless component
const Header = () => (
    <header class="main-header" id="main-header">
        <a href="http://localhost:3000"><h1>KPS Hunt</h1></a>
        <nav>
        <ul>
            <li><a href="http://localhost:3000">Home</a></li>
            <li><a href="http://localhost:3000">News</a></li>
            <li><a href="http://localhost:3000">Contact</a></li>
            <li><a href="http://localhost:3000">About</a></li>
        </ul>
        </nav>
    </header> 
    
);


export default Header;