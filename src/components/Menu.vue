<template>
    <section class="menu">
        <h4>开发指南</h4>
        <ul>
            <li>
                <router-link to="/component/installation">安装</router-link>
            </li>
            <li>
                <router-link to="/component/quickstart">快速上手</router-link>
            </li>
        </ul>
        <h4>组件</h4>
        <ul>
            <li>
                <router-link to="/component/layout">布局</router-link>
            </li>
            <li>
                <router-link to="/component/container">布局容器</router-link>
            </li>
            <li>
                <router-link to="/component/button">按钮</router-link>
            </li>
            <li>
                <router-link to="/component/radio">单选框</router-link>
            </li>
            <li>
                <router-link to="/component/switch">多选框</router-link>
            </li>
        </ul>
    </section>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>
<style lang="scss" scoped>
.menu {
    ul {
        padding-inline-start: 0;
    }
    li {
        list-style: none;
        font-size: 16px;
    }
    a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        text-decoration: none;
    }
    .router-link-active {
        color: #409eff;
    }
}

</style>
