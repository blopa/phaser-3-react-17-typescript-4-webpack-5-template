import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { action } from '../store/actions';

export default function Test() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action(2));
    }, [dispatch]);
    const test = useSelector((state: RootStateOrAny) => state.test);

    return (
        <button
            type="button"
            onClick={() => {
                dispatch(action(test + 1));
            }}
        >
            test {test}
        </button>
    );
}
