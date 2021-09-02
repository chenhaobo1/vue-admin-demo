// 拦截器
import axios from "axios";
import { ElMessage } from 'element-plus'

const BASEURL = process.env.NODE_ENV === "production" ? "" : "/api";

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 10000,
});

instance.interceptors.request.use(
    function (config) {
        // config.headers['token'] = '测试测试'
        console.log(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    });

instance.interceptors.response.use(
    function (response) {
        // 对验证码响应的数据进行判断
        let data = response.data
        if (data.resCode !== 0) {
            ElMessage.error(data.message);
            return Promise.reject(data)
        } else {
            return response;
        }
    }, function (error) {
        return Promise.reject(error);
    });

export default instance;