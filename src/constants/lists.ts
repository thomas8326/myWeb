import { MainPathUrl } from "src/enums/main-path-url.enum";
import { TransKey } from "src/enums/translation-key.enum";
import { MainPath } from "src/models/main-path";
import { Option } from "src/models/options";

export const mainFeatures: MainPath[] = [
    { title: TransKey.Resume, url: MainPathUrl.Resume },
    { title: TransKey.Components, url: MainPathUrl.Components },
    { title: TransKey.Projects, url: MainPathUrl.Projects }
];

export const Languages: Option[] = [
    { id: 'language_english', text: TransKey.English, value: 'en' },
    { id: 'language_traditional_chinese', text: TransKey.TraditionalChinese, value: 'zh_tw' },
]
