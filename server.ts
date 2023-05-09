/** -----------------------------------------------------------------------
 * @module [apg-tst] Test results browser
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
 */
import { Drash, Uts, Tng, Dir } from "./srv/deps.ts";
import { ApgTstResources } from "./srv/res.ts";
import { ApgTstServices } from "./srv/svcs.ts";

const SERVER_INFO = Dir.ApgDirGetServerInfo(Dir.ApgDirEntries[Dir.eApgDirEntriesIds.tst]);

const remoteTngHost = "";

Tng.ApgTngService.Init("./srv/templates", remoteTngHost, {
  useCache: false,
  cacheChunksLongerThan: 100,
  consoleLog: true,
  beginMarkup: "<!--(",
  endMarkup: ")-->",
});


const server = new Drash.Server({
  hostname: '0.0.0.0',
  port: SERVER_INFO.localPort,
  resources: ApgTstResources,
  services: ApgTstServices,
  protocol: "http"
});

server.run();


Uts.ApgUtsServer.StartupResume(SERVER_INFO);
