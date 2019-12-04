require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')
const img = require('../img/unicorn.jpg')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about')
  console.log('Image through require()', img)
})
