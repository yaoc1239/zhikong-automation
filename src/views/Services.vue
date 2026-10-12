<script setup>
const services = [
  {
    icon: 'M6 4h12v3a6 6 0 0 1-12 0V4zM9 13v0m6 0v0M6 4L4 8l2 2m12-6l2 4-2 2M9 20h6M12 13v7',
    title: 'PLC 编程服务',
    subtitle: 'Programmable Logic Controller',
    desc: '从电气图纸梳理、I/O 规划到程序架构设计与现场调试，提供完整的 PLC 控制系统交付。支持西门子 S7 系列、三菱 Q/L 系列、欧姆龙 CJ 系列等主流平台。',
    points: ['顺序控制 / 运动控制 / 过程控制程序开发', '设备改造与老旧程序标准化重构', '现场调试、节拍优化与故障排查']
  },
  {
    icon: 'M3 4h18v12H3zM3 8h18M7 12h4m3 0h3M2 20h20M9 16v4m6-4v4',
    title: '上位机定制开发',
    subtitle: 'SCADA & HMI Custom Development',
    desc: '基于 WinCC、组态王及自研框架，开发贴合产线业务的监控与管理软件。打通设备层与管理层，让数据真正服务于生产决策。',
    points: ['组态画面、报警管理、历史数据追溯', '与 MES / ERP / WMS 系统无缝对接', '定制报表、产量统计与看板大屏']
  },
  {
    icon: 'M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 0c3 3.5 3 14.5 0 18m0-18C9 6.5 9 17.5 12 21M3.5 9h17m-17 6h17',
    title: '物联网平台搭建',
    subtitle: 'Industrial IoT Platform',
    desc: '从网关选型、协议解析到云平台部署，构建厂级工业物联网体系。设备状态一目了然，远程运维触手可及。',
    points: ['多协议接入：Modbus / OPC UA / MQTT', '设备上云、远程监控与预警推送', 'OEE 分析、能耗管理与数字化驾驶舱']
  }
]

const workflow = [
  { step: '01', title: '需求调研', desc: '现场勘察，明确工艺要求与交付边界' },
  { step: '02', title: '方案设计', desc: '输出系统架构、报价与实施计划' },
  { step: '03', title: '开发实施', desc: '编程开发、离线仿真、进场安装' },
  { step: '04', title: '调试交付', desc: '联调优化、培训移交、文档齐全' },
  { step: '05', title: '运维保障', desc: '质保维护、远程支持、持续优化' }
]
</script>

<template>
  <div class="page">
    <div class="container">
      <div class="page-header">
        <h1>服务介绍</h1>
        <p>覆盖控制系统、监控软件与工业物联网的完整服务链</p>
      </div>

      <div class="service-list">
        <article v-for="(s, i) in services" :key="s.title" class="service-item" :class="{ reverse: i % 2 === 1 }">
          <div class="service-icon-wrap">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path :d="s.icon" />
            </svg>
          </div>
          <div class="service-content">
            <h2>{{ s.title }}</h2>
            <p class="service-subtitle">{{ s.subtitle }}</p>
            <p class="service-desc">{{ s.desc }}</p>
            <ul class="service-points">
              <li v-for="p in s.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </article>
      </div>

      <div class="workflow">
        <h2 class="workflow-title">服务流程</h2>
        <ol class="workflow-steps">
          <li v-for="w in workflow" :key="w.step" class="workflow-step">
            <span class="step-num">{{ w.step }}</span>
            <h3>{{ w.title }}</h3>
            <p>{{ w.desc }}</p>
          </li>
        </ol>
      </div>

      <div class="services-cta">
        <p>不确定需要哪种服务？告诉我们您的产线痛点，工程师为您评估。</p>
        <router-link to="/contact" class="btn btn-primary">联系工程师</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 64px;
}

.service-item {
  display: flex;
  gap: 36px;
  background: #fff;
  border: 1px solid var(--color-gray-border);
  border-radius: 10px;
  padding: 34px;
  transition: box-shadow 0.2s ease;
}

.service-item:hover {
  box-shadow: 0 12px 28px rgba(26, 54, 93, 0.1);
}

.service-item.reverse {
  flex-direction: row-reverse;
}

.service-icon-wrap {
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--color-primary) 0%, #2c5282 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon-wrap svg {
  width: 48px;
  height: 48px;
  color: #fff;
}

.service-content h2 {
  font-size: 22px;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.service-subtitle {
  font-size: 13px;
  color: var(--color-text-secondary);
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}

.service-desc {
  font-size: 15px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.service-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-points li {
  font-size: 14px;
  color: var(--color-text-secondary);
  padding-left: 24px;
  position: relative;
}

.service-points li::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background-color: var(--color-accent);
}

.workflow {
  background-color: var(--color-gray-bg);
  border: 1px solid var(--color-gray-border);
  border-radius: 10px;
  padding: 40px 34px;
  margin-bottom: 48px;
}

.workflow-title {
  text-align: center;
  font-size: 24px;
  color: var(--color-primary);
  margin-bottom: 32px;
}

.workflow-steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.workflow-step {
  text-align: center;
}

.step-num {
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  background-color: rgba(26, 54, 93, 0.1);
  width: 46px;
  height: 46px;
  line-height: 46px;
  border-radius: 50%;
  margin-bottom: 12px;
}

.workflow-step h3 {
  font-size: 16px;
  color: var(--color-text);
  margin-bottom: 6px;
}

.workflow-step p {
  font-size: 13px;
  color: var(--color-text-secondary);
}

.services-cta {
  text-align: center;
}

.services-cta p {
  font-size: 16px;
  margin-bottom: 18px;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .service-item,
  .service-item.reverse {
    flex-direction: column;
    gap: 20px;
    padding: 26px 22px;
  }

  .service-icon-wrap {
    width: 72px;
    height: 72px;
  }

  .service-icon-wrap svg {
    width: 36px;
    height: 36px;
  }

  .workflow-steps {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .workflow-steps {
    grid-template-columns: 1fr;
  }
}
</style>
