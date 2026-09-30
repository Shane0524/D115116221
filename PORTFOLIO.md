![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_%E5%AF%A6%E6%88%B0%E5%B7%A5%E4%BD%9C%E5%9D%8A-%E5%B7%B2%E5%AE%8C%E6%88%90-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

# 待辦清單 Web App

這是在 GitHub Copilot 實戰工作坊完成的純前端待辦清單 Web App。使用者可以新增、完成或刪除事項，待辦資料保存在瀏覽器中。

## 線上展示

`https://<你的帳號>.github.io/<你的repo名稱>/`

GitHub Pages 尚未啟用；完成設定後，請將上方佔位網址替換為實際網址。

## 功能

- 新增非空白的待辦事項。
- 勾選完成或取消完成；已完成事項會顯示刪除線與淡化樣式。
- 刪除單筆待辦事項。
- 即時顯示未完成事項數量。
- 使用瀏覽器 `localStorage` 保存待辦資料，重新整理後仍可保留。
- 版面支援手機螢幕。

## 技術

- 使用 HTML、CSS 與原生 JavaScript，沒有使用框架或套件。
- 待辦資料儲存在瀏覽器 `localStorage`。
- 以 CSS 變數管理主要配色，並以原生 CSS 完成響應式版面。
- 不需建置流程或外部 CDN，可直接以瀏覽器開啟 `index.html`。

## 開發方式

- 使用 GitHub Copilot Agent Mode 協助規劃與實作待辦清單。
- 透過 `.vscode/mcp.json` 設定 Microsoft Learn 與 GitHub MCP Server。
- 以 `.github/copilot-instructions.md` 記錄專案規範，並以 `.github/prompts/fix-issue.prompt.md` 保存可重複使用的 issue 處理流程。
- Issue #3 的修正已推送至 `fix/issue-3` 分支；Pull Request 尚未建立或合併。

## 我學到什麼

- 將需求拆成可檢查的行為，有助於規劃修改與驗證方式。
- 使用 `localStorage` 可以讓純前端應用在重新整理後保留資料。
- 專案指示與 prompt 檔案能讓常用規則和工作流程留在 repository 中。
- Git 分支、提交與推送能保留修改脈絡，方便後續檢視。
