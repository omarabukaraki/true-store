import { createSlice } from "@reduxjs/toolkit";


const initialState: {
    limit: number,
    skip: number,
} = { limit: 12, skip: 0 };

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        next: (state) => {
            if (state.skip < 194) {
                state.skip += 12;
            }
        },
        jumpTo: (state, actions) => {
            if (actions.payload === 1) {
                state.skip = 0
            }
            else {
                state.skip = ((actions.payload - 1) * 12)
            }
        },
        privies: (state) => {
            if (state.skip >= 12) {
                state.skip -= 12;
            }
        },
    }
});

export const { next, privies, jumpTo } = paginationSlice.actions

export default paginationSlice.reducer;