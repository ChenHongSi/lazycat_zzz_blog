<template>
    <div class="content_placeholder"></div>
    <div class="adjusttransparent_component">
        <a-breadcrumb v-for="n in 100">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<style scoped>
.adjusttransparent_component {
    background: rgba(255, 255, 255, 0.85);
    /* 圆角效果 */
    border-radius: 8px;
    /* 毛玻璃效果 */
    backdrop-filter: blur(10px);
    /* 透明度 */
    margin: 0 auto;
    padding: 10px 10px 100px 40px;
    width: 100%;
}

/* header占位元素 */
.content_placeholder {
    height: calc(110vh);
    width: 100%;
}
</style>