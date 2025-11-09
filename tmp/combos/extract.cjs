const fs = require('fs')
const path = require('path')
const shared = fs.readFileSync('tmp/combos/xl/sharedStrings.xml', 'utf8')
const sheet = fs.readFileSync('tmp/combos/xl/worksheets/sheet1.xml', 'utf8')
const stringMatches = [...shared.matchAll(/<si><t>([\s\S]*?)<\/t><\/si>/g)]
const strings = stringMatches.map(m => m[1])
const rowRegex = /<row[^>]*>([\s\S]*?)<\/row>/g
const cellRegex = /<c[^>]*r="([A-Z]+\d+)"[^>]*>([\s\S]*?)<\/c>/g
const valueRegex = /<v>(\d+)<\/v>/
const rows = []
let rowMatch
while ((rowMatch = rowRegex.exec(sheet))) {
  rows.push(rowMatch[1])
}
const combos = rows.slice(1).map(row => {
  const obj = {}
  let cellMatch
  while ((cellMatch = cellRegex.exec(row))) {
    const addr = cellMatch[1]
    const content = cellMatch[2]
    const col = addr.replace(/\d+/g, '')
    const valMatch = valueRegex.exec(content)
    const val = Number(valMatch[1])
    if (col === 'A') obj.id = val
    if (col === 'B') obj.nombre = strings[val]
    if (col === 'C') obj.descripcion = strings[val] || ''
  }
  return obj
}).filter(obj => Object.keys(obj).length)
fs.writeFileSync('tmp/combos/combos.json', JSON.stringify(combos, null, 2))
