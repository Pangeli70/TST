/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
 */
import { Edr, Tng, Dir, Uts } from "../deps.ts";
import { ApgTstService } from "../../lib/mod.ts";

export class ApgTstIndexResource extends Edr.Drash.Resource {

    public override paths = ["/"];

    public async GET(_request: Edr.Drash.Request, response: Edr.Drash.Response) {

        const menu: Uts.IApgUtsHyperlink[] = [];
        const frameworks = ApgTstService.Frameworks();
        for (const framework of frameworks) {
            const item = {
                href: "/framework/" + framework,
                caption: framework
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
                title: "Index of the recently tested frameworks",
                toolbar: "",
                released: "2022/12/13"
            },
            menu
        };

        const html = await Tng.ApgTngService.Render("/ApgTstIndexPage.html", templateData) as string;

        response.html(html);

    }


}
