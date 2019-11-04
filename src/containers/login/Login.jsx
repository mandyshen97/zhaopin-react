/**
 * 用户登录的路由组件
 */
import React, { Component } from 'react';
import Logo from './../../components/logo/Logo';
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button } from 'antd-mobile'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  login=()=>{
    console.log('login')
    //todo
  }
  // 跳转到注册Register路由
  toRegister=()=>{
    this.props.history.replace('./register')
  }
  render() {
    return (
      <div>
        <NavBar>zhapin</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem placeholder='请输入用户名'
              onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
            <WhiteSpace />
            <InputItem type='password'
              placeholder='请输入密码'
              onChange={val => this.handleChange('password', val)}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace />
            <Button type='primary' onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button type='primary' onClick={this.toRegister}>还没有账号，去注册</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}

export default Login;