
function asTabs(node) {
  const { children } = node
  
  const size = children.length
  const primaryTabs = []
  for (const child of children) {
    primaryTabs.push({ tabName: child.dataset.tabname, innerHTML: child.innerHTML })
  }
  node.innerText = ''
  
  const tabsWrapper = document.createElement('div')
  tabsWrapper.className = 'bg-red-300 divide-x'
  
  const contentWrapper = document.createElement('div')
  
  const tabs = []
  const contents = []
  let currentIndex = 0
  for (let i = 0; i < size; i++) {
    const { tabName, innerHTML } = primaryTabs[i]
    const tab = document.createElement('button')
    tabs.push(tab)
    if (i === 0) tab.dataset.selected = ''
    tab.className = 'data-[selected]:text-blue-300 px-4 py-2'
    tab.innerText = tabName
    tab.onclick = () => {
      if (i !== currentIndex) {
        [tabs, contents].forEach(a => a.forEach(b => delete b.dataset.selected))
        currentIndex = i;
        [tabs, contents].forEach(a => a[i].dataset.selected = '')
      }
    }
    tabsWrapper.appendChild(tab)
    
    const content = document.createElement('div')
    contents.push(content)
    if (i === 0) content.dataset.selected = ''
    content.className = 'hidden data-[selected]:block'
    content.innerHTML = innerHTML
    contentWrapper.appendChild(content)
  }
  
  node.appendChild(tabsWrapper)
  node.appendChild(contentWrapper)
}

asTabs(document.getElementById('wrapper'))