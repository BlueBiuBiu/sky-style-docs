<template>
  <div class="static-basic-text">
    <div class="hollow hollow0">sky样式大全</div>
    <div class="hollow hollow1">sky样式大全</div>
    <div class="hollow hollow2">sky样式大全</div>
    <div class="hollow hollow3">sky样式大全</div>
    <div class="hollow hollow4">sky样式大全</div>
    <!-- <div class="hollow hollow5">sky样式大全</div>
    <div class="hollow hollow6">sky样式大全</div> -->
    <div class="hollow hollow7">sky样式大全</div>
    <div class="hollow hollow8">sky样式大全</div>
    <div class="hollow hollow9">
      <span class="half">sky样式大全</span>sky样式大全
    </div>
    <div class="hollow hollow10">
      <h4>唐杜牧《山行》</h4>
   		<p>
      		远上寒山石径斜，<br>白云生处有人家。<br>停车坐爱枫林晚，<br>霜叶红于二月花。
   		</p>
    </div>
    <div class="hollow hollow11">sky样式大全</div>
    <div class="hollow hollow12">sky样式大全</div>
    <div class="hollow hollow13">sky样式大全</div>
    <div class="hollow hollow14">sky样式大全</div>
    <div class="hollow hollow15">sky样式大全</div>
    <div class="hollow hollow16">sky样式大全</div>
    <div class="hollow hollow17">sky样式大全</div>
    <div class="hollow hollow18">sky样式大全</div>
    <div class="hollow hollow19">sky样式大全</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$FS: 50px;
.static-basic-text {
  .hollow {
    margin: 30px 0;
    text-align: center;
  }
  .hollow0 {
    -webkit-text-stroke: 1px #000;
    -webkit-text-fill-color: transparent;
    font-size: $FS;
    color: #fff;
  }
  .hollow1 {
    text-shadow: 0 0 2px hsl(40,28.57%,28.82%),
                0 0 2px hsl(40,28.57%,28.82%),
                0 0 2px hsl(40,28.57%,28.82%);
    font-size: $FS;
    color: #fff;
  }
  .hollow2 {
    font-size: $FS;
    color: #fff;
    text-shadow: 0 0 2px #a1e9b3,
                0 0 2px #81cae0,;
  }
  .hollow3 {
    font-size: $FS;
    color: #fff;
    background: linear-gradient(to right, red, blue);
    background-clip: text;
    color: transparent;
  }
  .hollow4 {
    font-size: $FS;
    color: #fff;
    text-shadow: 0 2px 0 #000;
  }
  .hollow5 {
    font-size: $FS;
    color: #fff;
    text-shadow: 0 -2px 0 #000;
  }
  .hollow6 {
    font-size: $FS;
    color: #fff;
    text-shadow: 0 -2px 2px #000;
  }
  .hollow7 {
    font-size: $FS;
    color: #fff;
    text-shadow: 0 2px 2px #000;
  }
  .hollow8 {
    font-size: $FS;
    color: #fff;
    text-shadow:1px 0px #009916, 1px 2px #006615, 3px 1px #009916,
		            2px 3px #006615, 4px 2px #009916, 4px 4px #006615,
		            5px 3px #009916, 5px 5px #006615, 7px 4px #009916,
		            6px 6px #006615, 8px 5px #009916, 7px 7px #006615,
		            9px 6px #009916, 9px 8px #006615, 11px 7px #009916;
  }
  .hollow9 {
    position: relative;
    font-size: $FS;
    color: #006615;
    .half {
      position: absolute;
      height: 60%;
      overflow: hidden;
      color: rgb(243, 161, 10);
    }
  }
  .hollow10 {
    font-family:"华文楷体";  /*设置字体*/
    width:400px;    /*设置元素宽度*/
    margin:10px auto;   /*设置外边距*/
    padding:30px;   /*设置内边距*/
    background:lightblue;  /*设置背景颜色*/
    font-size: 30px;  /*设置文字大小*/
    color:green;  /*设置文字颜色*/
    text-align: center; /*设置文字居中*/
    border:1px solid #CCCCCC;  /*设置元素边框*/
    box-shadow:3px 3px 6px #999999;  /*设置边框阴影*/
    writing-mode:vertical-rl;  /*设置以垂直方式从右向左显示*/
  }
}
</style>