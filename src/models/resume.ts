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
    id?: string;
    companyName: string;
    position: string;
    startDate: string;
    endDate?: string;
    projects: CompanyProject[];

    constructor(data?: WorkExperience) {
        this.id = data?.id || uuidv4();
        this.companyName = data?.companyName || '';
        this.position = data?.position || '';
        this.startDate = data?.startDate || '';
        this.endDate = data?.endDate || '';
        this.projects = data?.projects || [{
            id: uuidv4(),
            name: '',
            description: '',
        },];
    }
}

export interface CompanyProject {
    id: string;
    name: string;
    description: string;
}
