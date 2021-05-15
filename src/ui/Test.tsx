import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';

// Actions
import { action } from '../store/actions';

const ENDPOINT = 'http://localhost:4001';

export default function Test() {
    const dispatch = useDispatch();
    const [response, setResponse] = useState('');

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('FromAPI', (data) => {
            setResponse(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        dispatch(action(2));
    }, [dispatch]);
    const test = useSelector((state: RootStateOrAny) => state.test);

    return (
        <div>
            <p>
                It is <time dateTime={response}>{response}</time>
            </p>
            <button
                type="button"
                onClick={() => dispatch(action(test + 1))}
            >
                test {test}
            </button>
        </div>
    );
}
