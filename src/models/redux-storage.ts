import { DataResponse } from 'src/models/http';
import { Resume } from 'src/models/resume';

export interface ReduxStorage {
    resume: DataResponse<Resume | null>;
}
