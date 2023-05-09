/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * ------------------------------------------------------------------------
*/
import { DrashCorsService, Drash } from "./deps.ts";

export const ApgTstServices: Drash.Service[] = [
    new DrashCorsService()
];