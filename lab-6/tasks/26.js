const example = "ain't ya said 'Hello world', bud?"

console.log(example.replace(/(^|\W)'|'($|\W)/g, '$1"$2'))