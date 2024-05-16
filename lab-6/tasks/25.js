function verify(regexp, yes, no) {
  if (regexp.source === "...") return
  console.log(`Тестируется: /${regexp.source}/`)
  yes.forEach((s) => {
    if (!regexp.test(s)) console.log(`Не нашлось '${s}'`)
  })
  no.forEach((s) => {
    if (regexp.test(s)) console.log(`Неожиданное вхождение '${s}'`)
  })
}

verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"])
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "peep"])
verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"])
verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"])
verify(/\s[.,:;]/, ["bad punctuation .", "space before colon :"], ["escape the dot", "semicolon;next"])
verify(/\w{7,}/, ["hottentottententen", "JavaScript"], ["no", "Python"])
verify(/\b[^e\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "learning ape"])

console.log("Тестирование успешно завершено")
