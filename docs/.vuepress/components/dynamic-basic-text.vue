<template>
  <div class="dynamic-basic-text">
    <h4>荧光闪烁</h4>
    <div class="hollow hollow0">悄悄是别离的笙箫</div>
    <h4>舞台灯光效果</h4>
    <div class="hollow hollow1">
      <div class="hollow1-child">夏虫也为我沉默</div>
    </div>
    <h4>火焰文字</h4>
    <div class="hollow hollow2">
      <div class="hollow2-child">沉默是今晚的康桥</div>
    </div>
    <h4>闪烁效果</h4>
    <div class="hollow hollow3">
      <div class="hollow3-child">悄悄的我走了</div>
    </div>
    <h4>上下摇摆</h4>
    <div class="hollow hollow4">
      <div class="hollow4-child">正如我悄悄的来</div>
    </div>
    <h4>跳跃效果</h4>
    <div class="hollow hollow5">
      <div class="hollow5-child">我挥一挥衣袖</div>
    </div>
    <h4>打字机效果</h4>
    <div class="hollow hollow6">
      <div class="hollow6-child">不带走一片云彩</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$FS: 50px;
@keyframes shine {
  0%,
  100% {
    color: #fff;
    text-shadow: 0 0 10px #0000ff, 0 0 10px #0000ff;
  }
  50% {
    text-shadow: 0 0 10px #0000ff, 0 0 40px #0000ff;
  }
}
@keyframes shine1 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
@keyframes shine2 {
  0% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0 -80px 70px #f38e1c;
  }
  30% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 10px -90px 80px #f38e1c;
  }
  60% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0px -80px 100px #f38e1c;
  }
  100% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0 -80px 70px #f38e1c;
  }
}
@keyframes shine3 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes shine4 {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-15deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes shine5 {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
  }
}
@keyframes shine6 {
  0% {
    width: 0;
  }
  100% {
    width: 7em;
  }
}
.dynamic-basic-text {
  .hollow {
    margin: 30px 0;
    text-align: center;
  }
  .hollow0 {
    font-size: $FS;
    color: #0000ff;
    animation: shine 2.4s infinite;
  }
  .hollow1 {
    background: #000;
    .hollow1-child {
      font-size: $FS;
      text-align: center;
      background: linear-gradient(to right, #0f0, #00f) 0 0 no-repeat;
      background-size: 150px;
      background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0.3);
      animation: shine1 3s infinite;
    }
  }
  .hollow2 {
    background: #000;
    .hollow2-child {
      font-size: $FS;
      color: #fff;
      font-weight: bold;
      text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
        -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0 -80px 70px #f38e1c; /*设置文字阴影*/
      animation: shine2 2s infinite;
    }
  }
  .hollow3 {
    background: #000;
    .hollow3-child {
      font-size: $FS;
      color: #fff;
      font-weight: bold;
      animation: shine3 2s infinite;
    }
  }
  .hollow4 {
    .hollow4-child {
      font-size: $FS;
      color: #fc5531;
      font-weight: bold;
      animation: shine4 2s infinite;
    }
  }
  .hollow5 {
    .hollow5-child {
      font-size: $FS;
      color: #fc5531;
      font-weight: bold;
      animation: shine5 2s infinite;
    }
  }
  .hollow6 {
    background: #000;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    .hollow6-child {
      color: #fff;
      font-size: $FS;
      width: 7em;
      height: 1.5em;
      border-right: 1px solid transparent;
      animation: shine6 2s steps(42, end) infinite;
      word-break: break-all;
      overflow: hidden;
    }    
  }
}
</style>