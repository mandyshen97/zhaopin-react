/**
 * 用户注册的路由组件
 */
import React, { Component } from "react";
import Logo from "./../../components/logo/Logo";
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from "antd-mobile";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../redux/actions";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
      type: "boss"
    };
  }
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };
  register = () => {
    debugger
    console.log(JSON.stringify(this.state));
    console.log(this.props)
    // todo
  };
  // 跳转到Login路由
  toLogin = () => {
    this.props.history.replace("/login");
  };
  render() {
    return (
      <div>
        <NavBar>招聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem
              placeholder="请输入用户名"
              onChange={val => this.handleChange("username", val)}
            >
              用户名：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              placeholder="请输入密码"
              onChange={val => this.handleChange("password", val)}
            >
              密&nbsp;&nbsp;&nbsp;码：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              placeholder="请再次输入密码确认"
              onChange={val => this.handleChange("passwordConfirm", val)}
            >
              确认密码：
            </InputItem>
            <List.Item>
              <span style={{ marginRight: "30px" }}>用户类型：</span>
              <Radio
                checked={this.state.type === "job-seeker"}
                onChange={() => this.handleChange("type", "job-seeker")}
              >
                大&nbsp;牛
              </Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio
                checked={this.state.type === "boss"}
                onChange={() => this.handleChange("type", "boss")}
              >
                老&nbsp;板
              </Radio>
            </List.Item>
            <WhiteSpace />
            <Button type="primary" onClick={this.register}>
              注&nbsp;&nbsp;&nbsp;册
            </Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.toLogin}>
              已有帐号 去登录
            </Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}

export default connect(state => state.user, { register })(Register);
