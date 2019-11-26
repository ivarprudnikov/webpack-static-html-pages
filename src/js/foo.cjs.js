class Foo {
  constructor () {
    this.value = 'foobar'
  }

  static instance () {
    return new Foo()
  }

  getValue () {
    return this.value
  }
}

module.exports = {
  Foo
}
