<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const asideVisable = ref(false)
    provide('asideVisable', asideVisable)
  }
})
</script>
<style>
  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
