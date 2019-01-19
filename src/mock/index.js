import Mock from 'mockjs'
import LoginApi from './auth/login'
import UserApi from './admin/user'
import MenuApi from './admin/menu'
import CheckboxApi from './checkbox'
import EChartLine from './eCharts/line'

Mock.mock('/api/auth/login', 'post', LoginApi.Login)
Mock.mock(/\/api\/admin\/user\/getUserInfo/, 'get', UserApi.GetUserInfo)
Mock.mock(/\/api\/admin\/menu\/getMenuList/, 'get', MenuApi.GetMenuList)
Mock.mock('/api/checkbox/getData', 'get', CheckboxApi.GetData)
Mock.mock('/api/echarts/line', 'get', EChartLine.GetLine)
