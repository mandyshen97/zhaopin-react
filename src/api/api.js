import axios from 'axios'
const BaseUrl = ''
const UrlMap = [{
  description: '登录',
  method: 'login',
  url: '',
  type: 'GET',
}]
const API={}
UrlMap.forEach(item=>{
  if(API[item.method]){
    console.log(`存在相同的方法:${item.method}`)
  }
  API[item.method]=function(data){
    let url = BaseUrl + item.url
  }
})