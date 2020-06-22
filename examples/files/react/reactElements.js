const myElement = (
  <div foo="bar">
    <button>Test</button>
    <span>Hello</span>
  </div>
)

// Simplify myElement and print it to the console
console.log(JSON.parse(JSON.stringify(myElement)))
