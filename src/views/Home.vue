<template>
    <TopnavVue></TopnavVue>
    <div class="banner">
        <img  class="banner__img" src="../assets/home-logo.jpeg" width="150" height="100">
         <h1>WEI · 前端基础能力沉淀</h1>
        <p class="banner__desc">wei-ui 基于Vue 3.0 的桌面端组件库</p>
        <p class="banner__btn">
            <a href>GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TopnavVue from '../components/Topnav.vue'


export default defineComponent({
    components: {
        TopnavVue
    },
    setup() {

    },
})
</script>
<style lang="scss" scoped>
.banner {
    position: relative;
    text-align: center;
    overflow: hidden;
    h1 {
        font-size: 34px;
        margin: 0;
        line-height: 48px;
        color: #555;
    }
    &__img {
        display: inline-block;
        padding: 60px 0 20px 0;
    }
    &__desc {
        font-size: 18px;
        line-height: 28px;
        color: #888;
        margin: 20px 0 5px;
    }
    &__btn a{
        margin: 10px;

    }
}
</style>
