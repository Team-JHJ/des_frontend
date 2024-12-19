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
            console.log(action.payload.houseName)
            console.log(`수정완료`)
        },
    },
})

export const { setHouse } = houseSlice.actions
export default houseSlice.reducer
