import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)
