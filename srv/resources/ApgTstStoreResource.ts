/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
 */
import { Drash, Uts} from "../deps.ts";
import { ApgTstService } from "../../lib/mod.ts";

export class ApgTstStoreResource extends Drash.Resource {

    public override paths = ["/store"];

    public GET(_request: Drash.Request, response: Drash.Response) {
        this.redirect("/", response)
    }

    public POST (request: Drash.Request, response: Drash.Response) {
        //TODO @8 APG 20221213 -- all the data validation here
        const framework = <string>request.bodyParam("framework");
        const specs = <string>request.bodyParam("specs");
        const events = <Uts.IApgUtsSpecEvent[]>request.bodyParam("events")

        ApgTstService.Store(framework!, specs!, events!);
        response.json({ok:true});

    }


}
