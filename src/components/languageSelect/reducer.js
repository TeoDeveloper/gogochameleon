import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    languageList: [
        "ITA",
        "EN",
        //"ES",
    ]
};

export const multilanguageSlice = createSlice({
    name: 'multilanguage',
    initialState,
});

export default multilanguageSlice.reducer;
