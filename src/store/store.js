import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import houseSlice from '@/store/house-slice.js'

// persist 설정
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['houseSlice'],
}

// combineReducers를 사용하여 리듀서들을 하나의 함수로 결합
const rootReducer = combineReducers({
    houseSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// store 생성
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
