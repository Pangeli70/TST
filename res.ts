/** -----------------------------------------------------------------------
 * @module [TST/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * ------------------------------------------------------------------------
*/
import { Drash } from "./deps.ts";
import { Edr }  from "./deps.ts";
import * as res from "./resources/mod.ts";

export const resources: typeof Drash.Resource[] = [

    // Static
    Edr.ApgEdrPublicTextFileResource,
    Edr.ApgEdrPublicBinFileResource,

    // Tst
    res.ApgTstIndexResource,
    res.ApgTstStoreResource,
    res.ApgTstFrameworkResource,
    res.ApgTstSpecsResource,
    res.ApgTstEventsResource

];
