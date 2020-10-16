//二次封装axios
import Axios from 'axios'
//引入进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const ajax = Axios.create({
    baseURL:'/api',
    timeout:20000
})
//请求拦截器
ajax.interceptors.request.use((config)=>{
    Nprogress.start()
    return config
})
//响应拦截器
ajax.interceptors.response.use((response)=>{
    Nprogress.done()
    return response.data
},(err)=>{//错误统一处理
    Nprogress.done()
    console.log('错误信息:' + error.message || '未知错误')
    return Promise.reject(err)
})
export default ajax