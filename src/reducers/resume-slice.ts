import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "src/http/http";
import { DataResponse } from "src/models/http";
import { BasicInfo, LanguageType, Resume, ResumeDetail, WorkExperience } from "src/models/resume";

const initState: DataResponse<Resume | null> = {
    status: 'init',
    loading: false,
    data: {
        [LanguageType.Chinese]: new ResumeDetail(),
        [LanguageType.English]: new ResumeDetail()
    },
    error: '',
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState: initState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(getResume.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
            })
            .addCase(getResume.fulfilled, (state, action: PayloadAction<Resume>) => {
                state.status = 'succeeded';
                state.loading = false;
                state.data = action.payload;
                console.log(state.data);
            })
        // .addCase(updateBasicInfo.fulfilled, (state, action: PayloadAction<BasicInfo>) => {
        //     // state.status = 'succeeded';
        //     console.log(state.data);
        //     console.log(action.payload);
        //     // state.data = action.payload
        // })
    },
});

export const addNewWorkExperience = createAsyncThunk('add/experience', async (body: WorkExperience) => {
    const response = await http.add('resume/workExperience', body);
    return response;
});

export const getResume = createAsyncThunk('get/resume', async () => {
    const response = await http.get<Resume>(`resume`);
    return response
});

export const updateBasicInfo = createAsyncThunk('update/basicInfo', async (body: { lng: LanguageType, data: BasicInfo }) => {
    const response = await http.post(`resume/${body.lng}/basicInfo`, body.data);
    return response;
});

export default resumeSlice.reducer;
