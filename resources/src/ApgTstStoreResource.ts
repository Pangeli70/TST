/** -----------------------------------------------------------------------
 * @module [TST/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Uts} from "../../deps.ts";
import { ApgTstService } from "../../src/mod.ts";

export class ApgTstStoreResource extends Drash.Resource {

    public override paths = ["/store"];

    public GET(_request: Drash.Request, response: Drash.Response) {
        this.redirect("/", response)
    }

    public POST (request: Drash.Request, response: Drash.Response) {
        //TODO all the data validation here
        const framework = <string>request.bodyParam("framework");
        const specs = <string>request.bodyParam("specs");
        const events = <Uts.IApgUtsSpecEvent[]>request.bodyParam("events")

        const r = ApgTstService.Store(framework!, specs!, events!);
        response.json(r);

    }


}
