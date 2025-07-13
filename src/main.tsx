import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./zero.css"
import './index.css'
import 'antd/dist/reset.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { mainReducer } from './store/mainSlice.tsx'
import { persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, mainReducer)


const store = configureStore({
  reducer: {
    main : persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: true,
});


const persistor = persistStore(store)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
