<template>
  <div>
    <div>
      <el-button @click="newGame">New Game</el-button>
      <span>Score: {{score}}</span>
    </div>
    <div :class="'container' + order">
      <div class="background">
        <div v-for="(item, index) in order * order" :key="index"></div>
      </div>
      <div :class="'box' + order">
        <div class="row" v-for="(squareRows, index) in squareMatrix" :key="index">
          <div v-for="(square, index) in squareRows" :key="index">
            <square :value="square"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Square from './square'

let n = 4

export default {
  name: 'game2048',
  components: {
    'square': Square
  },
  data () {
    return {
      order: 4,
      squareMatrix: [],
      sss: 1,
      score: 0
    }
  },
  created () {
    this.newGame()
  },
  mounted () {
    // 全局监听键盘事件
    // ↑38ArrowUp ↓40ArrowDown ←37ArrowLeft →39ArrowRight
    document.onkeyup = (e) => {
      let keyBoard = e.key
      const old = this.squareMatrix.toString()
      if (keyBoard === 'ArrowUp') {
        this.slide(3)
      } else if (keyBoard === 'ArrowDown') {
        this.slide(1)
      } else if (keyBoard === 'ArrowLeft') {
        this.slide(0)
      } else if (keyBoard === 'ArrowRight') {
        this.slide(2)
      } else {
        // other key
      }
      if (old === this.squareMatrix.toString()) {
        console.log('no change')
        // TODO: msg
        return
      }
      this.add()
    }
  },
  methods: {
    newGame () {
      // 初始化游戏
      n = this.order
      // for (let i = 0; i < n; i++) {
      //   this.$set(this.squareMatrix, i, [])
      //   for (let j = 0; j < n; j++) {
      //     this.$set(this.squareMatrix[i], j, 0)
      //   }
      // }
      this.squareMatrix = Array.from(Array(n)).map(() => Array(n).fill(0))
      // this.squareMatrix = [
      //   [0, 2, 4, 8],
      //   [128, 64, 32, 16],
      //   [256, 512, 1024, 2048],
      //   [32768, 16384, 8192, 4096]
      // ]
      // 添加两个初始化方块
      this.add()
      this.add()
    },
    randomIndex () {
      // 生成下标随机数
      let index = Math.round(Math.random() * 15)
      if (this.squareMatrix[(Math.floor(index / 4))][(index % 4)] !== 0) {
        index = this.randomIndex()
      }
      return index
    },
    randomNumber () {
      // 生成数值随机数
      return Math.ceil(Math.random() * 2) * 2
    },
    add () {
      // 添加方块
      let index = this.randomIndex()
      let value = this.randomNumber()
      this.squareMatrix[(Math.floor(index / 4))][(index % 4)] = value
      this.score = this.score + value
    },
    isFull () {
      // 没有0
      let flag
      for (let i = 0; i < n; i++) {
        flag = this.squareMatrix[i].includes(0)
        if (flag) {
          return false
        }
      }
      // 没有两个相邻的且值相等的
    },
    matrixTranspose (matrix, times) {
      // 矩阵转置
      times = times % n
      if (times === 0) {
        return matrix
      }
      let tempMatrix = []
      for (let i = 0; i < n; i++) {
        tempMatrix[i] = []
        for (let j = 0; j < n; j++) {
          tempMatrix[i][j] = matrix[n - 1 - j][i]
        }
      }
      if (times > 0) {
        tempMatrix = this.matrixTranspose(tempMatrix, times - 1)
      }
      return tempMatrix
    },
    slide (times) {
      // <-
      let tempMatrix = this.matrixTranspose(this.squareMatrix, times)
      for (let i = 0; i < n; i++) {
        // this.$set(this.squareMatrix, i, this.slideRow(this.squareMatrix[i]))
        // tempMatrix[i] = this.slideRow(tempMatrix[i])
        this.$set(tempMatrix, i, this.slideRow(tempMatrix[i]))
      }
      this.squareMatrix = this.matrixTranspose(tempMatrix, n - times)
      // this.$set(this.squareMatrix, '', tempMatrix)
    },
    slideRow (squareRow) {
      // 单行计算
      let mergeArray = []
      for (let i = 0; i < n; i++) {
        mergeArray.push({
          isMerged: false
        })
      }
      for (let i = 1; i < n; i++) {
        let targetIndex = this.getTargetIndex(i, squareRow)
        let previousIndex = targetIndex - 1
        let value = squareRow[i]
        let previous = squareRow[previousIndex]
        if (previous !== 0 && value === previous && !mergeArray[previousIndex].isMerged) {
          mergeArray[previousIndex].isMerged = true
          squareRow[previousIndex] = squareRow[previousIndex] * 2
          // squareRow[targetIndex] = 0
          squareRow[i] = 0
        } else {
          if (targetIndex !== i) {
            squareRow[targetIndex] = squareRow[i]
            squareRow[i] = 0
          }
        }
      }
      return squareRow
    },
    getTargetIndex (index, array) {
      while (index > 0 && array[index - 1] === 0) {
        index = index - 1
      }
      return index
    }
  }
}
</script>

<style lang="scss" scoped>
$defaultLength: 77px;

.container {
  &4 {
    height: 4 * $defaultLength + 2;
    width: 4 * $defaultLength + 2;
  }
  &5 {
    height: 5 * $defaultLength;
    width: 5 * $defaultLength;
  }
}
.box {
  background-color: #87CEFA;
}
.box {
  &4 {
    height: 4 * $defaultLength;
    width: 4 * $defaultLength;
  }
  &5 {
    height: 5 * $defaultLength;
    width: 5 * $defaultLength;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}
</style>
