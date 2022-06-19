import { MainPathUrl } from "src/enums/main-path-url.enum";
import { TransKey } from "src/enums/translation-key.enum";
import { MainPath } from "src/models/main-path";

export const mainFeatures: MainPath[] = [
    { title: TransKey.Resume, url: MainPathUrl.Resume },
    { title: TransKey.Components, url: MainPathUrl.Components },
    { title: TransKey.Projects, url: MainPathUrl.Projects }
];
