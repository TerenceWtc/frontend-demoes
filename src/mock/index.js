import Mock from 'mockjs'
import LoginApi from './login'
import MenuApi from './auth/menu'

Mock.mock('/api/auth/login', 'post', LoginApi.Login)
Mock.mock('/api/auth/menu/getMenuList', 'get', MenuApi.GetMenuList)
