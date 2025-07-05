<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-(--color-primary) mb-8">
        TailwindCSS 4.x 集成成功！
      </h1>
      
      <!-- 卡片布局 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 卡片 1 -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div class="flex-center mb-4">
            <div class="w-16 h-16 bg-(--color-primary) rounded-full flex-center text-white text-2xl font-bold">
              1
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">CSS-First 配置</h3>
          <p class="text-gray-600">
            使用 TailwindCSS 4.x 的全新 CSS-first 配置方式，无需 tailwind.config.js 文件。
          </p>
        </div>
        
        <!-- 卡片 2 -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div class="flex-center mb-4">
            <div class="w-16 h-16 bg-green-500 rounded-full flex-center text-white text-2xl font-bold">
              2
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">性能提升</h3>
          <p class="text-gray-600">
            构建速度提升 3.5x+，增量构建提升 8x+，开发体验更流畅。
          </p>
        </div>
        
        <!-- 卡片 3 -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div class="flex-center mb-4">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex-center text-white text-2xl font-bold">
              3
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">现代化特性</h3>
          <p class="text-gray-600">
            支持最新的 CSS 特性，包括 @utility、@theme 等新指令。
          </p>
        </div>
      </div>
      
      <!-- 按钮组 -->
      <div class="flex-center mt-8 space-x-4">
        <button class="bg-(--color-primary) text-white px-6 py-3 rounded-lg hover:opacity-80 transition-opacity duration-300">
          主要按钮
        </button>
        <button class="bg-(--color-gray-light) text-(--color-regular) px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300">
          次要按钮
        </button>
      </div>
      
      <!-- 自定义工具类演示 -->
      <div class="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">自定义工具类演示</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex-center bg-gray-50 rounded-lg p-4">
            <span class="text-gray-600">flex-center</span>
          </div>
          <div class="flex-start bg-gray-50 rounded-lg p-4">
            <span class="text-gray-600">flex-start</span>
          </div>
          <div class="flex-end bg-gray-50 rounded-lg p-4">
            <span class="text-gray-600">flex-end</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="ellipsis-text">
              这是一个超长的文本，用来演示 ellipsis-text 工具类的效果，它会被自动截断并显示省略号
            </div>
          </div>
        </div>
      </div>

      <!-- TailwindCSS 4.x 新特性展示 -->
      <div class="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">TailwindCSS 4.x 新特性</h2>
        <div class="space-y-4">
          <div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h3 class="font-semibold text-blue-800">@theme 指令</h3>
            <p class="text-blue-600">直接在 CSS 中定义主题变量，无需 JavaScript 配置。</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h3 class="font-semibold text-green-800">@utility 指令</h3>
            <p class="text-green-600">使用新的 @utility 指令定义自定义工具类。</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h3 class="font-semibold text-purple-800">CSS 变量支持</h3>
            <p class="text-purple-600">原生支持 CSS 变量，使用 text-(--color-primary) 等语法。</p>
          </div>
        </div>
      </div>

      <!-- 版本对比 -->
      <div class="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">版本对比</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2">特性</th>
                <th class="text-left py-2">TailwindCSS 3.x</th>
                <th class="text-left py-2">TailwindCSS 4.x</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-2 font-medium">配置方式</td>
                <td class="py-2 text-gray-600">tailwind.config.js</td>
                <td class="py-2 text-green-600">CSS-first (@theme)</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 font-medium">导入方式</td>
                <td class="py-2 text-gray-600">@tailwind directives</td>
                <td class="py-2 text-green-600">@import "tailwindcss"</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 font-medium">自定义工具</td>
                <td class="py-2 text-gray-600">@layer + @apply</td>
                <td class="py-2 text-green-600">@utility</td>
              </tr>
              <tr>
                <td class="py-2 font-medium">构建速度</td>
                <td class="py-2 text-gray-600">基准</td>
                <td class="py-2 text-green-600">3.5x+ 更快</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TailwindCSS 4.x 配置完全在 CSS 中完成
// 无需额外的 JavaScript 逻辑
</script>

<style scoped>
/* 如有需要，可以在这里添加组件特定的样式 */
</style> 