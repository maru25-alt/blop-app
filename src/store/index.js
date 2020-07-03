import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const intialState = {};
const middleware = [thunk];

const enhancers = []
  if (window && window.location && window.location.hostname === 'localhost') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }
const store = createStore(
    rootReducer, 
     intialState,
     compose(
     applyMiddleware(...middleware), ...enhancers),
    

);

  export default store