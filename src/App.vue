<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
const transitionName = ref('fade')

watch(
  () => route.path,
  (to, from) => {
    transitionName.value = to === from ? 'fade' : 'page-slide'
  }
)
</script>

<template>
  <div class="app-layout">
    <NavBar />
    <main class="app-main">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  /* 导航栏 fixed 定位，主区域下移避开 */
  flex: 1;
  padding-top: var(--navbar-height);
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
