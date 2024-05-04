程式架構

建立一個資料夾叫做 src 主要是用來放置專案的原始碼，以下為資料夾的樹狀結構圖

```
├── App.tsx
├── assets
├── components
│   └── PostsList.tsx
├── navigation
│   └── NavigationContainer.tsx
├── networking
│   └── api.ts
├── screens
│   ├── HomeScreen.tsx
│   └── SettingsScreen.tsx
├── services
├── types
│   └── postTypes.ts
└── utils
```
針對每個資料夾和檔案簡單說明如下

- App.tsx
  這是整個應用程式的入口點。
- assets
  存放靜態資源如圖片、字體或其他需要的資源文件。
- components
  存放可重複使用的元件
- navigation
  處理應用程式的導航結構，例如[https://reactnavigation.org/docs/bottom-tab-navigator](https://reactnavigation.org/docs/stack-navigator)
- networking
  管理與網路相關的操作，例如 API 呼叫，`api.ts` 可能包含各種 API 請求的函式。
- screens
  存放應用程式的各個畫面。例如：
  - HomeScreen.tsx：主頁畫面。
  - SettingsScreen.tsx：設定頁面畫面。
- services  
  存放應用程式所需的背景服務，例如資料同步、認證服務等。
- types  
  存放 TypeScript 的類型定義文件，如 `postTypes.ts` 包含與文章相關的類型定義。
- utils
  包含各種工具函式，如時間格式化、資料處理等通用功能。

