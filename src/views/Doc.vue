<template>
    <TopnavVue></TopnavVue>
    <div class="content-doc">
        <aside class="content-doc__aside content-doc__nav">
            <Menu></Menu>
        </aside>
        <main class="content-doc__main page-container page-component">
            <div class="page-component__content">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
import TopnavVue from '../components/Topnav.vue'
import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        TopnavVue,
        Menu
    },
    setup() {
        const asideVisable = inject('asideVisable')
        return { asideVisable }
    },
})
</script>
<style lang="scss" scoped>
    .content-doc {
        display: flex;
        height: calc(100vh - 60px);
        &__aside {
            min-width: 200px;
            border-right: 1px solid #ebedf0;
            margin: 0 20px 0 100px;
            height: 100%;
            overflow: auto;
        }
        &__main {
            // width: 200px;
            height: 100%;
            width: 100%;
            min-width: 500px;
            padding-right: 100px;
            overflow: auto;
        }
    }
.content-doc2 {
    max-width: 1680px;
    min-width: 800px;
    margin: auto;
    padding-left: 220px;
    
    box-sizing: border-box;
    overflow: auto;
    &__main {
        float: left;
        width: 100%;
        padding-top: 20px;        
    }
    &__asdie {
        margin-left: -100%;
        float: left;
        position: relative;
        left: -220px;
        width: 200px;
        background-color: aqua;
    }
    &__viewbox {
        margin-left: -360px;
        position: relative;
        right: -360px;
        float: left;
        width: 360px;
        min-width: 360px;
        background-color: aqua;
    }
    &__nav {
        padding: 24px 0 72px;
        overflow-y: scroll;
        background-color: #fff;
        box-shadow: 0 8px 12px #ebedf0;
    }
}
</style>
