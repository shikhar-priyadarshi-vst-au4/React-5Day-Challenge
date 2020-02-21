import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './classcomponent';
import App from './functioncomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
let Main=<div className='my-5'><Comp/><hr/><App/></div>;
ReactDOM.render(Main,document.getElementById("root"));
