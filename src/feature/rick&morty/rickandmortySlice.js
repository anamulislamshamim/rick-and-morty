import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk("Rick&Morty/fetchData", async () => {
    const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `query {
                        characters(page: 2, filter: { name: "" }) {
                        info {
                            pages
                        }
                        results {
                            id
                            name
                            status
                            location {
                                name
                            }
                            image
                        }
                    }
              }`
        })
    }).then(res => res.json())
        .then(data => data);
    return response.data;
})


const rickAndMortySlice = createSlice({
    name: "RicK&Morty",
    initialState: {
        isLoading: false,
        error: null,
        data: []
    },
    extraReducers: (build) => {
        build.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });
        build.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        });
        build.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.data = [];
        })
    }
});

export default rickAndMortySlice.reducer;