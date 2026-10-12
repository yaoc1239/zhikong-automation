<script setup>
const year = new Date().getFullYear()

const quickLinks = [
  { path: '/', label: '首页' },
  { path: '/cases', label: '案例展示' },
  { path: '/services', label: '服务介绍' },
  { path: '/contact', label: '联系我们' }
]

const services = [
  'PLC编程服务',
  '上位机定制开发',
  '物联网平台搭建'
]
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-about">
        <h3>智控自动化工程</h3>
        <p>
          专注工业自动化十余年，为制造企业提供 PLC
          编程、上位机定制与物联网平台一站式解决方案。
        </p>
      </div>

      <div class="footer-col">
        <h4>快速导航</h4>
        <ul>
          <li v-for="link in quickLinks" :key="link.path">
            <router-link :to="link.path">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>核心服务</h4>
        <ul>
          <li v-for="s in services" :key="s">
            <router-link to="/services">{{ s }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>联系方式</h4>
        <ul class="contact-list">
          <li>电话：400-800-1234</li>
          <li>邮箱：sales@zhikong-auto.com</li>
          <li>地址：苏州市工业园区智造大道 88 号</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ year }} 智控自动化工程有限公司 版权所有 | 苏ICP备XXXXXXXX号</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-primary);
  color: rgba(255, 255, 255, 0.85);
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.4fr;
  gap: 40px;
  padding: 48px 20px 36px;
}

.footer-about h3 {
  color: #fff;
  font-size: 18px;
  margin-bottom: 12px;
}

.footer-about p {
  font-size: 14px;
  line-height: 1.8;
}

.footer-col h4 {
  color: #fff;
  font-size: 15px;
  margin-bottom: 14px;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  font-size: 14px;
  margin-bottom: 10px;
}

.footer-col a {
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: #fff;
  text-decoration: underline;
}

.contact-list li {
  line-height: 1.7;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 0;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
