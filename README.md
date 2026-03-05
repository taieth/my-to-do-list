# ▶︎ minimalist smart todo — to-do list

a sleek, dark-themed todo application designed to help you track your journey. this isn't just a list; it's a persistent tool with smooth animations and local storage integration.

→ **[view project live](https://taieth.github.io/my-to-do-list/)**

## ▷ project goals
the objective was to move beyond simple layouts and handle complex user interactions, data persistence, and custom ui components like animated checkboxes.

## 🛠 tech stack
* **html5:** semantic structure for task management.
* **css3:** custom **svg animations** for the checkmark effect.
    * **flexbox** for a responsive, centered layout.
    * glassmorphism and dark mode aesthetics.
    * advanced transitions using `cubic-bezier` for that "premium" feel.
* **javascript (vanilla):**
    * **dom manipulation:** creating, appending, and removing elements dynamically.
    * **localstorage:** saving your tasks so they stay there even after a page refresh.
    * **event listeners:** handling clicks, deletions, and keyboard shortcuts.

## ︽ key features
* **smart textarea:** an input field that automatically expands as you type.
* **keyboard support:** add tasks instantly by pressing `enter`.
* **data persistence:** all goals are saved in your browser's local storage.
* **custom animated checkbox:** a satisfying "draw-in" animation when a task is completed.
* **interactive feedback:** text fades and strikes through with a smooth transition.

## 𖡦 how it works (logic)
1. **creation:** a main function takes the input text and builds a unique `li` element.
2. **persistence:** every time a task is added, toggled, or deleted, a `savetasks()` function updates the `localstorage` array.
3. **initialization:** on page load, the script fetches the saved json string, parses it, and recreates each task with its previous "completed" state.

---
*built during a deep 4-hour coding session.*
