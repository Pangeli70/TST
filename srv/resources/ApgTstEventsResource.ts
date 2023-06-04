/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
 */
import { Edr, Tng, Dir } from "../deps.ts";
import { ApgTstService } from "../../lib/mod.ts";

export class ApgTstEventsResource extends Edr.Drash.Resource {

    public override paths = ["/events/:framework/:specs/:index"];

    public async GET(request: Edr.Drash.Request, response: Edr.Drash.Response) {

        const rawFramework = request.pathParam("framework") as string;
        const rawSpecs = request.pathParam("specs") as string;
        const rawIndex = request.pathParam("index") as string;

        const index = rawIndex == "last" ? -1 : parseInt(rawIndex);

        const result = ApgTstService.ResultOfSpec(rawFramework, rawSpecs, index);
        const site = Dir.ApgDirEntries[Dir.eApgDirEntriesIds.tst];

        const templateData = {
            site: {
                name: site.caption,
                title: site.title
            },
            page: {
                title: "Events  for the " + rawFramework + "/" + rawSpecs + "/" + result?.date.toISOString() + " test result",
                toolbar: "",
                released: "2022/12/13"
            },
            events: result?.events
        };

        const html = await Tng.ApgTngService.Render("/ApgTstEventsPage.html", templateData) as string;

        response.html(html);

    }


}
