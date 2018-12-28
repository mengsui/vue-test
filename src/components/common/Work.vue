<template>
  <div class="work">
    <div class="head fd-clr">
      <span class="time f-l">{{res.time}}</span>
      <span class="companyname f-r">{{res.company}}</span>
    </div>
    <div class="position">
      职位：{{res.position}}
    </div>
    <div class="posiurl">
      项目链接：<a :href="res.url" target="_blank">{{res.url}}</a>
    </div>
    <p class="size" v-html="res.size"></p>
  </div>
</template>

<script>
export default {
  name: 'work',
  props: ['res']
}
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/common/Work.scss';
</style>
