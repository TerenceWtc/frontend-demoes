import Mock from 'mockjs'
import LoginApi from './login'
import MenuApi from './auth/menu'
import CheckBoxApi from './checkBox'

Mock.mock('/api/auth/login', 'post', LoginApi.Login)
Mock.mock('/api/auth/menu/getMenuList', 'get', MenuApi.GetMenuList)
Mock.mock('/api/checkbox/getData', 'get', CheckBoxApi.GetData)
