<template>
  <v-touch class="touch-container"
    @swipeleft="swipe(0)"
    @swiperight="swipe(2)"
    @swipeup="swipe(3)"
    @swipedown="swipe(1)"
  >
    <div>
      Matrix:
      <el-select v-model="order" @change="newGame">
        <el-option
          v-for="item in orderAarray"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button @click="newGame">New Game</el-button><br/>
      <span>Score: {{score}}</span>
      <span>High Score: {{highScore}}</span>
    </div>
    <div :class="'container' + order">
      <div class="box">
        <div class="row" v-for="(squareRows, index) in squareMatrix" :key="index">
          <div v-for="(square, index) in squareRows" :key="index">
            <square :value="square"/>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-button @click="flag = !flag">appear</el-button>
    <el-button @click="() => x+=100">move right</el-button>
    <span v-if="flag">
      <square :class="flag ? 'appear' : ''" v-if="flag" :value="2"/>
    </span>
    <square :style="`transform:translate(${x}px,${y}px); transition: 0.3s`" :value="4"/> -->
  </v-touch>
</template>

<script>
import Square from './square'
import { message } from '@/util/message'

let n = 4

export default {
  name: 'game2048',
  components: {
    'square': Square
  },
  data () {
    return {
      order: 4,
      orderAarray: [4, 5, 6, 7, 8],
      squareMatrix: [],
      score: 0,
      highScore: 0,
      flag: true,
      x: 0,
      y: 0
    }
  },
  created () {
    this.newGame()
  },
  mounted () {
    // 全局监听键盘事件
    // ↑38ArrowUp ↓40ArrowDown ←37ArrowLeft →39ArrowRight
    document.onkeyup = (e) => {
      let old = this.squareMatrix.toString()
      let keyBoard = e.key
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
        return
      }
      this.operation(old)
    }
  },
  methods: {
    newGame () {
      // 初始化游戏
      n = this.order
      this.highScore = localStorage.getItem('highScore') === undefined ? 0 : localStorage.getItem('highScore')
      this.score = 0
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
    operation (old) {
      if (old === this.squareMatrix.toString()) {
        message('No changes')
        return
      }
      this.add()
    },
    randomIndex () {
      // 生成下标随机数
      let index = Math.round(Math.random() * (n * n - 1))
      if (this.squareMatrix[(Math.floor(index / n))][(index % n)] !== 0) {
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
      this.squareMatrix[(Math.floor(index / n))][(index % n)] = value
      this.score = this.score + value
      if (this.score > this.highScore) {
        this.highScore = this.score
        localStorage.setItem('highScore', this.highScore)
      }
      if (this.isFull()) {
        message('Game Over!', 'error', 0, true)
      }
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
      // 横向判断
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
          if (this.squareMatrix[i][j] === this.squareMatrix[i][j + 1]) {
            return false
          }
        }
      }
      // 纵向判断
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n; j++) {
          if (this.squareMatrix[i][j] === this.squareMatrix[i + 1][j]) {
            return false
          }
        }
      }
      return true
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
    },
    swipe (value) {
      let old = this.squareMatrix.toString()
      this.slide(value)
      this.operation(old)
    }
  }
}
</script>

<style lang="scss" scoped>
$defaultLength: 77px;

.touch-container {
  height: 100%;
  width: 100%;
}

.container {
  &4 {
    height: 4 * $defaultLength;
    width: 4 * $defaultLength;
  }
  &5 {
    height: 5 * $defaultLength;
    width: 5 * $defaultLength;
  }
  &6 {
    height: 6 * $defaultLength;
    width: 6 * $defaultLength;
  }
  &7 {
    height: 7 * $defaultLength;
    width: 7 * $defaultLength;
  }
  &8 {
    height: 8 * $defaultLength;
    width: 8 * $defaultLength;
  }
}
.box {
  background-color: #87CEFA;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}

// square appear css
.appear {
  animation: appear-in .3s;
}

@keyframes appear-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
// square appear css
</style>
