/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */
import { Edr, Tng, Dir, Uts } from "../deps.ts";
import { ApgTstService } from "../../lib/mod.ts";

export class ApgTstSpecsResource extends Edr.Drash.Resource {

    public override paths = ["/specs/:framework/:specs"];

    public async GET(request: Edr.Drash.Request, response: Edr.Drash.Response) {

        const rawFramework = request.pathParam("framework") as string;
        const rawSpecs = request.pathParam("specs") as string;

        const menu: Uts.IApgUtsHyperlink[] = [];
        const results = ApgTstService.ResultsOfSpecs(rawFramework!, rawSpecs!);
        for (let i = 0; i < results!.length; i++) {
            const item = {
                href: "/events/" + rawFramework + "/" + rawSpecs + "/" + i.toString(),
                caption: results[i].date.toISOString()
            };
            menu.push(item);
        }


        const site = Dir.ApgDirEntries[Dir.eApgDirEntriesIds.tst];

        const templateData = {
            site: {
                name: site.caption,
                title: site.title
            },
            page: {
                title: "Stack of results for the " + rawFramework + "/" + rawSpecs + " specs",
                toolbar: "",
                released: "2022/12/13"
            },
            menu
        };

        const html = await Tng.ApgTngService.Render("/ApgTstIndexPage.html", templateData) as string;

        response.html(html);

    }


}
