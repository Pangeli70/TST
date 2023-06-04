/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
 */
import { Edr, Tng, Dir, Uts } from "../deps.ts";
import { ApgTstService } from "../../lib/mod.ts";

export class ApgTstFrameworkResource extends Edr.Drash.Resource {

    public override paths = ["/framework/:framework"];

    public async GET(request: Edr.Drash.Request, response: Edr.Drash.Response) {

        const rawFramework = request.pathParam("framework") as string;

        const menu: Uts.IApgUtsHyperlink[] = [];
        const specs = ApgTstService.SpecsOfFramework(rawFramework!);
        for (const spec of specs!) {
            const item = {
                href: "/specs/" + rawFramework + "/" + spec,
                caption: spec
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
                title: "List of specs for the [" + rawFramework + "] framework",
                toolbar: "",
                released: "2022/12/13"
            },
            menu
        };

        const html = await Tng.ApgTngService.Render("/ApgTstIndexPage.html", templateData) as string;

        response.html(html);

    }


}
