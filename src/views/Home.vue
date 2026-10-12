<script setup>
const advantages = [
  {
    icon: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
    title: '快速交付',
    desc: '标准化工程流程与成熟代码库，平均项目周期缩短 30%，助力产线按期投产。'
  },
  {
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9m0-18c-2.5 2.4-4 5.6-4 9s1.5 6.6 4 9M2.5 9h19M2.5 15h19',
    title: '行业经验丰富',
    desc: '深耕汽车零部件、食品饮料、锂电、包装等 10+ 行业，累计交付 300+ 自动化项目。'
  },
  {
    icon: 'M12 2L4 5v6c0 5.25 3.4 10.1 8 11.5 4.6-1.4 8-6.25 8-11.5V5l-8-3zm-2 11l2 2 4-4.5',
    title: '售后保障',
    desc: '7×24 小时响应机制，远程诊断 + 现场支持双轨服务，质保期内免费维护。'
  }
]
</script>

<template>
  <div>
    <!-- Hero 区 -->
    <section class="hero">
      <div class="container hero-inner">
        <p class="hero-tag">工业自动化一站式解决方案</p>
        <h1>智控自动化工程</h1>
        <p class="hero-sub">
          以 PLC 编程、上位机定制与物联网平台为核心，为制造企业提供
          可靠、高效、可持续迭代的智能化产线解决方案。
        </p>
        <div class="hero-actions">
          <router-link to="/contact" class="btn btn-primary">免费获取方案</router-link>
          <router-link to="/cases" class="btn btn-ghost">查看工程案例</router-link>
        </div>
        <ul class="hero-stats">
          <li><strong>300+</strong><span>交付项目</span></li>
          <li><strong>10+</strong><span>服务行业</span></li>
          <li><strong>98%</strong><span>客户续约率</span></li>
        </ul>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>核心优势</h2>
          <p>为什么选择我们</p>
        </div>
        <div class="card-grid">
          <article v-for="adv in advantages" :key="adv.title" class="adv-card">
            <div class="adv-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path :d="adv.icon" />
              </svg>
            </div>
            <h3>{{ adv.title }}</h3>
            <p>{{ adv.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 服务入口 -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <h2>核心服务</h2>
          <p>从单机自动化到厂级物联，全链路覆盖</p>
        </div>
        <div class="card-grid services-grid">
          <router-link to="/services" class="service-card">
            <h3>PLC 编程服务</h3>
            <p>西门子 / 三菱 / 欧姆龙全系列，逻辑设计与现场调试</p>
          </router-link>
          <router-link to="/services" class="service-card">
            <h3>上位机定制开发</h3>
            <p>组态监控、数据采集、MES 对接，按需定制</p>
          </router-link>
          <router-link to="/services" class="service-card">
            <h3>物联网平台搭建</h3>
            <p>设备上云、远程运维、能耗分析一平台搞定</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 55%, #2c5282 100%);
  color: #fff;
  padding: 88px 0 72px;
}

.hero-inner {
  text-align: center;
  max-width: 760px;
}

.hero-tag {
  display: inline-block;
  font-size: 14px;
  letter-spacing: 3px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  padding: 6px 18px;
  margin-bottom: 22px;
  color: rgba(255, 255, 255, 0.9);
}

.hero h1 {
  font-size: 44px;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.hero-sub {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 34px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn-ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.55);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}

.hero-stats {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 56px;
  flex-wrap: wrap;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
}

.hero-stats strong {
  font-size: 30px;
}

.hero-stats span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.section {
  padding: 64px 0;
}

.section-gray {
  background-color: var(--color-gray-bg);
}

.section-header {
  text-align: center;
  margin-bottom: 44px;
}

.section-header h2 {
  font-size: 28px;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.section-header p {
  color: var(--color-text-secondary);
  font-size: 15px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.adv-card {
  background: #fff;
  border: 1px solid var(--color-gray-border);
  border-radius: 10px;
  padding: 34px 28px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.adv-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(26, 54, 93, 0.12);
}

.adv-icon {
  width: 62px;
  height: 62px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background-color: rgba(26, 54, 93, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.adv-icon svg {
  width: 30px;
  height: 30px;
  color: var(--color-primary);
}

.adv-card h3 {
  font-size: 19px;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.adv-card p {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.services-grid {
  grid-template-columns: repeat(3, 1fr);
}

.service-card {
  background: #fff;
  border: 1px solid var(--color-gray-border);
  border-left: 4px solid var(--color-primary);
  border-radius: 8px;
  padding: 26px 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(26, 54, 93, 0.12);
}

.service-card h3 {
  font-size: 18px;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.service-card p {
  font-size: 14px;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .hero {
    padding: 56px 0 48px;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero-sub {
    font-size: 15px;
  }

  .hero-stats {
    gap: 32px;
  }

  .card-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 48px 0;
  }
}
</style>
