<script setup>
import { reactive, ref } from 'vue'

const initialForm = {
  name: '',
  company: '',
  requirement: '',
  contact: ''
}

const form = reactive({ ...initialForm })
const errors = reactive({ ...initialForm })
const submitting = ref(false)
const submitted = ref(false)

function validateName() {
  if (!form.name.trim()) {
    errors.name = '请输入您的姓名'
    return false
  }
  if (form.name.trim().length < 2) {
    errors.name = '姓名至少 2 个字符'
    return false
  }
  errors.name = ''
  return true
}

function validateCompany() {
  if (!form.company.trim()) {
    errors.company = '请输入公司名称'
    return false
  }
  errors.company = ''
  return true
}

function validateRequirement() {
  if (!form.requirement.trim()) {
    errors.requirement = '请简要描述您的需求'
    return false
  }
  if (form.requirement.trim().length < 10) {
    errors.requirement = '需求描述不少于 10 个字符，便于我们了解项目背景'
    return false
  }
  errors.requirement = ''
  return true
}

function validateContact() {
  const value = form.contact.trim()
  const isPhone = /^1[3-9]\d{9}$/.test(value)
  const isEmail = /^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(value)
  if (!value) {
    errors.contact = '请输入联系方式'
    return false
  }
  if (!isPhone && !isEmail) {
    errors.contact = '请输入正确的手机号或邮箱'
    return false
  }
  errors.contact = ''
  return true
}

const validators = {
  name: validateName,
  company: validateCompany,
  requirement: validateRequirement,
  contact: validateContact
}

function clearError(field) {
  if (errors[field]) errors[field] = ''
}

function handleSubmit() {
  const results = Object.keys(validators).map((key) => validators[key]())
  if (results.some((valid) => !valid)) return

  submitting.value = true
  // 纯前端演示：模拟提交请求
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
  }, 800)
}

function resetForm() {
  Object.assign(form, initialForm)
  Object.assign(errors, initialForm)
  submitted.value = false
}
</script>

<template>
  <div class="page">
    <div class="container">
      <div class="page-header">
        <h1>联系我们</h1>
        <p>提交您的项目需求，工程师将在 1 个工作日内与您联系</p>
      </div>

      <div class="contact-layout">
        <!-- 联系信息 -->
        <aside class="contact-info">
          <h2>直接联系</h2>
          <ul>
            <li>
              <span class="info-label">服务热线</span>
              <strong>400-800-1234</strong>
              <small>工作日 9:00 - 18:00</small>
            </li>
            <li>
              <span class="info-label">商务邮箱</span>
              <strong>sales@zhikong-auto.com</strong>
              <small>方案与报价请发送项目资料</small>
            </li>
            <li>
              <span class="info-label">公司地址</span>
              <strong>苏州市工业园区智造大道 88 号</strong>
              <small>欢迎预约到访交流</small>
            </li>
          </ul>
        </aside>

        <!-- 表单 / 成功提示 -->
        <div class="form-panel">
          <template v-if="!submitted">
            <form novalidate @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-field">
                  <label for="name">姓名 <em>*</em></label>
                  <input
                    id="name"
                    v-model.trim="form.name"
                    type="text"
                    placeholder="如：王工"
                    :class="{ invalid: errors.name }"
                    @blur="validateName"
                    @input="clearError('name')"
                  />
                  <p v-if="errors.name" class="error-msg" role="alert">{{ errors.name }}</p>
                </div>

                <div class="form-field">
                  <label for="company">公司名称 <em>*</em></label>
                  <input
                    id="company"
                    v-model.trim="form.company"
                    type="text"
                    placeholder="如：XX 精密制造有限公司"
                    :class="{ invalid: errors.company }"
                    @blur="validateCompany"
                    @input="clearError('company')"
                  />
                  <p v-if="errors.company" class="error-msg" role="alert">{{ errors.company }}</p>
                </div>
              </div>

              <div class="form-field">
                <label for="contact">联系方式 <em>*</em></label>
                <input
                  id="contact"
                  v-model.trim="form.contact"
                  type="text"
                  placeholder="手机号或邮箱，如 13800138000 / you@company.com"
                  :class="{ invalid: errors.contact }"
                  @blur="validateContact"
                  @input="clearError('contact')"
                />
                <p v-if="errors.contact" class="error-msg" role="alert">{{ errors.contact }}</p>
              </div>

              <div class="form-field">
                <label for="requirement">需求描述 <em>*</em></label>
                <textarea
                  id="requirement"
                  v-model.trim="form.requirement"
                  rows="5"
                  placeholder="请描述行业、设备类型、改造目标等，例如：食品包装线需要做自动化改造，目前人工装箱效率低……"
                  :class="{ invalid: errors.requirement }"
                  @blur="validateRequirement"
                  @input="clearError('requirement')"
                ></textarea>
                <p v-if="errors.requirement" class="error-msg" role="alert">{{ errors.requirement }}</p>
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
                {{ submitting ? '提交中…' : '提交询价' }}
              </button>
              <p class="form-tip">提交即表示同意我们仅将信息用于项目沟通，我们承诺对您的信息严格保密。</p>
            </form>
          </template>

          <div v-else class="success-box" role="status">
            <div class="success-icon">✓</div>
            <h2>提交成功！</h2>
            <p>
              感谢您的询价，{{ form.name }}。<br />
              我们的工程师将在 1 个工作日内通过 {{ form.contact }} 与您联系。
            </p>
            <div class="success-actions">
              <button class="btn btn-primary" @click="resetForm">再次提交</button>
              <router-link to="/cases" class="btn btn-outline">浏览工程案例</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 28px;
  align-items: start;
}

.contact-info {
  background: linear-gradient(160deg, var(--color-primary) 0%, #2c5282 100%);
  border-radius: 10px;
  color: #fff;
  padding: 32px 28px;
}

.contact-info h2 {
  font-size: 20px;
  margin-bottom: 24px;
}

.contact-info ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.info-label {
  display: block;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 4px;
}

.contact-info strong {
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
}

.contact-info small {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.form-panel {
  background: #fff;
  border: 1px solid var(--color-gray-border);
  border-radius: 10px;
  padding: 34px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-field {
  margin-bottom: 20px;
}

.form-field label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.form-field label em {
  color: #e53e3e;
  font-style: normal;
}

.form-field input,
.form-field textarea {
  width: 100%;
  font-size: 15px;
  font-family: inherit;
  padding: 11px 14px;
  border: 1px solid var(--color-gray-border);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: #fff;
  color: var(--color-text);
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.15);
}

.form-field input.invalid,
.form-field textarea.invalid {
  border-color: #e53e3e;
}

.form-field textarea {
  resize: vertical;
  min-height: 110px;
}

.error-msg {
  font-size: 13px;
  color: #e53e3e;
  margin-top: 6px;
}

.submit-btn {
  width: 100%;
  font-size: 16px;
}

.submit-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.form-tip {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 14px;
  text-align: center;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover {
  background-color: rgba(26, 54, 93, 0.06);
}

.success-box {
  text-align: center;
  padding: 40px 16px;
}

.success-icon {
  width: 72px;
  height: 72px;
  line-height: 72px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background-color: rgba(56, 161, 105, 0.12);
  color: #2f855a;
  font-size: 36px;
  font-weight: 700;
}

.success-box h2 {
  font-size: 24px;
  color: var(--color-primary);
  margin-bottom: 12px;
}

.success-box p {
  font-size: 15px;
  color: var(--color-text-secondary);
  margin-bottom: 28px;
}

.success-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-panel {
    padding: 26px 20px;
  }
}
</style>
