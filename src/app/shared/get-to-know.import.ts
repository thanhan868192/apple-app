import { NgOptimizedImage } from "@angular/common";
import { DisplayOnViewDirective } from "../directives/display-on-view.directive";
import { SHARED_IMPORTS } from "./shared.import";

export const GET_TO_KNOW_IMPORTS = [
    ...SHARED_IMPORTS,
    NgOptimizedImage
];