const mountains = [
  { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
  { name: "Everest", height: 8848, country: "Nepal" },
  { name: "Mount Fuji", height: 3776, country: "Japan" },
  { name: "Mont Blanc", height: 4808, country: "Italy/France" },
  { name: "Vaalserberg", height: 323, country: "Netherlands" },
  { name: "Denali", height: 6168, country: "United States" },
  { name: "Popocatepetl", height: 5465, country: "Mexico" },
]

const template = document.getElementById('template')

function addRow({name, height, country, bold}) {
  const tr = document.createElement('tr')
  function addCell(v) {
    const td = document.createElement('td')
    td.innerText = v
    if (bold) td.setAttribute('class', 'font-bold text-slate-500')
    tr.appendChild(td)
  }
  addCell(name)
  addCell(height)
  addCell(country)
  template.appendChild(tr)
}

addRow({ name: 'Name', height: 'Height', country: 'Country', bold: true })
mountains.forEach(addRow)