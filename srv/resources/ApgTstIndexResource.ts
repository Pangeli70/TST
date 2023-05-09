/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
 */
import { Drash, Tng } from "../deps.ts";
import { ApgTstService } from "../../lib/mod.ts";

export class ApgTstIndexResource extends Drash.Resource {

    public override paths = ["/"];

    public async GET(_request: Drash.Request, response: Drash.Response) {

        const menu: {
            href: string,
            caption: string
        }[] = [];
        const frameworks = ApgTstService.Frameworks();
        for (const framework of frameworks) { 
            const item = {
                href: "/framework/" + framework,
                caption: framework
            };
            menu.push(item);
        }


        const templateData = {
            site: { 
                name: "Apg-Tst",
                title: "Browse Apg tests results"
            },
            page: {
                title: "Index of the recently tested frameworks",
                toolbar: "",
                released: "2022/12/13"
            },
            menu
        };

        const html = await Tng.ApgTngService.Render("/index.html", templateData) as string;

        response.html(html);

    }


}
