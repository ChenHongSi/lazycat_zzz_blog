<template>
    <div>
        <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" class="adjusttransparent_component">
                <a-menu-item key="1">
                    <RouterLink to="/">Home</RouterLink>
                </a-menu-item>
                <a-menu-item key="2">
                    <RouterLink to="/Jabber">碎 碎 念</RouterLink>
                </a-menu-item>
                <a-menu-item key="3">
                    <RouterLink to="/blog">blog</RouterLink>
                </a-menu-item>
                <a-menu-item key="4">
                    <RouterLink to="/programme">日 程</RouterLink>
                </a-menu-item>
        </a-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Scroll from './scroll.vue';
const selectedKeys = ref(['2']);
</script>

<style scoped>
.adjusttransparent_component {
    /* 圆角效果 */
    border-radius: 8px;
    /* 透明度 */
    background: transparent;
    justify-content: flex-end;
    gap: 30px;
    width: 100%;
}

.test {
    width: 100%;
    height: 20px;
    margin: 0px;
    padding: 0px;
}

</style>
