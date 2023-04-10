import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';

// Persist Configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

// Root Reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);