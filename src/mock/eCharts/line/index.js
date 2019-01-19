import Mock from 'mockjs'
let random = Mock.Random

let monthList = ['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06', '2018/07', '2018/08', '2018/09', '2018/10', '2018/11', '2018/12']
let length = random.integer(1, 4)
let seriesList = []
let colorList = []
for (let i = 0; i < length; i++) {
  colorList.push(random.color())
  let dataList = []
  for (let j = 0; j < 12; j++) {
    if (j === 4 || j === 8) {
      dataList.push(null)
    } else {
      dataList.push(random.integer(0, 1000))
    }
  }
  seriesList.push({
    name: random.string(),
    type: 'line',
    data: dataList
  })
}

const lineData = {
  status: 200,
  data: {
    color: colorList,
    title: {
      text: 'line graphy'
    },
    tooltip: {},
    dataZoom: [{
      type: 'inside',
      start: 80,
      end: 100
    }, {
      type: 'slider',
      show: true
    }],
    series: seriesList,
    xAxis: {
      type: 'category',
      data: monthList
    },
    yAxis: {
      name: '价格',
      type: 'value'
    }
  }
}

export default {
  GetLine: () => {
    return lineData
  }
}
