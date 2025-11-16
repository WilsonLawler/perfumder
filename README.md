# Perfumder

精緻奢華風格的香水收藏管理系統

## 專案簡介

Perfumder 是一個專為香水愛好者設計的收藏管理系統，採用精緻奢華的設計風格（參考 Gucci/Chanel），提供優雅的用戶體驗。

## 技術棧

- **前端框架**: React 18 + TypeScript
- **建置工具**: Vite
- **樣式框架**: Bootstrap 5 + 自訂 SCSS
- **路由**: React Router v6
- **圖示**: React Icons

## 功能特色

### 已實作（UI/UX）
- ✅ 精緻奢華的視覺設計
- ✅ 響應式布局（手機、平板、桌面）
- ✅ 香水列表展示（網格布局）
- ✅ 新增/編輯香水表單
- ✅ 香水詳細頁面
- ✅ 搜尋欄 UI
- ✅ 篩選面板 UI（品牌、香調、價格）
- ✅ 圖片上傳 UI
- ✅ 優雅的過渡動畫

### 待實作（功能邏輯）
- ⏳ localStorage 資料持久化
- ⏳ 圖片上傳實際功能
- ⏳ 搜尋與篩選功能
- ⏳ 表單驗證邏輯
- ⏳ 第三方 API 整合（香水識別）

## 專案結構

```
perfumder/
├── src/
│   ├── components/          # 可重用元件
│   │   ├── Layout/         # 布局元件
│   │   ├── PerfumeCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterPanel.tsx
│   │   └── ImageUpload.tsx
│   ├── pages/            # 頁面元件
│   │   ├── HomePage.tsx
│   │   ├── AddPerfumePage.tsx
│   │   ├── EditPerfumePage.tsx
│   │   └── PerfumeDetailPage.tsx
│   ├── types/             # TypeScript 類型定義
│   ├── styles/            # 自訂樣式
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## 安裝與執行

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 建置生產版本
```bash
npm run build
```

### 預覽生產版本
```bash
npm run preview
```

## 設計系統

### 配色方案
- **主色**: 深黑 (#1a1a1a, #2d2d2d)
- **輔色**: 米色/象牙白 (#f5f5f0, #e8e8e3)
- **強調色**: 金色 (#d4af37, #b8860b)

### 視覺元素
- 優雅的卡片設計與陰影效果
- 精緻的按鈕與過渡動畫
- 響應式圖片容器
- 優雅的排版與間距

## 開發規範

- 使用 TypeScript 進行類型檢查
- 遵循 React Hooks 最佳實務
- 採用 Functional Components
- 保持元件單一職責
- 響應式設計優先

## 授權

MIT License
