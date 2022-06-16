# Redux
- City view react redux base

## 1. Third Party Library
- Redux
- Material UI
- Boostrap
- React-router

## 2. Redux Intro
- For Global state management
- can be used in other framework (Angular, Vue)

## 3. Redux three cores:
- store (Global store) / Store / Reducer
- eventHandler(Dispatch) -> Store (reducer -> state) -> UI -> eventHandler ...
## 4. Three principles (Interview question)
1. Single Source of truth
   - The global state of your application is stored in an object tree within a single store.
2. State is read-only 
   - the only way to change the state is to emit an action,  an object describing what happened. 
3. Changes are made with pure functions
   - To specify how the state tree is transformed by actions, you write pure reducers.
   - three-principles redux.js

## 5. Construct your react-redux project
1. Create your React project
2. npm i redux
3. npm i react-redux
4. import in index.js
import {Provider} from "react-redux"
import {createStore} from "redux"

const reduxStore = createStore(reducers)

ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>,
document.getElementById("root")
);

5. create directories for actions and reducers
- actions folder
    - action.js
- reducers folder
    - index.js
    - cityViewReducer.js

## 6. Action
1. Example:
- `const an-action = {
  type: 'clickBtn',
  payload: 1
  }`
- An action is a plain JS object
- must contain type 
- payload 载荷 (can be omitted) or in different name 

2. Use a function to create action: action creator

## 7. Reducer
1. A reducer is a function that receives the current state and an action object, 
decides how to update the state if necessary, and returns the new state
2. Reducer rules:
- immutability: reducer can only calculate the new state based on previous state & payload
- you should make immutable updates
- you should not use async method to update the states
3. Create reducer

## 8. Safe Navigation Operator 
- Aka. optional chaining operator
- `?`
- add after action, before .payload

## 9. Use actions in handler
- add action event handler in component 
- use following to where using the action
  `const dispatch = useDispatch()`

## 10. Use global state in UI
- useSelector to consume global state in component
  `const imageLibrary = useSelector(
  state => state?.cityViewReducer?.imgLibrary)`

## HW
- click img thumb to set background
- use redux global 