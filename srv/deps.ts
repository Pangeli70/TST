/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * ------------------------------------------------------------------------
*/

// https://deno.land/x/drash
export * as  Drash from "https://deno.land/x/drash@v2.7.1/mod.ts";

// https://deno.land/x/drash_middleware
export { CORSService as DrashCorsService } from "https://deno.land/x/drash@v2.7.1/src/services/cors/cors.ts";

// https://github
export * as Uts from "https://raw.githubusercontent.com/Pangeli70/apg-uts/master/mod.ts";
export * as Edr from "https://raw.githubusercontent.com/Pangeli70/apg-edr/master/mod.ts";
export * as Rst from "https://raw.githubusercontent.com/Pangeli70/apg-rst/master/mod.ts";
export * as Tng from "https://raw.githubusercontent.com/Pangeli70/apg-tng/master/mod.ts";
export * as Dir from "https://raw.githubusercontent.com/Pangeli70/apg-dir/master/mod.ts";

// Local MonoRepo
// export * as Uts from "../apg-uts/mod.ts";
// export * as Rst from "../apg-rst/mod.ts";
// export * as Edr from "../apg-edr/mod.ts";
// export * as Tng from "../apg-tng/mod.ts";
// export * as Dir from "../apg-dir/mod.ts";