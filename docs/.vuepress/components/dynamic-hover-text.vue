<template>
  <div class="dynamic-hover-text">
    <h4>鼠标悬浮</h4>
    <button class="hover hover0" @mousemove="mousemove">
      <span>我有所念人，隔在远远乡。</span>
    </button>
    <h4>动态划线</h4>
    <div class="hover hover1">
      <ul class="hover1-child">
        <li><a href="#">Home Page</a></li>
        <li><a href="#">Explore Trending</a></li>
        <li><a href="#">Editor Picks</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
    <h4>图片展开</h4>
    <div class="hover2">
      <img
        src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
        alt="Sora"
        class="hover2-img-top"
      />
      <div class="hover2-body">
        <h5 class="hover2-title">Sora</h5>
        <p class="hover2-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" class="btn">More</a>
      </div>
    </div>
    <h4>卡片多方向展开</h4>
    <div class="hover3">
      <div class="hover3-child">
        <div class="hover3-child-header">Contact</div>
        <div class="hover3-child-body">
          <dl>
            <span>
              <dt>
                <a>名字：</a>
              </dt>
              <dd>skyBlue</dd>
            </span>
            <span>
              <dt><a>qq邮箱：</a></dt>
              <dd>2582347430@qq.com</dd>
            </span>
            <span>
              <dt><a>电话：</a></dt>
              <dd>(+86)13063509980</dd>
            </span>
          </dl>
        </div>
      </div>
    </div>
    <h4>发光按钮</h4>
    <div class="hover4">
      <ul>
        <li><a href="#"><svg t="1580189699029" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6908" width="20" height="20"><path d="M881.2 158.2v538.4c0 16.1-5.5 30.3-16.4 42.8-10.9 12.5-24.7 22.2-41.3 29.1-16.7 6.9-33.3 12-49.7 15.4-16.5 3.3-31.9 5.1-46.4 5.1s-29.9-1.7-46.4-5.1c-16.5-3.3-33.1-8.5-49.7-15.4s-30.4-16.6-41.3-29.1c-10.9-12.5-16.4-26.8-16.4-42.8s5.5-30.3 16.4-42.8c10.9-12.5 24.7-22.1 41.3-29.1 16.7-6.9 33.3-12 49.7-15.4 16.5-3.3 31.9-5.1 46.4-5.1 33.7 0 64.4 6.3 92.3 18.7V365L450.5 478.9v340.8c0 16-5.5 30.3-16.4 42.8-10.9 12.5-24.7 22.1-41.3 29.1-16.7 6.9-33.3 12-49.7 15.4-16.5 3.3-31.9 5.1-46.4 5.1s-29.9-1.7-46.4-5.1c-16.5-3.3-33.1-8.5-49.7-15.4s-30.4-16.6-41.3-29.1-16.4-26.8-16.4-42.8c0-16.1 5.5-30.3 16.4-42.8 10.9-12.5 24.7-22.1 41.3-29.1 16.7-6.9 33.3-12 49.7-15.4 16.5-3.3 31.9-5.1 46.4-5.1 33.7 0 64.4 6.3 92.3 18.7V281.2c0-9.9 3-19 9.1-27.2s14-13.9 23.6-17.1l399.9-123c3.8-1.3 8.3-1.9 13.4-1.9 12.8 0 23.8 4.4 32.7 13.4 9.1 9.1 13.5 20.1 13.5 32.8z" p-id="6909"></path></svg></a></li>
        <li><a href="#"><svg t="1580189904311" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4874" width="20" height="20"><path d="M897.9 290.2c-18.6-11.7-158.1 53.9-158.1 53.9v-6.9c0-57.3-48-103.7-107.3-103.7H219.3C160 233.6 112 280 112 337.3v348.6c0 57.3 48 103.7 107.3 103.7h413.3c59.3 0 107.3-46.4 107.3-103.7v-8.5s140.3 65.1 158.1 53.9c17.7-11.2 18.6-429.4-0.1-441.1z m-558.2 388V344.1l272.1 167-272.1 167.1z m0 0" p-id="4875"></path></svg></a></li>
        <li><a href="#"><svg t="1580189946180" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5108" width="20" height="20"><path d="M892.4 221.4c-13.1-13-28.7-19.5-47.1-19.5H178.7c-18.3 0-34 6.5-47.1 19.5-13.1 13.1-19.5 28.8-19.5 47.1v506.7c0 18.3 6.5 34 19.5 47.1 13.1 13 28.8 19.5 47.1 19.5h666.8c18.3 0 34-6.5 47.1-19.5 13-13.1 19.5-28.8 19.5-47.1V268.5c-0.1-18.5-6.6-34.1-19.7-47.1zM241.9 331.7c15.5-15.5 34.4-23.3 56.7-23.3s41.2 7.8 56.7 23.3c15.5 15.6 23.3 34.4 23.3 56.7s-7.8 41.1-23.3 56.7c-15.6 15.6-34.4 23.3-56.7 23.3s-41.1-7.8-56.7-23.3c-15.6-15.5-23.3-34.4-23.3-56.7s7.8-41.1 23.3-56.7z m563.4 403.4H218.7v-80l133.4-133.4 66.7 66.7 213.3-213.3 173.3 173.3v186.7z" p-id="5109"></path></svg></a></li>
        <li><a href="#"><svg t="1580189970177" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5342" width="20" height="20"><path d="M569.1 354.8c0 11.9 4.1 22.1 12.5 30.3 8.4 8.4 18.5 12.5 30.3 12.5h242.9v471.5c0 11.9-4.1 22.1-12.5 30.3-8.3 8.5-18.4 12.6-30.3 12.6H212c-11.9 0-22.1-4.1-30.3-12.5-8.4-8.4-12.5-18.5-12.5-30.3V154.8c0-11.9 4.1-22.1 12.5-30.3 8.4-8.4 18.5-12.5 30.3-12.5h357.2l-0.1 242.8z m57.1-14.2V129.7c6.6 4.1 11.9 8.4 16.1 12.5l182.2 182.2c4.1 4.1 8.4 9.5 12.5 16.1l-210.8 0.1z" p-id="5343"></path></svg></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.hover1();
  },
  methods: {
    mousemove(e) {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    },
    hover1() {
      let splitMenuLinks = document.querySelectorAll(".hover1 li a");
      splitMenuLinks.forEach((link) => {
        let words = link.textContent.split(" ");
        link.textContent = "";
        let [primaryWord, secondaryWord] = words;
        let primarySpan = document.createElement("span");
        primarySpan.textContent = primaryWord;
        primarySpan.className = "primary";
        primarySpan.dataset.text = primaryWord;
        link.append(primarySpan);
        let secondarySpan = document.createElement("span");
        secondarySpan.textContent = secondaryWord;
        secondarySpan.className = "secondary";
        secondarySpan.dataset.text = secondaryWord;
        link.append(secondarySpan);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$FS: 50px;
.hover {
}
.hover0 {
  position: relative;
  background: #f72359;
  padding: 1em 2em;
  border: none;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;
  span {
    position: relative;
  }
  &::before {
    --size: 400px;
    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  &:hover::before {
    --size: 400px;
  }
}
.hover2 {
  width: 350px;

  .hover2-img-top {
    position: relative;
    z-index: 2;
    height: 222px;
    transform: translateY(52%);
    transition: 0.5s;
  }

  .hover2-body {
    z-index: 1;
    box-sizing: border-box;
    padding: 1.25em;
    height: 220px;
    background: #fff;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.056),
      0 6.7px 5.3px rgba(0, 0, 0, 0.081), 0 12.5px 10px rgba(0, 0, 0, 0.1),
      0 22.3px 17.9px rgba(0, 0, 0, 0.119), 0 41.8px 33.4px rgba(0, 0, 0, 0.144),
      0 100px 80px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%);
    transition: 0.5s;

    .hover2-title {
      margin: 0 0 0.75em 0;
      font-size: 1.25em;
      font-weight: bold;
      line-height: 1.2;
    }

    .hover2-text {
      margin: 0 0 1em 0;
    }

    .btn {
      padding: 0.375em 0.75em;
      color: black;
      text-decoration: none;
      line-height: 1.5;
      border: 1px solid black;
      border-radius: 0.25em;
      transition: 0.5s;

      &:hover {
        color: #fff;
        background: black;
      }
    }
  }

  &:hover {
    .hover2-img-top {
      transform: translateY(2%);
    }

    .hover2-body {
      transform: translateY(0);
    }
  }
}
.hover3 {
  filter: drop-shadow(-2px 2px 8px rgba(50, 50, 0, 0.5));
  .hover3-child {
    clip-path: inset(0 0 70% 0);
    transform: translateY(30%);
    transition: 0.5s ease;
    .hover3-child-header {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 100px;
      font-size: 2em;
      color: #fff;
      background-color: #2979ff;
      clip-path: inset(0 19% 0 19%);
      transition: 0.5s ease;
    }
    .hover3-child-body {
      box-sizing: border-box;
      padding: 1.25em;
      width: 400px;
      height: 225px;
      font-size: 1.5em;
      background: #fff;
      clip-path: inset(0 19% 0 19%);
      transition: 0.5s ease;
      dl {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        margin: 0;
      }
      span {
        opacity: 0;
        transform: translateY(100%);
        transition: 0.5s ease-in;

        @for $i from 1 through 3 {
          &:nth-child(#{$i}) {
            transition-delay: $i * 0.1s;
          }
        }
        dt,
        dd {
          display: inline;
          margin: 0;

          svg {
            margin-right: 0.3em;
          }
        }
      }
    }
    &:hover {
      transform: translateY(0);
      clip-path: inset(0 0 0 0);

      .hover3-child-header,
      .hover3-child-body {
        clip-path: inset(0 0 0 0);
      }

      span {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>
<style lang="scss">
.hover1 {
  --primary-color: #03a9f4;
  --secondary-color: #ffffff;
  --border-color: #d2d5e4;
  background: #000;
  padding: 10px 20px;
  .hover1-child {
    display: flex;
    list-style-type: none;
    li {
      &:not(:last-child) {
        border-right: 2px dotted var(--border-color);
      }
      a {
        display: flex;
        padding: 6px 2em 3px;
        color: #fff;
        font-family: Lato, sans-serif;
        text-decoration: none;
        overflow: hidden;
        transition: 0.5s;
        .primary {
          position: relative;
          padding-right: 4px;
          color: var(--primary-color);
          transition: 0.3s;
          &::before {
            position: absolute;
            content: attr(data-text);
            color: var(--secondary-color);
            transform: translateY(130%);
            transition: 0.3s;
          }
        }
        .secondary {
          position: relative;
          color: var(--secondary-color);
          transition: 0.3s;

          &::before {
            position: absolute;
            content: attr(data-text);
            color: var(--primary-color);
            transform: translateY(-130%);
            transition: 0.3s;
          }
        }
        &:hover {
          span.primary {
            transform: translateY(-130%);
          }
          span.secondary {
            transform: translateY(130%);
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@function glow(
  $inner-color: #fff,
  $outer-color: hsla(255, 255, 255, 0.05),
  $depth: 5,
  $delta: 20px
) {
  $shadows: ();
  // inner glow
  @for $i from 1 through ceil(($depth / 2)) {
    $shadows: append($shadows, 0 0 (($delta / 2) * $i) $inner-color, comma);
  }
  // outer glow
  @for $i from 1 through $depth {
    $shadows: append($shadows, 0 0 0 ($delta * $i) $outer-color, comma);
  }

  @return $shadows;
}

.hover4 {
  padding: 50px;
  background: hsl(237, 85%, 13%);
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin: 3.6em;
      width: 2.4em;
      height: 2.4em;
      line-height: 1.15;
      a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: hsl(237, 85%, 13%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        svg {
          z-index: 2;
        }
        &::before {
          position: absolute;
          content: "";
          z-index: -1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 50%;
          transition: 0.5s;
        }
        &:hover::before {
          z-index: 1;
          box-shadow: glow();
        }
      }
    }
  }
}
</style>