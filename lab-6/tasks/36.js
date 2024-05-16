function byTagName(node, tagName) {
  const result = []
  tagName = tagName.toUpperCase()
  if (node.tagName === tagName) result.push(node)
  const children = node.children
  for (let i = 0; i < children.length; i++) {
    result.push(...byTagName(children[i], tagName))
  }
  return result
}

const parent = document.getElementById('parent')
console.log(byTagName(parent, "h1").length)
console.log(byTagName(parent, "span").length)
console.log(byTagName(parent.querySelector("p"), "span").length)