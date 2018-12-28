<template>
  <div class="percentage f-l">
    <canvas ref="percan"></canvas>
    <p class="size" :style="{color: can.sizeColor}" >{{size}}</p>
  </div>
</template>
<script>
export default {
  name: 'baifen',
  props: ['res'],
  data() {
    return {
      size: '技能名字',
      can: {
        cxt: '',//canvas dom
        width: 100,//百分比宽度
        sizeColor: '#fff',//文案颜色
        bgcolor: '#5d8fb8',//线条颜色
        botcolor: '#fff',//底园颜色
        per: 50,//当前进度
        perWidth: 5,//线条宽度
        perSize: 20,//文案大小
        speed: .1,//加载的快慢就靠它了
      }
    }
  },
  created(){
    this.size = this.res.title;
    this.can = {
      cxt: '',//canvas dom
      width: this.res.widht || 100,//百分比宽度
      sizeColor: this.res.sizeColor ||'#fff',//文案颜色
      bgcolor: this.res.bgcolor ||'#5d8fb8',//线条颜色
      botcolor: this.res.botcolor ||'#fff',//底园颜色
      per: this.res.per || 0,//当前进度
      perWidth: this.res.perWidth || 5,//线条宽度
      perSize: this.res.perSize || 20,//文案大小
      speed: 0,//从多少开始
      spe: Number( this.res.speed ) || .4,//加载的快慢就靠它了
    }
  },
  mounted(){
    this.init();
  },
  methods: {
    init(){
      this.canvasFun();
    },
    canvasFun(){
      const c = this.$refs.percan;

      // console.log(c)
      c.width = this.can.width;
      c.height = this.can.width;
      this.can.cxt = c.getContext("2d");
      this.animate();
    },
    animate(){
      const cxt = this.can.cxt;
      const self = this;
      window.requestAnimationFrame(function(){
          if(self.can.speed < self.can.per ){ //画多少100为圆50为半圆
              self.animate();
          }else {
            return;//关闭定时器
          }
      });

      cxt.clearRect(0, 0, self.can.width, self.can.width);//在给定矩形内清空一个矩形：
      this.can.speed += this.can.spe;
      this.drawCircle(cxt);
    },
    drawCircle(cxt){
      const percent = this.can.speed;
      //将360度分成100份，那么每一份就是rad度
      const rad = Math.PI*2/100;
      //画白色的静态圆
      //cxt.save();
      cxt.strokeStyle = this.can.botcolor;
      cxt.lineWidth = this.can.perWidth;//圆的宽
      cxt.beginPath();
      cxt.arc(this.can.width/2, this.can.width/2, this.can.width/2 - this.can.perWidth, Math.PI*2, false);
      cxt.stroke();
      cxt.closePath();
      cxt.restore();

      if(this.can.per!=0){
        cxt.strokeStyle = this.can.bgcolor;//圆的颜色
        cxt.lineWidth = this.can.perWidth + .5;//圆的宽
        cxt.beginPath();
        cxt.arc(this.can.width/2, this.can.width/2, this.can.width/2 - this.can.perWidth, -Math.PI/2, -Math.PI/2 +percent * rad, false);
        cxt.restore();
        cxt.lineCap = 'round';
        cxt.stroke();
      }
      //百分比文字绘制
      cxt.fillStyle = this.can.sizeColor;
      cxt.font = this.can.perSize+"px Arial";
      cxt.textAlign = "center";
      //绘制字体并指定位置
      cxt.fillText(percent.toFixed(0) + '%', this.can.width/2, this.can.width/2 + this.can.perSize/2);
      cxt.restore();
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/common/Percentage.scss';
</style>
