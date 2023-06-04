/** -----------------------------------------------------------------------
 * @module [apg-tst] Test results browser
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/30] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/05/08] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
 */
import { Edr, Tng, Dir } from "./srv/deps.ts";
import { ApgTstResources, ApgTstServices } from "./srv/mod.ts";


const serverInfo = Dir.ApgDirServer.GetInfo(Dir.eApgDirEntriesIds.tst);

const remoteTngHost = "";

Tng.ApgTngService.Init("./srv/templates", remoteTngHost, {
  useCache: false,
  cacheChunksLongerThan: 100,
  consoleLog: true,
  beginMarkup: "<!--(",
  endMarkup: ")-->",
});


const server = new Edr.Drash.Server({
  hostname: '0.0.0.0',
  port: serverInfo.localPort,
  resources: ApgTstResources,
  services: ApgTstServices,
  protocol: "http"
});

server.run();


Dir.ApgDirServer.StartupResume(serverInfo);
