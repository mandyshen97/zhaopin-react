/**
 * 包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

const initUser = {
  username: '',
  type: '',
  msg: '',
  redirectTo: '', // 需要自动跳转的路由path
}

function user(state=initUser, action){
  debugger
  switch(action.type){
    case AUTH_SUCCESS:
      return {...action.data, redirectTo: '/'}
    case ERROR_MSG:
      return {...state, msg: action.data}
    default:
      return state
  }
}

// 返回合并后的 reducer 函数 
export default combineReducers({
  user
})