import {
    createSlice
} from "@reduxjs/toolkit";

const init = {
    isEditing: false,
    formData: {
        name: '',
        location: '',
        type: '',
        height: '',
        width: '',
        status: '',
        category: '',
        class: '',
        region: '',
        state: '',
        coordinate: '',
        lga: '',
        city: '',
        amount: '',
        faces: '',
        slots: '',
        units: ''
    }
}

const billboardFormReducer = createSlice({
    name: 'billboardForm',
    initialState: init,
    reducers: {
        editBillboardData: (state, action) => {
            state.isEditing = true;
            state.formData = {
                ...action.payload
            }
        },
        resetBillboardFormData: (state, action) => init
    }
})

export const {
    editBillboardData,
    resetBillboardFormData
} = billboardFormReducer.actions;

export default billboardFormReducer.reducer;