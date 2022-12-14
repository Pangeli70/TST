/** -----------------------------------------------------------------------
 * @module [TST/Resources]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Tng } from "../../deps.ts";
import { ApgTstService } from "../../src/mod.ts";

export class ApgTstFrameworkResource extends Drash.Resource {

    public override paths = ["/framework/:framework"];

    public async GET(request: Drash.Request, response: Drash.Response) {

        const rawFramework = request.pathParam("framework") as string;

        const menu: {
            href: string,
            caption: string
        }[] = [];
        const specs = ApgTstService.SpecsOfFramework(rawFramework!);
        for (const spec of specs!) { 
            const item = {
                href: "/specs/" + rawFramework +"/" + spec,
                caption: spec
            };
            menu.push(item);
        }


        const templateData = {
            site: { 
                name: "Apg-Tst",
                title: "Browse Apg tests results"
            },
            page: {
                title: "List of specs for the [" + rawFramework + "] framework",
                toolbar: "",
                released: "2022/12/13"
            },
            menu
        };

        const html = await Tng.ApgTngService.Render("/index.html", templateData) as string;

        response.html(html);

    }


}
