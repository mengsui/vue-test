<template>
  <div class="title fd-clr">
    <span class="icon f-l" v-html="icon"></span>
    <span class="size f-l">{{ size }}</span>
  </div>
</template>

<script>
export default {
  name: 'Ttitle',
  props: ['icon','size'],
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/common/Title.scss';
</style>
