import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Test from './Test';

export default function MasterUI() {
    return (
        <Provider store={store}>
            <Test />
        </Provider>
    );
}
