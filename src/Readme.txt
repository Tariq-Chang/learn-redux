Learning Redux 

// Redux installation with react
> npm install@latest react-redux-app --template redux

Simple Counter Application
STEPS:

1. Setup store.js using configureStore with empty reducer object
	- configureStore ({ reducer : {} })

2. pass that store to the index.js with provider
	<Provider store={store}} {/* Component */} </Provider>

3. Create a slice(feature)
	i) 	initialState object
	ii) 	createSlice 
	iii) 	create reducers/actions
		reducers = { increment: (state) => {} }

4. Pass that slice to the empty reducer object in step 1.
	- configureStore ({reducer : { counter : counterSlice,} })

5. Get current state values in the store using useSelector hook
	- counter = useSelector((store) => store.counter)

6. We use useDispatch hook which calls actions to change state
	- dispatch = useDispatch()
	- <button onClick={dipspatch(increment(counter))}> Increment </button>

