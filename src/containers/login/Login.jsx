/**
 * 用户登录的路由组件
 */
import React, { Component } from 'react';
import Logo from './../../components/logo/Logo';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <Logo></Logo>
      </div>
    );
  }
}

export default Login;