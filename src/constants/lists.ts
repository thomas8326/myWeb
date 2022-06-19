import { MainPathUrl } from "src/enums/main-path-url.enum";
import { MainPath } from "src/models/main-path";

export const mainFeatures: MainPath[] = [
    { title: 'Resume', url: MainPathUrl.Resume },
    { title: 'Components', url: MainPathUrl.Components },
    { title: 'Projects', url: MainPathUrl.Projects }
];
