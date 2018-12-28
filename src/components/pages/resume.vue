<template>
  <div class="contant con-auto">
    <div class="mod_left">
      <div class="img">
        <div class="head-img" :style="{backgroundImage: 'url(http://img5.imgtn.bdimg.com/it/u=2540404912,2984989799&fm=26&gp=0.jpg)'}"></div>
      </div>
      <div class="same name">
        <span class="icon f-l">&#xe662;</span>
        姓名：{{ name }}
      </div>
      <div class="same year">
        <span class="icon f-l">&#xe647;</span>
        年龄：{{ year }}
      </div>
      <div class="same city">
        <span class="icon f-l">&#xe611;</span>
        城市：{{ city }}
      </div>
      <div class="same phone">
        <span class="icon f-l">&#xe60d;</span>
        电话：{{ phone }}
      </div>
      <div class="same email">
        <span class="icon f-l">&#xe694;</span>
        邮箱：{{ email }}
      </div>
      <div class="speciality">
        <p class="ty-title">
          <span class="icon f-l">&#xe6e4;</span>
          技能特长
        </p>
        <div class="box fd-clr">
          <div v-for="(item,index) in tas" :key="index" class="solt f-l">
            <Perc :res="item"/>
          </div>
        </div>
      </div>
      <div class="label fd-clr">
        <p class="ty-title">
          <span class="icon f-l">&#xeed1;</span>
          个人标签
        </p>
        <ul class="lable-sty fd-clr">

          <li v-for="(item,index) in labe" :key="index" class="fd-clr f-l">
            <span class="icon f-l" v-html="item.icon"></span>
            {{ item.size }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mod_right">
      <p class="name">{{ name }}</p>
      <p class="explain">博客：<a href="https://blog.csdn.net/qq_42813932" target="_blank">https://blog.csdn.net/qq_42813932</a></p>
      <p class="explain">简历git：<a href="https://github.com/mengsui/vue-test" target="_blank">https://github.com/mengsui/vue-test</a></p>
      <Title icon="&#xe619;" size="个人优势"/>
      <div class="advantage">
        1. 精通html5+css,html基本布局和重构以及html5+css3新特性，根据设计图完成页面制作。<br/>
        2. 熟练运用AJAX请求获取JSON格式的数据以及对JSON数据进行解析处理熟悉JQuery、Swiper.js、echarts、等第三方类库，方便了工作的执行</br>
        3. 熟悉canvas绘图和了解SVG动画。<br/>
        4. 熟悉git版本管理工具。<br/>
        5. 熟悉react写法。<br/>
        6. 熟悉iconfont、less、scss。<br/>
        7. 熟悉切图工具photoshop、sketch。<br/>
        8. 熟熟练运用localstorage, sessionstorage和cookie。<br/>
        9. 熟悉vue-cil、webpack、element-ui。<br/>
      </div>
      <Title icon="&#xe619;" size="求职意向"/>
      <ul class="intention fd-clr">
        <li v-for="(item,index) in intention" :key="'inten'+index" class="fd-clr f-l">
          <span class="icon f-l" v-html="item.icon"></span>
          {{item.size}}
        </li>
      </ul>
      <Title icon="&#xe7a6;" size="工作经验"/>
      <div v-for="(item, index) in experience" :key="index" class="work-box">
        <Work :res="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Perc from '../common/Percentage';
import Title from '../common/Title';
import Work from '../common/Work';
export default {
  name: 'home',
  components: {
    Perc,
    Title,
    Work,
  },
  data () {
    return {
      name: '王悦',
      year: 25,
      city: '北京',
      phone: 15810240230,
      email: '1198810568@qq.com',
      tas: [
        {
          title: 'div+css',
          per: '80',
        },
        {
          title: 'jq',
          per: '70',
        },
        {
          title: 'canvas',
          per: '60',
        },
        {
          title: 'vue',
          per: '60',
        }
      ],
      labe: [
        {
          icon: '&#xe605;',
          size: '音乐',
        },
        {
          icon: '&#xe68b;',
          size: '电影',
        },
        {
          icon: '&#xe6a2;',
          size: '游戏',
        }
      ],
      intention: [
        {
          icon: '&#xe62a;',
          size: '职位：web前端',
        },
        {
          icon: '&#xec70;',
          size: '城市：北京',
        },
        {
          icon: '&#xe60e;',
          size: '入职时间：1周内',
        },
        {
          icon: '&#xe7ae;',
          size: '薪资：12K',
        }
      ],
      experience: [
        {
          time: '2018年7月',
          company: '1688实力商家-pc页面',
          position: 'web前端开发',
          url: 'https://shili.1688.com/page/zhaoshang.html',
          size: '1、通过cookies来判断用户登录状态。<br/>2、通过跨域请求后台接口，显示最近那个用户入驻。<br/>3、按设计图编写HTML和css代码渲染到页面上并编写各种效果。',
        },
        {
          time: '2018年6月',
          company: '商学院活动页面-无线页面',
          position: 'web前端开发',
          url: 'https://peixun.1688.com/cms/968820c7.html',
          size: '1、使用rem完成手机端的适配问题。<br/>2、使用css完成动画效果的展示。<br/>3、通过canvas绘制生产base64图片。',
        },
        {
          time: '2017年5月',
          company: '1688服务市场-pc页面',
          position: 'web前端开发',
          url: 'https://fuwu.1688.com/index.html',
          size: '1、保障ie8下样式大体不乱。<br/>2、通过跨域请求后台接口，显示具体产品的信息。',
        },
        {
          time: '2018年12月',
          company: '本页面',
          position: 'web前端开发',
          url: '无',
          size: '1、通过vue-cil初始化为vue+webpack文件夹。<br/>2、使用vue安装element-ui。<br/>3、配置webpack，编译scss文件。<br/>4、修改路由方式，加载模式为：history，默认加载模式点击时不会刷新页面。<br/>5、右侧导航内部“百分比动画”通过v-model同步数据。根据key值的变动同步刷新组件数据。<br/>6、该页面还在持续更新中。',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/pages/resume.scss';
</style>
