import React, { Component } from 'react';
import logo from '../../assets/imgs/logo.png'
import './logo.less'
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="logo-container">
        <img src={logo} alt="logo" className='logo-image'/>
      </div>
    );
  }
}

export default Logo;