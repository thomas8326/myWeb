import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "src/http/http";
import { DataResponse } from "src/models/http";
import { Resume, WorkExperience } from "src/models/resume";

const initState: DataResponse<Resume | null> = {
    status: 'init',
    data: { id: '', basicInfo: '', workExperience: [] },
    error: '',
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState: initState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(addNewWorkExperience.fulfilled, (state, action: PayloadAction<WorkExperience>) => {
                state.status = 'succeeded';
                console.log(state.data);
                if (state.data) {
                    state.data.workExperience = state.data.workExperience.concat(action.payload);
                }
            })
            .addCase(post.fulfilled, (state, action: PayloadAction<Resume>) => {
                state.status = 'succeeded';
                console.log(state.data);
                state.data = action.payload
            })
    },
});

export const addNewWorkExperience = createAsyncThunk('add/experience', async (body: WorkExperience) => {
    const response = await http.add('resume/workExperience', body);
    return response;
});

export const post = createAsyncThunk('post/resume', async (body: Resume) => {
    const response = await http.post('resume/workExperience', body);
    return response;
});

export default resumeSlice.reducer;
