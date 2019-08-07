<template>
  <div class="percen">
    <p class="title">百分比使用方法</p>
    <div class="effect">
      <div class="effect_left f-l">
        <div class="effect_input">
          修改标题：<input @input="cheng" v-model="res.title" type="text">
        </div>
        <div class="effect_input">
          修改宽度：<input @input="cheng" v-model="res.width" type="text">
        </div>
        <div class="effect_input">
          修改文案颜色：<input @input="cheng" v-model="res.sizeColor" type="text">
        </div>
        <div class="effect_input">
          修改线条颜色：<input @input="cheng" v-model="res.bgcolor" type="text">
        </div>
        <div class="effect_input">
          修改底色：<input @input="cheng" v-model="res.botcolor" type="text">
        </div>
        <div class="effectinput">
          修改当前进度：<input @input="cheng" v-model="res.per" type="text">
        </div>
        <div class="effect_input">
          修改线条宽度：<input @input="cheng" v-model="res.perWidth" type="text">
        </div>
        <div class="effect_input">
          修改文案大小：<input @input="cheng" v-model="res.perSize" type="text">
        </div>
        <div class="effect_input">
          修改速度：<input @input="cheng" v-model="res.speed" type="number">
        </div>
      </div>
      <div class="effect_right f-l">
        <Perc :key="nub" :res="res"/>
      </div>
    </div>
  </div>
</template>
<script>
import Perc from '@/components/Percentage'
export default {
  name: 'percen',
  components: {
    Perc,
  },
  data() {
    return {
      nub: 0,
      res: {
        title: 'lala',
        width: 100,//百分比宽度
        sizeColor: '#000',//文案颜色
        bgcolor: '#000',//线条颜色
        botcolor: '#fff',//底园颜色
        per: 50,//当前进度
        perWidth: 5,//线条宽度
        perSize: 20,//文案大小
        speed: .4,//加载的快慢就靠它了
      }
    }
  },
  methods: {
    cheng: function(){
      this.nub +=1;
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/pages/percentage.scss';
</style>
