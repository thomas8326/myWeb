import { v4 as uuidv4 } from 'uuid';

export enum LanguageType {
    Chinese = 'chinese',
    English = 'english'
}

export interface Resume {
    [LanguageType.Chinese]?: ResumeDetail;
    [LanguageType.English]?: ResumeDetail;
}

export interface ResumeDetail {
    basicInfo: BasicInfo;
    workExperiences: WorkExperience[];
}

export interface BasicInfo {
    aboutMe: string;
}

export class WorkExperience {
    id: string;
    companyName: string;
    startDate: Date;
    endDate?: Date;
    projects: CompanyProject[];

    constructor(data?: { companyName: string }) {
        this.id = uuidv4();
        this.companyName = data?.companyName || '';
        this.startDate = new Date();
        this.endDate = new Date();
        this.projects = [];
    }
}

export interface CompanyProject {
    id: string;
    description: string;
}
