<template>
  <div class="contant">
    <div class="mod fd-clr">
      <div class="mod_left">
        <div class="box">
          <resume/>
        </div>
      </div>
      <div class="mod_right">
        <el-menu
          default-active="/resume"
          :router= "true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-menu-item index="/resume">
            <i class="icon">&#xe60f;</i>
            <span slot="title">个人简历</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="icon">&#xe618;</i>
              <span>效果记录</span>
            </template>

            <el-menu-item-group>
              <span slot="title">canvas</span>
              <el-menu-item index="/percentage">百分比动画</el-menu-item>
              <el-menu-item index="/chinaMap">中国地图</el-menu-item>
              <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </div>

    </div>
  </div>
</template>
<script>
import resume from '@/views/Resume/Resume';

export default {
  name: 'home',
  components: {
    resume
  },
}
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/Home.scss';
</style>
