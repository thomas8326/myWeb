import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "src/http/http";
import { DataResponse } from "src/models/http";
import { BasicInfo, LanguageType, Resume, WorkExperience } from "src/models/resume";

const initState: DataResponse<Resume | null> = {
    status: 'init',
    loading: false,
    data: {
        [LanguageType.Chinese]: {
            basicInfo: {
                aboutMe: ''
            },
            workExperiences: []
        },
        [LanguageType.English]: {
            basicInfo: {
                aboutMe: ''
            },
            workExperiences: []
        }
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
            // .addCase(getResume.pending, (state) => {
            //     state.status = 'pending';
            //     state.loading = true;
            // })
            .addCase(getResume.fulfilled, (state, action: PayloadAction<Resume>) => {
                state.status = 'succeeded';
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(updateChineseBasicInfo.fulfilled, (state, action: PayloadAction<BasicInfo>) => {
                if (state?.data && state.data[LanguageType.Chinese]) {
                    state.data[LanguageType.Chinese]!.basicInfo = action.payload;
                }
            })
            .addCase(updateEnglishBasicInfo.fulfilled, (state, action: PayloadAction<BasicInfo>) => {
                if (state?.data && state.data[LanguageType.English]) {
                    state.data[LanguageType.English]!.basicInfo = action.payload;
                }
            })
            .addCase(updateChineseWorkExperiences.fulfilled, (state, action: PayloadAction<WorkExperience[]>) => {
                if (state?.data && state.data[LanguageType.Chinese]) {
                    state.data[LanguageType.Chinese]!.workExperiences = action.payload;
                }
            })
            .addCase(updateEnglishWorkExperiences.fulfilled, (state, action: PayloadAction<WorkExperience[]>) => {
                if (state?.data && state.data[LanguageType.English]) {
                    state.data[LanguageType.English]!.workExperiences = action.payload;
                }
            })
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

export const updateChineseBasicInfo = createAsyncThunk('update/chinese/basicInfo', async (body: BasicInfo) => {
    const response = await http.post<BasicInfo>(`resume/${LanguageType.Chinese}/basicInfo`, body);
    return response;
});

export const updateEnglishBasicInfo = createAsyncThunk('update/english/basicInfo', async (body: BasicInfo) => {
    const response = await http.post<BasicInfo>(`resume/${LanguageType.English}/basicInfo`, body);
    return response;
});

export const updateChineseWorkExperiences = createAsyncThunk('update/chinese/workExperiences', async (body: WorkExperience[]) => {
    const response = await http.post<WorkExperience[]>(`resume/${LanguageType.Chinese}/workExperiences`, body);
    return response;
});

export const updateEnglishWorkExperiences = createAsyncThunk('update/english/workExperiences', async (body: WorkExperience[]) => {
    const response = await http.post<WorkExperience[]>(`resume/${LanguageType.English}/workExperiences`, body);
    return response;
});

export default resumeSlice.reducer;
