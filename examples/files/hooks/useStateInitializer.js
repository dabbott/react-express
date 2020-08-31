const computeMeaningOfLife = initialArg => {
  // Do some computationally expensive work...
  return { meaningOfLife: initialArg }
}

const [state, dispatch] = useReducer(reducer, 42, computeMeaningOfLife)

console.log(state)
// => { meaningOfLife: 42 }
