// import Reactotron from '../../ReactotronConfig'
import { configureStore } from '@reduxjs/toolkit'
// import {persistReducer, persistStore} from 'redux-persist';
//
import rootReducer from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: [] //['auth', 'tab', 'common'],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const isInDev = process.env.NODE_ENV !== 'production'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      devTools: isInDev,
      thunk: true,
      immutableCheck: true
    }),
  // enhancers: defaultEnhancers => defaultEnhancers(),
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
})

export default store