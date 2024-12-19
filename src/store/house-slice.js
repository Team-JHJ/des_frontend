import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    houseId: null,
    houseName: 'house',
}

const houseSlice = createSlice({
    name: 'houseSlice',
    initialState,
    reducers: {
        setHouse: (state, action) => {
            state.houseId = action.payload.houseId
            state.houseName = action.payload.houseName
        },
    },
})

export const { setHouse } = houseSlice.actions
export default houseSlice.reducer
