import axios from 'axios'
 // API请求地址
axios.defaults.baseURL = process.env.API_ROOT

// 公共请求参数
const commonParam = {
  chanNo: '402',
  appVersion: '1.0.1',
  ostype: 'h5',
  apptype: "3",
  osversion: '1.0.1'
}

// 拦截请求
axios.interceptors.request.use(

)

// 拦截响应
axios.interceptors.response.use(

)


// post方法
export function post(url, data = {} ) {
  let params = Object.assign(data, commonParam);
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

// get方法
export function get(url, data = {} ) {
  let params = Object.assign(data, commonParam);
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}
