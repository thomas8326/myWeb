import { v4 as uuidv4 } from 'uuid';

export interface Resume {
    id: string;
    basicInfo: string;
    workExperience: WorkExperience[];
}

export class WorkExperience {
    id: string;
    companyName: string;
    startDate: Date;
    endDate?: Date;
    project: CompanyProject[];

    constructor(data?: { companyName: string }) {
        this.id = uuidv4();
        this.companyName = data?.companyName || '';
        this.startDate = new Date();
        this.endDate = new Date();
        this.project = [];
    }
}

export interface CompanyProject {
    id: string;
    description: string;
}
