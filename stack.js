let Stack = function() {
  items = []

  this.push = (element) => {
    return items.push(element)
  }

  this.pop = () => {
    return items.pop()
  }

  this.peek = () => {
    return items[items.length - 1]
  }

  this.isEmpty = () => {
    return items.length === 0
  }

  this.clear = () => {
    return items = []
  }

  this.size = () => {
    return items.length
  }

  this.print = () => {
    return items.toString()
  }
}

module.exports = Stack 
