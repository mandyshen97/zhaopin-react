import axios from "axios";
function service(url = "", data = {}, type = "GET") {
  if (type === "GET") {
    let dataStr = "";
    Object.keys(data).forEach(key => {
      dataStr += key + "=" + data[key] + "&";
    });
    if(dataStr!==''){
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    return axios.get(url)
  }else{
    return axios.post(url, data)
  }
}
// 请求注册
export const reqRegister = (data)=>service('/register', data, 'POST')
// 请求登录 
export const reqLogin = (data) => service('/login', data, 'POST')
