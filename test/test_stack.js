let assert = require('assert')
let Stack = require('../Stack')

describe('Stack', () => {
  
  let stack = new Stack()

  describe('#isEmpty', () => {
    it('should return true on first check', () => {
      assert.ok(stack.isEmpty())
    })
  })
  
  describe('#push', () => {
    it('should return 1 length', () => {
      assert.equal(1, stack.push('First Item'))
    })
  })
  
  describe('#peek', () => {
    it('should return First Item', () => {
      assert.equal('First Item', stack.peek())
    })
  })

  describe('#size', () => {
    it('should return 2 size', () => {
      stack.push('Second Item')
      assert.equal(2, stack.size())
    })
  })

  describe('#pop', () => {
    it('should return "Second Item"', () => {
      assert.equal('Second Item', stack.pop())
    })
  })

  describe('#clear', () => {
    it('should return an empty array', () => {
      let s = stack.clear()
      assert.equal(0, s.length)
    })
  })

  describe('#isEmpty', () => {
    it('should return true', () => {
      assert.ok(stack.isEmpty())
    })
  })
})
