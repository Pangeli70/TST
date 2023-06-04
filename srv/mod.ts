/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * ------------------------------------------------------------------------
*/
import { Edr } from "./deps.ts";

import { ApgTstIndexResource } from "./resources/ApgTstIndexResource.ts";
import { ApgTstStoreResource } from "./resources/ApgTstStoreResource.ts";
import { ApgTstFrameworkResource } from "./resources/ApgTstFrameworkResource.ts";
import { ApgTstSpecsResource } from "./resources/ApgTstSpecsResource.ts";
import { ApgTstEventsResource } from "./resources/ApgTstEventsResource.ts";

export const ApgTstResources: typeof Edr.Drash.Resource[] = [

    // Tst
    ApgTstIndexResource,
    ApgTstStoreResource,
    ApgTstFrameworkResource,
    ApgTstSpecsResource,
    ApgTstEventsResource

];


export const ApgTstServices: Edr.Drash.Service[] = [
    new Edr.Drash.CORSService()
];