const [state, setState] = useState({ color: 'black', pet: 'cat' })

// ...

setState({ ...state, color: 'pink' })
setState({ ...state, pet: 'dog' })
