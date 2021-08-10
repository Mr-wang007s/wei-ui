<template>
    <div class="topnav">
        <div class="topnav__logo">
          <!-- <button @click="changeVisable">切换</button>  -->
          <img src="../assets/logo.png" width="40" height="40"/>
          <!-- <span>LOGO</span> -->
        </div>
        <div class="topnav__menu">
            <a href="">UI组件库</a>
            <a href="">脚手架</a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
    setup() {
        const asideVisable = inject<any>('asideVisable')
        const changeVisable =  () => {
            asideVisable.value = !asideVisable.value
        }
        return {changeVisable}
    },
})
</script>
<style lang="scss" scoped>
    .topnav {
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdfe6;
        .topnav__logo img {
            margin-left: 40px;
        }
        .topnav__menu a{
            text-decoration: none;
            color: #1989fa;
            opacity: .5;
            padding: 0 22px;
            &:hover {
                opacity: 1;
            }
        }
    }

</style>
