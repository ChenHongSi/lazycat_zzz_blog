<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 在 `<script setup>` 标签下要使用 `props`，则需要使用 `defineProps` 进行声明
const props = defineProps({
  // 滚动容器 - 如果容器高度会发生变化，则需要对其进行监听，否则会滚动进度会出现计算误差
  root: {
    type: String,
    default: '#app',
    required: false,
  },
  // 滚动条的高度
  height: {
    type: String,
    default: '4px',
    required: false,
  },
  // 滚动条颜色
  theme: {
    type: String,
    default: '#73f9fd',
    required: false,
    validator: (v: string) => {
      document.head.style.color = v
      const q = document.head.style.color
      document.head.style.color = ''
      return !!q
    },
  },
  // 滚动条放置的位置：顶部或底部
  placement: {
    type: String,
    default: 'top',
    required: false,
    validator: (v: string) => {
      if (!['top', 'bottom'].includes(v)) {
        console.error(`[ScrollProgress(placement)] The value must match one of these strings: 'top' | 'bottom'`)
        return false
      }
      return true
    },
  },
  // 滚动条在页面中的层级
  zIndex: {
    type: [Number, String],
    default: 10000,
    required: false,
    validator: (v: string) => /^-?[\d]+$/.test(v),
  },
})

const el =  ref<HTMLDivElement | null>(null)
const appHeight = ref(0)

// 为了避免进度条因页面容器高度变化导致计算偏差，需要对页面容器进行监听，动态获取其高度
onMounted(() => {
  // 需要观察变动的节点
  const targetNode = document.querySelector(props.root)
  if (!targetNode) return console.error(`[ScrollProgress(root)] '${props.root}' is invalid`)
  // 观察器的配置（需要观察什么变动）
  const config = { attributes: true, childList: false, subtree: true }
  // 创建一个观察器实例并传入当观察到变动时执行的回调函数
  const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        appHeight.value = document.documentElement.scrollHeight
      }
    }
  })
  // 开始观察目标节点
  observer.observe(targetNode, config)
})

// 滚动事件执行的回调函数
const listener = () => {
  const scrollProgress = el.value!
  const height = appHeight.value - document.documentElement.clientHeight
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`
}

onMounted(() => window.addEventListener('scroll', listener))
onUnmounted(() => window.removeEventListener('scroll', listener))

const style: any = {
  background: props.theme,
  zIndex: props.zIndex,
  height: props.height,
}

if (props.placement === 'top') style.top = 0
if (props.placement === 'bottom') style.bottom = 0

// 在 `<script setup>` 标签下显式公开属性，则需要使用 `defineExpose`
defineExpose({ style })
</script>

<template>
  <div id="scroll_progress" ref="el" :style="style"></div>
</template>

<style scoped>
#scroll_progress {
  position: fixed;
  width: 0%;
  transition: width 300ms ease-out;
}
</style>