// noinspection JSUnresolvedReference

console.clear()

const displayElem = document.getElementById("_display")
const cardsElem = document.getElementById("_cards")

let currentCard

function updateHeight() {
  // displayElem.style.height = '0'
  // document.getElementById("_display-wrapper").style.height = displayElem.scrollHeight + 'px'
}

function runCode() {
  if (!currentCard.js) return
  if (currentCard.html) {
    document.getElementById("_html").innerHTML = currentCard.html
  }
  clearConsole()
  try {
    eval(currentCard.js)
  } catch (e) {
    console.error(e)
  }
}

function clearConsole() {
  console.clear()
  safeElementById('_console', e => e.innerText = '')
}

function open({title, description, js, displayJs, html, displayHtml, once}) {
  if (currentCard && currentCard.title === title) return
  clearConsole()
  currentCard = {title, js, html}
  displayElem.innerHTML = `
  <div class="w-full mb-5">
    <h2 class="text-center text-[26px] mb-3 font-medium">${title}</h2>
    ${description ? `
      <h3 class="font-medium ml-3 mb-0.5 text-lg text-gray-900/90">Описание:</h3>
      <div class="text-gray-800 pb-3 px-4 text-gray-500 text-pretty break-words">
        ${description}
      </div>
    ` : ''}
    ${displayJs ? `
      <pre class="w-full bg-gray-800 text-gray-200 font-mono py-3 px-4 rounded-xl shadow-xl mb-3 break-all whitespace-pre-wrap">${displayJs}</pre>
      <h3 class="font-medium ml-3 mb-0.5 text-lg text-gray-900/90">Консоль:</h3>
      <div id="_console" class="w-full bg-gray-800 text-white font-mono py-3 px-4 rounded-xl shadow-xl min-h-5 break-all whitespace-pre-wrap"></div>
      ${!once ? `
        <button id="_run" class="mt-3 transition-all select-none cursor-pointer px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-xl hover:bg-blue-800">
          <svg class="w-5 h-5 text-white me-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
          </svg>
          Запустить
        </button>
      ` : ''}
    ` : ''}
    ${displayHtml ? `
      <h3 class="mt-3 font-medium ml-3 mb-0.5 text-lg text-gray-900/90">Документ:</h3>
      <div class="mockup-browser border bg-base-300 rounded-xl border-3 shadow-xl">
        <div class="mockup-browser-toolbar">
          <div class="input">${title}</div>
        </div>
        <div class="w-full min-h-96 bg-white" id="_html"></div>
      </div>
      <pre class="w-full bg-gray-800 text-white font-mono mt-4 py-3 px-4 rounded-xl shadow-xl mb-3 break-all whitespace-pre-wrap">${displayHtml}</pre>
    ` : ''}
  </div>
  `
  safeElementById('_run', e => e.onclick = runCode)
  safeElementById('_html', e => e.innerHTML = html)
  if (once) runCode()
  updateHeight()
}

function safeElementById(id, fn) {
  const elem = document.getElementById(id)
  if (elem) fn(elem)
}

let isAddedFirst = false

async function createCard({folder, name, title, description, once}) {
  if (!folder && !name) throw Error('No folder or name provided')
  let htmlFile, jsFile
  if (name) {
    htmlFile = `${name}.html`
    jsFile = `${name}.js`
    if (!title) title = `Задание ${name}`
  } else {
    htmlFile = `${folder}/index.html`
    jsFile = `${folder}/script.js`
    if (!title) title = `Задание ${folder}`
  }

  async function fetchFile(file) {
    try {
      const res = await fetch(`tasks/${file}`)
      return res.ok ? await res.text() : null
    } catch (e) {
      return null
    }
  }
  const [html, js] = await Promise.all([fetchFile(htmlFile), fetchFile(jsFile)])

  const displayJs = js && hljs.highlight(js.trim(), {
    language: 'js'
  }).value.trim()
  const displayHtml = html && hljs.highlight(html.trim(), {
    language: 'html'
  }).value.trim()

  const params = { title, description, js, displayJs, html, displayHtml, once }

  const div = document.createElement("div")
  div.setAttribute("class", "contents")
  div.onclick = () => open(params)
  div.innerHTML = `
  <div class="bg-white shadow-md w-[150px] px-4 py-[24px] break-words rounded-xl cursor-pointer select-none transition-all hover:shadow-lg hover:-translate-y-[2px]">
    <h1 class="font-medium text-xl text-center">${title}</h1> 
    ${description ? `<p class="line-clamp-3">${description}</p>` : ''}
  </div>
  `
  return () => {
    cardsElem.appendChild(div)
    if (!isAddedFirst) {
      isAddedFirst = true
      open(params)
    }
  }
}

(function redirectOutput() {
  function joinArgs(args, fn) {
    let addSpace = false
    return args.reduce((acc, curr) => {
      if (addSpace) {
        acc += ' '
      } else {
        addSpace = true
      }
      if (typeof curr === 'object') {
        if (fn === 'error' && curr.message) {
          acc += JSON.stringify(curr.message)
        } else {
          acc += JSON.stringify(curr)
        }
      } else {
        acc += curr
      }
      return acc
    }, '')
  }

  ['log', 'warn', 'error'].forEach((fn) => {
    console[fn] = (function (log) {
      return function (...text) {
        log(...text)
        const elem = document.getElementById('_console')
        if (!elem) return
        const span = document.createElement('span')
        span.innerText = joinArgs(text, fn)
        if (fn === 'log') span.classList.add("text-gray-100")
        else if (fn === 'warn') span.classList.add("text-red-200", "bg-red-500/20")
        else if (fn === 'error') span.classList.add("text-red-500", "bg-red-400/20")
        const br = document.createElement("br")
        elem.appendChild(span)
        elem.appendChild(br)
        updateHeight()
      };
    })(console[fn].bind(console));
  });
})();

(() => {
  async function resolve() {
    (await Promise.all(tasks.map(t => createCard(t)))).forEach(f => f())
    clearConsole()
  }

  if (typeof styles !== 'undefined') {
    for (const url of styles) {
      const el = document.createElement('link');
      el.rel = 'stylesheet'
      el.href = url
      document.head.appendChild(el);
    }
  }
  if (typeof scripts !== 'undefined') {
    function loader(src, handler) {
      const el = document.createElement("script");
      el.src = src;
      el.onload = el.onreadystatechange = () => {
        el.onload = el.onreadystatechange = null;
        handler();
      }
      document.head.appendChild(el);
    }
    (function run() {
      if (scripts.length !== 0) {
        loader(scripts.shift(), run)
      } else {
        // noinspection JSIgnoredPromiseFromCall
        resolve()
      }
    })();
  } else {
    // noinspection JSIgnoredPromiseFromCall
    resolve()
  }
})();
