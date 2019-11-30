/**
 * 包含所有action creater函数的模块
 */
import { AUTH_SUCCESS, ERROR_MSG } from "./action-types";
import { reqLogin, reqRegister } from "../api/api";
import { dispatch } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs";

// 同步错误消息
const errorMsg = msg => ({ type: ERROR_MSG, data: msg });
// 同步成功响应
const authSuccess = user => ({ type: AUTH_SUCCESS, data: user });

/**
 * 异步注册
 */
export function register({ username, password, password2, type }) {
  debugger
  // 进行前台表单验证，如果不合法，返回一个同步action对象，显示提示信息
  if (!username || !password || !type) {
    return errorMsg("用户名、密码、类型，必须输入！");
  }
  if (password !== password2) {
    return errorMsg("两次输入的密码不一致！");
  }
  return async dispatch => {
    // 发送请求
    const response = await reqRegister({ username, password, type });
    const result = response.data;
    if (result.code === 0) {
      // 分发成功的action
      dispatch(authSuccess(result.data));
    } else {
      // 分发提示错误的action
      dispatch(errorMsg(result.msg));
    }
  };
}

/**
 * 异步登录
 */
export const login = ({username, password})=>{
  if(!username || !password){
    return errorMsg('用户名和密码必须输入')
  }
  return async dispatch=>{
    const response = await reqLogin({username, password})
    const result = response.data
    if(result.code === 0){
      dispatch(authSuccess(result.data))
    }else{
      dispatch(errorMsg(result.msg))
    }
  }
}
