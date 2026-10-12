<script setup>
const cases = [
  {
    name: '汽车零部件装配线自动化改造',
    industry: '汽车制造',
    tags: ['PLC', '机器人集成', '视觉检测'],
    desc: '为某合资零部件厂商改造 12 工位装配线，集成 6 台六轴机器人与视觉定位系统，节拍提升 25%，人工由 18 人降至 6 人。',
    svg: 'M3 20V9l4-3 4 3v11M11 20V9l4-3 4 3v11M3 20h18M6 9v0m10 3v0'
  },
  {
    name: '饮料灌装车间 MES 上位机系统',
    industry: '食品饮料',
    tags: ['上位机', '数据采集', '报表定制'],
    desc: '开发车间级 SCADA 上位机，对接 8 条灌装线 2000+ 点位，实现产量、能耗、故障停机实时看板与自动报表，异常响应提速 60%。',
    svg: 'M4 4h16v12H4zM4 8h16M8 12h3m5 0h1M2 20h20M9 16v4m6-4v4'
  },
  {
    name: '锂电生产线物联网监控平台',
    industry: '新能源',
    tags: ['物联网', '设备上云', '远程运维'],
    desc: '为锂电客户搭建设备物联网平台，接入烘箱、涂布机等 120 台设备，支持远程参数下发与 OEE 分析，非计划停机减少 35%。',
    svg: 'M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 0c3 3.5 3 14.5 0 18m0-18C9 6.5 9 17.5 12 21M3.5 9h17m-17 6h17'
  },
  {
    name: '智能立体仓库 WMS 联动控制',
    industry: '物流仓储',
    tags: ['WMS对接', '堆垛机', '调度算法'],
    desc: '承建 8000 库位立体仓库电控系统，WMS 与 PLC 实时联动，任务自动调度，出入库效率达 420 托/小时，差错率低于 0.01%。',
    svg: 'M3 3h18v18H3zM3 8h18M8 8v10m8-10v10M3 13h5m10 0h5'
  }
]
</script>

<template>
  <div class="page">
    <div class="container">
      <div class="page-header">
        <h1>案例展示</h1>
        <p>每一个项目，都是一次产线效率的跃升</p>
      </div>

      <div class="case-grid">
        <article v-for="item in cases" :key="item.name" class="case-card">
          <div class="case-cover" :aria-label="item.name + ' 占位图'">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path :d="item.svg" />
            </svg>
            <span class="case-industry">{{ item.industry }}</span>
          </div>
          <div class="case-body">
            <h3>{{ item.name }}</h3>
            <div class="case-tags">
              <span v-for="tag in item.tags" :key="tag" class="case-tag">{{ tag }}</span>
            </div>
            <p>{{ item.desc }}</p>
          </div>
        </article>
      </div>

      <div class="case-cta">
        <p>想了解类似项目如何落地？我们可以为您定制方案。</p>
        <router-link to="/contact" class="btn btn-primary">咨询项目方案</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.case-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.case-card {
  background: #fff;
  border: 1px solid var(--color-gray-border);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(26, 54, 93, 0.12);
}

.case-cover {
  position: relative;
  aspect-ratio: 16 / 8.5;
  background: linear-gradient(135deg, var(--color-primary) 0%, #2c5282 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-cover svg {
  width: 42%;
  height: 52%;
  color: rgba(255, 255, 255, 0.35);
}

.case-industry {
  position: absolute;
  top: 14px;
  left: 14px;
  background-color: rgba(255, 255, 255, 0.92);
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 999px;
}

.case-body {
  padding: 22px 24px 26px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-body h3 {
  font-size: 18px;
  color: var(--color-primary);
  margin-bottom: 12px;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.case-tag {
  font-size: 12px;
  color: var(--color-primary-light);
  background-color: rgba(26, 54, 93, 0.07);
  border-radius: 4px;
  padding: 3px 10px;
}

.case-body p {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.case-cta {
  margin-top: 48px;
  text-align: center;
  background-color: var(--color-gray-bg);
  border: 1px solid var(--color-gray-border);
  border-radius: 10px;
  padding: 36px 24px;
}

.case-cta p {
  color: var(--color-text);
  margin-bottom: 18px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .case-grid {
    grid-template-columns: 1fr;
  }
}
</style>
