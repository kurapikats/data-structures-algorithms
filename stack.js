/**
 * Stack Data Structure
 *
 * @author Jesus B. Nana <jesus.nana@gmail.com>
 */
let Stack = (() => {
  const items = new WeakMap() 

  class Stack {
    constructor() {
      items.set(this, []) 
    }

    push(element) {
      let s = items.get(this)
      return s.push(element)
    }

    pop() {
      let s = items.get(this)
      return s.pop()
    }

    peek() {
      let s = items.get(this)
      return s[s.length - 1]
    }

    isEmpty() {
      let s = items.get(this)
      return s.length === 0
    }

    clear() {
      items.set(this, [])
      let s = items.get(this)
      return s
    }

    size() {
      let s = items.get(this)
      return s.length
    }

    print() {
      let s = items.get(this)
      console.log(s.toString())
    }
  }

  return Stack
})()

module.exports = Stack 
