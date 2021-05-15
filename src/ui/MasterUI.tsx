import React from 'react';
import { Provider } from 'react-redux';

// Store
import store from '../store/store';

// Components
import Test from './Test';

export default function MasterUI() {
    return (
        <Provider store={store}>
            <Test />
        </Provider>
    );
}
