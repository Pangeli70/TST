function g(templateData) {
    const r = [];
    r.push(`<!DOCTYPE html>
<html lang="en">

  <head>
    <title>
      `);
    r.push(site.name);
    r.push(`:`);
    r.push(page.title);
    r.push(`</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge" />

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0" />

    <meta name="author"
          content="APG Angeli Paolo Giusto" />
    <meta name="generator"
          content="Deno+Drash" />
    <meta name="keywords"
          content="Deno, Drash, APG, Angeli Paolo Giusto, Paolo Angeli" />
    <meta name="application-name"
          content="`);
    r.push(site.name);
    r.push(`" />

    <!-- Favicon -->
    <link rel="shortcut icon"
          type="image/x-icon"
          href="https://apg-cdn.deno.dev/public/img/ico/Apg-favicon-2022.ico" />

    <link rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@latest/css/pico.classless.min.css" />
    <link rel="stylesheet"
          href="https://apg-cdn.deno.dev/public/css/Apg-pico-custom.css" />

    <style>
      .noMnoP {
        margin: 0;
        padding: 0;
        font-size: 70&
      }
    </style>
  </head>

  <body>
    <header style="padding: 0">
      <section id="title"
               style="padding: 0; margin: 0">
        <table>
          <tr>
            <td style="width:4rem">
              <a href="/">
                <img src="https://apg-cdn.deno.dev/public/img/png/APG-logo-2022-128px.png"
                     style="min-width:3rem; min-height:3rem; " />
              </a>
            </td>
            <td>
              <h2 style="margin-bottom: 0px">`);
    r.push(site.name);
    r.push(`<br>
                <span style="font-size: 50&">`);
    r.push(site.title);
    r.push(`</span>
              </h2>
            </td>
          </tr>
        </table>
      </section>`);
    if (page.toolbar) {
        r.push(`<section id="bar"
               style="text-align: center;">`);
        r.push(page.toolbar);
        r.push(`<hr>
      </section>`);
    }
    r.push(`<h1 class="apg-page-title">`);
    r.push(page.title);
    r.push(`</h1>

    </header>

    <main style="padding: 0">
      

<main>`);
    let deltaTime = 0;
    r.push(``);
    let lastHrt = 0;
    r.push(``);
    for (let i = 0; i < events.length; i++) {
        r.push(`<div>`);
        let event = events[i];
        r.push(``);
        if (event.clause == "title") {
            r.push(`<div>`);
            { deltaTime = 0; }
            r.push(``);
            { lastHrt = event.hrt; }
            r.push(`<h2>`);
            r.push(event.message);
            r.push(`</h2>`);
            if (event.payload != undefined) {
                r.push(`<div>
                <p>`);
                r.push(event.payload);
                r.push(`</p>
            </div>`);
            }
            r.push(`</div>`);
        }
        r.push(``);
        if (event.clause == "init") {
            r.push(`<details class="noMnoP">`);
            { lastHrt = event.hrt; }
            r.push(`<summary>
                <h3 class="noMnoP">`);
            r.push(event.hrt.toFixed(4));
            r.push(`- `);
            r.push(event.message);
            r.push(`</h3>
            </summary>`);
            if (event.payload != undefined) {
                r.push(`<p>`);
                r.push(event.payload);
                r.push(`</p>`);
            }
            r.push(`<section>`);
            do {
                r.push(`<div>`);
                { i++; }
                r.push(``);
                { event = events[i]; }
                r.push(``);
                if (event.clause == "when") {
                    r.push(`<div>`);
                    { lastHrt = event.hrt; }
                    r.push(`<h4 class="noMnoP">`);
                    r.push(event.message);
                    r.push(`</h4>
</div>`);
                }
                r.push(``);
                if (event.clause == "expect") {
                    r.push(`<div>`);
                    { lastHrt = event.hrt; }
                    r.push(`<h4 class="noMnoP">`);
                    r.push(event.message);
                    r.push(`</h4>
</div>`);
                }
                r.push(``);
                if (event.clause == "success") {
                    r.push(`<div>`);
                    { deltaTime = event.hrt - lastHrt; }
                    r.push(``);
                    { lastHrt = event.hrt; }
                    r.push(`<h5 class="noMnoP">`);
                    r.push(event.message);
                    r.push(`</h5>
    <p class="noMnoP"
       style="color:green">
        [`);
                    r.push(deltaTime.toFixed(4));
                    r.push(`ms] SUCCESS
    </p>`);
                    if (event.payload != undefined) {
                        r.push(`<div>
        <p>`);
                        r.push(event.payload);
                        r.push(`</p>
    </div>`);
                    }
                    r.push(`</div>`);
                }
                r.push(``);
                if (event.clause == "failure") {
                    r.push(`<div>`);
                    { deltaTime = event.hrt - lastHrt; }
                    r.push(``);
                    { lastHrt = event.hrt; }
                    r.push(`<h5 class="noMnoP">`);
                    r.push(event.message);
                    r.push(`</h5>
    <p class="noMnoP"
       style="color:red">
        [`);
                    r.push(deltaTime.toFixed(4));
                    r.push(`ms] FAILURE
    </p>`);
                    if (event.payload != undefined) {
                        r.push(`<div>
        <p>`);
                        r.push(event.payload);
                        r.push(`</p>
    </div>`);
                    }
                    r.push(`</div>`);
                }
                r.push(``);
                if (event.clause == "skip") {
                    r.push(`<div>`);
                    { lastHrt = event.hrt; }
                    r.push(`<h5 class="noMnoP">`);
                    r.push(event.message);
                    r.push(`</h5>
    <p class="noMnoP"
       style="color:gray">
        [`);
                    r.push(deltaTime.toFixed(4));
                    r.push(`ms] SKIPPED
    </p>
</div>`);
                }
                r.push(``);
                if (event.clause == "resume") {
                    r.push(`<div>
    <p>
        [`);
                    r.push(event.hrt);
                    r.push(`] [`);
                    r.push(event.clause);
                    r.push(`]`);
                    r.push(event.message);
                    r.push(`</p>`);
                    if (event.payload != undefined) {
                        r.push(`<p>`);
                        r.push(event.payload);
                        r.push(`</p>`);
                    }
                    r.push(`</div>`);
                }
                r.push(`</div>`);
            } while (event.clause != "resume" && i < events.lenght);
            r.push(`</section>
        </details>`);
        }
        r.push(``);
        if (event.clause != "title" && event.clause != "init") {
            r.push(`<div>`);
            { lastHrt = event.hrt; }
            r.push(`<h2>
                [`);
            r.push(event.hrt);
            r.push(`]`);
            r.push(event.message);
            r.push(`[`);
            r.push(event.clause);
            r.push(`]
            </h2>`);
        }
        r.push(`</div>`);
    }
    r.push(`</div>`);
}
r.push(`</main>
    </main>

    <footer style="padding: 0">
      <hr />
      <section id="footer"
               style="padding: 0; margin: 2em, 0, 0, 0">
        <p style="text-align: center; font-size: 0.5em">
          <em>
            © 2017-2022 APG: free man angeli paolo giusto.<br />
            Made with ❤ using
            <a href="https://deno.land/"
               target="_blank">Deno</a>,
            <a href="https://drash.land/"
               target="_blank"> Drash</a>,
            <a href="https://www.picocss.com/"
               target="_blank">Pico Css</a><br />
            SSR HTML made with APG-TNG.<br />
            Page released:`);
r.push(page.released);
r.push(`</em>
        </p>
      </section>
    </footer>
  </body>

</html>`);
return r.join("");
}