import { FamGallery } from "../home/fam-gallery/fam-gallery";
import { GetToKnow } from "../home/get-to-know/get-to-know";
import { Heroes } from "../home/heroes/heroes";
import { Promos } from "../home/promos/promos";
import { TvPlusGallery } from "../home/tv-plus-gallery/tv-plus-gallery";
import { SHARED_IMPORTS } from "./shared.import";

export const HOME_IMPORTS = [
    ...SHARED_IMPORTS,
    FamGallery,
    Heroes,
    Promos,
    TvPlusGallery,
    GetToKnow
];