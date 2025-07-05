# Elec Music - TailwindCSS 4.x 集成

这个项目展示了如何在 Vue 3 + Vite + Electron 项目中集成最新的 TailwindCSS 4.x，采用了全新的 CSS-first 配置方式。

## 🚀 功能特性

- ✅ Vue 3 + TypeScript + Vite
- ✅ Electron 桌面应用
- ✅ TailwindCSS 4.x 完整集成（CSS-first 配置）
- ✅ 自定义工具类（参考 zan-apps 项目）
- ✅ VS Code 智能提示支持
- ✅ 响应式设计支持
- ✅ 高性能引擎（构建速度提升 3.5x+）

## 📦 项目结构

```
elec-music/
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # TailwindCSS 4.x 主配置文件
│   ├── components/
│   │   └── TailwindDemo.vue      # 示例组件
│   └── main.ts                   # 入口文件
├── vite.config.ts                # Vite 配置（包含 TailwindCSS 插件）
└── .vscode/
    └── extensions.json           # VS Code 扩展推荐
```

## ⚡ TailwindCSS 4.x 的新特性

### CSS-First 配置
不再需要 `tailwind.config.js` 文件！所有配置都在 CSS 中完成：

```css
@import "tailwindcss";

@theme {
  --color-primary: #2C68FF;
  --color-gray: #999;
  --font-sans: ui-sans-serif, system-ui, sans-serif;
}
```

### 新的自定义工具类语法
使用 `@utility` 指令定义自定义工具类：

```css
@utility flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 性能提升
- 完整构建速度提升 3.5x+
- 增量构建速度提升 8x+
- 更快的开发服务器热更新

## 🎨 自定义工具类

参考 zan-apps 项目，集成了以下自定义工具类：

### 布局工具类
- `flex-center` - 水平垂直居中
- `flex-start` - 左对齐垂直居中
- `flex-end` - 右对齐垂直居中
- `flex-col-center` - 垂直布局居中
- `flex-1-hidden` - flex-1 + 隐藏溢出

### 定位工具类
- `absolute-lt` - 绝对定位左上角
- `absolute-rt` - 绝对定位右上角
- `absolute-center` - 绝对定位居中
- `fixed-center` - 固定定位居中

### 文本工具类
- `ellipsis-text` - 文本省略号
- `nowrap-hidden` - 不换行隐藏溢出

## 🎯 主题配置

项目使用了 TailwindCSS 4.x 的新主题配置方式：

```css
@theme {
  --color-primary: #2C68FF;
  --color-primary-light: #2C68FF;
  --color-primary-dark: #2C68FF;
  --color-gray: #999;
  --color-gray-light: #F7F8FA;
  --color-regular: #606266;
  --font-sans: ui-sans-serif, system-ui, sans-serif;
}
```

## 🛠️ 安装与配置

### 1. 安装依赖
```bash
npm install
```

### 2. 安装 TailwindCSS 4.x
```bash
npm install -D @tailwindcss/vite
```

### 3. 配置 Vite
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```

### 4. 配置 CSS
```css
/* src/assets/css/main.css */
@import "tailwindcss";

@theme {
  /* 您的主题配置 */
}
```

## 🛠️ 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建项目
npm run build

# Electron 开发
npm run electron:dev

# Electron 构建
npm run electron:build
```

## 💡 使用示例

```vue
<template>
  <div class="flex-center min-h-screen bg-(--color-gray-light)">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold text-(--color-primary) mb-4">
        欢迎使用 TailwindCSS 4.x
      </h1>
      <p class="text-(--color-gray) ellipsis-text">
        这是一个很长的文本，会被自动截断...
      </p>
      <button class="bg-(--color-primary) text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">
        点击按钮
      </button>
    </div>
  </div>
</template>
```

## 🆚 TailwindCSS 3.x vs 4.x 对比

| 特性 | TailwindCSS 3.x | TailwindCSS 4.x |
|------|-----------------|-----------------|
| 配置方式 | `tailwind.config.js` | CSS-first (`@theme`) |
| 导入方式 | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| 自定义工具 | `@layer utilities` + `@apply` | `@utility` |
| 构建速度 | 基准 | 3.5x+ 更快 |
| 配置复杂度 | 中等 | 简单 |

## 🔧 VS Code 配置

项目已配置 VS Code 扩展推荐：
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense

## 🚀 TailwindCSS 4.x 的优势

1. **更简单的配置**：CSS-first 方式减少了样板代码
2. **更快的性能**：全新引擎，构建速度大幅提升
3. **更好的开发体验**：实时主题变量，无需重启服务器
4. **现代化特性**：支持最新的 CSS 特性和语法
5. **更小的包体积**：优化的依赖管理

## 📚 参考资料

- [TailwindCSS 4.x 官方文档](https://tailwindcss.com/docs/v4-beta)
- [TailwindCSS 4.x 升级指南](https://tailwindcss.com/docs/upgrade-guide)
- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [Electron 官方文档](https://www.electronjs.org/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## �� 许可证

MIT License
