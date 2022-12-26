/** -----------------------------------------------------------------------
 * @module [TST/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Tng } from "../../deps.ts";
import { ApgTstService } from "../../src/mod.ts";

export class ApgTstEventsResource extends Drash.Resource {

    public override paths = ["/events/:framework/:specs/:index"];

    public async GET(request: Drash.Request, response: Drash.Response) {

        const rawFramework = request.pathParam("framework") as string;
        const rawSpecs = request.pathParam("specs") as string;
        const rawIndex = request.pathParam("index") as string;

        const index = rawIndex == "last" ? -1 : parseInt(rawIndex); 

        const result = ApgTstService.ResultOfSpec(rawFramework, rawSpecs, index);


        const templateData = {
            site: {
                name: "Apg-Tst",
                title: "Browse Apg tests results"
            },
            page: {
                title: "Events  for the " + rawFramework + "/" + rawSpecs + "/" + result?.date.toISOString() + " test result",
                toolbar: "",
                released: "2022/12/13"
            },
            events: result?.events
        };

        const html = await Tng.ApgTngService.Render("/events.html", templateData) as string;

        response.html(html);

    }


}
