<template>
  <div class="background-layer">
    <!-- 第一层：背景图 -->
    <img src="../../public/[米室]\ 81251528.png" class="background-image" alt="background" />
    
    <!-- 第二层：内容区域 -->
    <a-layout class="content-layer">
      <a-layout-content class="transparent-content">
        <!-- 这里放置你的主要内容 -->
        <div v-for="i in 20" :key="i" class="content-block">
          Content Section {{ i }}
        </div>
      </a-layout-content>
    </a-layout>
    
    <!-- 第三层：悬浮header -->
    <a-layout-header class="sticky-header">
      <div class="header-content">
        <h1>Transparent Header</h1>
        <a-menu
          mode="horizontal"
          :items="items"
          class="transparent-menu"
        />
      </div>
    </a-layout-header>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { key: '1', label: 'Home' },
  { key: '2', label: 'About' },
  { key: '3', label: 'Contact' }
]);
</script>

<style scoped>
/* 基础布局设置 */
.background-layer {
  min-height: 100vh;
  overflow: hidden;
  background-image: url('../../public/[米室]\ 81251528.png');
  background-attachment: fixed;
  /* 关键属性 */
  background-size: cover;
  /* 覆盖整个容器 */
  background-position: center;
  /* 图片居中 */
  background-repeat: no-repeat;
  position: relative;
}

/* 第一层：背景图 */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

/* 第二层：内容区域 */
.content-layer {
  position: relative;
  z-index: 2;
  background: transparent;
  min-height: 100vh;
}

.transparent-content {
  padding: 100px 50px 50px; /* 顶部留出header空间 */
  margin-top: 64px; /* 匹配header高度 */
  background: transparent;
}

.content-block {
  height: 300px;
  margin-bottom: 20px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 8px;
}

/* 第三层：悬浮header */
.sticky-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 3;
  background: transparent;
  backdrop-filter: blur(5px); /* 毛玻璃效果 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 50px;
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
}

.transparent-menu {
  background: transparent;
  border-bottom: none !important;
  line-height: 620px;
}
</style>