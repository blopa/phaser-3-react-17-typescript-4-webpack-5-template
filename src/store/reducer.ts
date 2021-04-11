const defaultStore = {
    test: 1,
};

export default (state = defaultStore, action) => {
    switch (action.type) {
        case 1: {
            return {
                ...state,
                test: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
