//引入mockjs
import Mock from 'mockjs';
//表格数据
const ExcelData = Mock.mock({
  // 属性 list 的值是一个数组
  'list|10-50': [{
	'id|+1': 1,
    'name': "@ctitle(2,15)",
    "img": "@image('600x600',#b7ef7c)",
	'status|1':['yes','no'],
    "brief": "@csentence(1,50)",
    "price|0-20.0-2": 1,
    "num|30-150": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-50": 1
  }]
});
export default {ExcelData}

 
