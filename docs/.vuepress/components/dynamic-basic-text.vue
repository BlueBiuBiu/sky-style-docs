<template>
  <div class="dynamic-basic-text">
    <h4>交错动画</h4>
    <div class="hollow hollow9">
      <div class="hollow9-child">在星辉斑斓里放歌</div>
    </div>
    <h4>渐显效果</h4>
    <div class="hollow hollow8">
      <div class="hollow8-child">但我不能放歌</div>
    </div>
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
    <h4>故障效果</h4>
    <div class="hollow hollow7" data-text="徐志摩">徐志摩</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.hollow9();
  },
  methods: {
    hollow9() {
      let duration = 0.8;
      let delay = 0.3;
      let revealText = document.querySelector(".hollow9-child");
      console.log(revealText.textContent);
      let letters = revealText.textContent.split("");
      revealText.textContent = "";
      let middle = letters.filter((e) => e !== " ").length / 2;
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        revealText.append(span);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
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
@keyframes shine7-before {
  0% {
    clip-path: inset(0 0 0 0);
  }

  5% {
    clip-path: inset(0.8em 0 0.4em 0);
  }

  10% {
    clip-path: inset(0.4em 0 0.8em 0);
  }

  15% {
    clip-path: inset(0.1em 0 1em 0);
  }

  20% {
    clip-path: inset(0.3em 0 0.6em 0);
  }

  25% {
    clip-path: inset(0.6em 0 0.3em 0);
  }

  30% {
    clip-path: inset(0.8em 0 0.5em 0);
  }

  35% {
    clip-path: inset(1em 0 0.1em 0);
  }

  40% {
    clip-path: inset(0.7em 0 0.35em 0);
  }

  45% {
    clip-path: inset(0.5em 0 0.2em 0);
  }

  50% {
    clip-path: inset(0.2em 0 0.5em 0);
  }

  55% {
    clip-path: inset(0.35em 0 0.7em 0);
  }

  60% {
    clip-path: inset(0.1em 0 0.9em 0);
  }

  65% {
    clip-path: inset(0.8em 0 0.46em 0);
  }

  70% {
    clip-path: inset(0.66em 0 0.33em 0);
  }

  75% {
    clip-path: inset(0.48em 0 0.23em 0);
  }

  80% {
    clip-path: inset(0.23em 0 0.48em 0);
  }

  85% {
    clip-path: inset(0.39em 0 0.79em 0);
  }

  90% {
    clip-path: inset(0.33em 0 0.66em 0);
  }

  95% {
    clip-path: inset(1em 0 0.3em 0);
  }

  100% {
    clip-path: inset(0.62em 0 0.29em 0);
  }
}

@keyframes shine7-after {
  0% {
    clip-path: inset(0 0 0 0);
  }

  5% {
    clip-path: inset(0.4em 0 0.8em 0);
  }

  10% {
    clip-path: inset(0.8em 0 0.4em 0);
  }

  15% {
    clip-path: inset(1em 0 0.1em 0);
  }

  20% {
    clip-path: inset(0.6em 0 0.3em 0);
  }

  25% {
    clip-path: inset(0.3em 0 0.6em 0);
  }

  30% {
    clip-path: inset(0.5em 0 0.8em 0);
  }

  35% {
    clip-path: inset(0.1em 0 1em 0);
  }

  40% {
    clip-path: inset(0.35em 0 0.7em 0);
  }

  45% {
    clip-path: inset(0.2em 0 0.5em 0);
  }

  50% {
    clip-path: inset(0.5em 0 0.2em 0);
  }

  55% {
    clip-path: inset(0.7em 0 0.35em 0);
  }

  60% {
    clip-path: inset(0.9em 0 0.1em 0);
  }

  65% {
    clip-path: inset(0.46em 0 0.8em 0);
  }

  70% {
    clip-path: inset(0.3em 0 0.66em 0);
  }

  75% {
    clip-path: inset(0.23em 0 0.48em 0);
  }

  80% {
    clip-path: inset(0.48em 0 0.23em 0);
  }

  85% {
    clip-path: inset(0.79em 0 0.39em 0);
  }

  90% {
    clip-path: inset(0.66em 0 0.33em 0);
  }

  95% {
    clip-path: inset(0.3em 0 1em 0);
  }

  100% {
    clip-path: inset(0.29em 0 0.62em 0);
  }
}
@keyframes shine8 {
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
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
      margin: 0 auto;
    }
  }
  .hollow7 {
    background: #000;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    font-size: $FS;
    font-weight: 600;
    padding: 0 4px;
    color: #fff;
    position: relative;
    &::before {
      content: attr(data-text);
      position: absolute;
      left: -2px;
      width: 100%;
      background: #000;
      text-shadow: 2px 0 #f00;
      animation: shine7-before 3s infinite linear alternate-reverse;
    }
    &::after {
      content: attr(data-text);
      position: absolute;
      left: 2px;
      width: 100%;
      background: #000;
      text-shadow: -2px 0 #f00;
      animation: shine7-after 3s infinite linear alternate-reverse;
    }
  }
  .hollow8 {
    background: #000;
    .hollow8-child {
      text-transform: uppercase;
      background: linear-gradient(90deg, #000 0%, #fff 50%, #000 100%) no-repeat;
      background-size: 80%;
      color: transparent;
      background-clip: text;
      font-size: $FS;
      animation: shine8 3s linear infinite;
    }
  }
}
</style>
<style lang="scss">
$FS: 50px;
@keyframes shine9-fade-in {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shine9-slide-left {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes shine9-slide-right {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
.hollow9 {
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

  .hollow9-child {
    position: relative;
    display: flex;
    color: #6ee1f5;
    font-size: $FS;
    font-family: Raleway, sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre;

    span {
      opacity: 0;
      transform: scale(0);
      animation: shine9-fade-in 2.4s forwards infinite;
    }

    &::before, &::after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      background: #fff;
      opacity: 0;
      transform: scale(0);
    }

    &::before {
      left: 50%;
      animation: shine9-slide-left 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards 0.9s infinite;
    }

    &::after {
      right: 50%;
      animation: shine9-slide-right 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards 0.9s infinite;
    }
  }
}
</style>