import LoginApi from './login'
import Mock from 'mockjs'

Mock.mock('/api/auth/login', 'post', LoginApi.Login)
