<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()

const navItems = [
  { path: '/', label: '首页' },
  { path: '/cases', label: '案例展示' },
  { path: '/services', label: '服务介绍' },
  { path: '/contact', label: '联系我们' }
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <svg
          class="brand-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" fill="currentColor" stroke="none" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
        <span class="brand-text">
          <strong>智控自动化工程</strong>
          <small>ZHIKONG AUTOMATION</small>
        </span>
      </router-link>

      <!-- 桌面端导航 -->
      <nav class="nav-desktop" aria-label="主导航">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
        <router-link to="/contact" class="nav-cta">获取方案报价</router-link>
      </nav>

      <!-- 移动端汉堡按钮 -->
      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        :aria-expanded="menuOpen"
        aria-label="切换菜单"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- 移动端下拉菜单 -->
    <transition name="dropdown">
      <nav v-if="menuOpen" class="nav-mobile" aria-label="移动端导航">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-mobile-link"
          :class="{ active: route.path === item.path }"
          @click="closeMenu"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  background-color: #fff;
  border-bottom: 1px solid var(--color-gray-border);
  box-shadow: 0 1px 8px rgba(26, 54, 93, 0.08);
  z-index: 1000;
}

.navbar-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  width: 34px;
  height: 34px;
  color: var(--color-primary);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-text strong {
  font-size: 17px;
  color: var(--color-primary);
}

.brand-text small {
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--color-text-secondary);
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link {
  font-size: 15px;
  color: var(--color-text);
  padding: 6px 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.nav-cta {
  font-size: 14px;
  color: #fff;
  background-color: var(--color-primary);
  padding: 9px 20px;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.nav-cta:hover {
  background-color: var(--color-primary-light);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  padding: 9px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--color-primary);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 1px solid var(--color-gray-border);
  box-shadow: 0 8px 16px rgba(26, 54, 93, 0.1);
}

.nav-mobile-link {
  padding: 14px 20px;
  font-size: 15px;
  color: var(--color-text);
  border-top: 1px solid var(--color-gray-border);
}

.nav-mobile-link.active {
  color: var(--color-primary);
  background-color: var(--color-gray-bg);
  font-weight: 600;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-mobile {
    display: flex;
  }

  .brand-text small {
    display: none;
  }
}
</style>
