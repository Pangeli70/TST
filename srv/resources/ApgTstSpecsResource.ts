/** -----------------------------------------------------------------------
 * @module [apg-tst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Tng } from "../deps.ts";
import { ApgTstService } from "../../lib/mod.ts";

export class ApgTstSpecsResource extends Drash.Resource {

    public override paths = ["/specs/:framework/:specs"];

    public async GET(request: Drash.Request, response: Drash.Response) {

        const rawFramework = request.pathParam("framework") as string;
        const rawSpecs = request.pathParam("specs") as string;

        const menu: {
            href: string,
            caption: string
        }[] = [];
        const results = ApgTstService.ResultsOfSpecs(rawFramework!, rawSpecs!);
        for (let i = 0; i < results!.length; i++) {
            const item = {
                href: "/events/" + rawFramework + "/" + rawSpecs + "/" + i.toString(),
                caption: results[i].date.toISOString()
            };
            menu.push(item);
        }


        const templateData = {
            site: {
                name: "Apg-Tst",
                title: "Browse Apg tests results"
            },
            page: {
                title: "Stack of results for the " + rawFramework + "/" + rawSpecs + " specs",
                toolbar: "",
                released: "2022/12/13"
            },
            menu
        };

        const html = await Tng.ApgTngService.Render("/index.html", templateData) as string;

        response.html(html);

    }


}
