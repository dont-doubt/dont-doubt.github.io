
const box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Заперто!");
    return this._content;
  }
}

function withBoxUnlocked(body) {
  const wasLocked = box.locked
  try {
    box.unlock()
    body()
  } finally {
    if (wasLocked) box.lock()
  }
}

withBoxUnlocked(() => {
  box.content.push("золотишко")
})

try {
  withBoxUnlocked(() => {
    throw Error("Пираты на горизонте! Отмена!")
  })
} catch (e) {
  console.error("Произошла ошибка:", e)
}
console.log(box.locked)