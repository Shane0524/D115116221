const STORAGE_KEY = "offline-todos";

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyState = document.querySelector("#empty-state");
const remainingCount = document.querySelector("#remaining-count");
const todoCount = document.querySelector("#todo-count");

let todos = loadTodos();

// 從 localStorage 讀取資料，格式不正確時使用空清單。
function loadTodos() {
  try {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(savedTodos) ? savedTodos : [];
  } catch (error) {
    return [];
  }
}

// 將目前的待辦清單保存到瀏覽器。
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 建立一個簡單且不重複的待辦事項識別碼。
function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// 重新繪製清單和數量資訊。
function render() {
  list.replaceChildren();

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " completed" : ""}`;
    item.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.className = "todo-checkbox";
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `完成「${todo.text}」`);

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "刪除";
    deleteButton.setAttribute("aria-label", `刪除「${todo.text}」`);

    item.append(checkbox, text, deleteButton);
    list.append(item);
  });

  const incompleteCount = todos.filter((todo) => !todo.completed).length;
  todoCount.textContent = todos.length;
  remainingCount.textContent = `未完成:${incompleteCount} 項`;
  emptyState.hidden = todos.length > 0;
}

// 新增一筆非空白的待辦事項。
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }

  todos.push({ id: createId(), text, completed: false });
  saveTodos();
  render();
  input.value = "";
  input.focus();
});

// 使用事件委派處理勾選與刪除，讓動態產生的項目也能正常工作。
list.addEventListener("click", (event) => {
  const item = event.target.closest(".todo-item");
  if (!item) return;

  const todoId = item.dataset.id;

  if (event.target.matches(".todo-checkbox")) {
    todos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  }

  if (event.target.matches(".delete-button")) {
    todos = todos.filter((todo) => todo.id !== todoId);
  }

  saveTodos();
  render();
});

render();
