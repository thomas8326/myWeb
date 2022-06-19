import { MainPathUrl } from "src/enums/main-path-url.enum";
import { TransKey } from "src/enums/translation-key.enum";

export interface MainPath {
    url: MainPathUrl;
    title: TransKey;
}
