Introduktion
==================================

Syftet med denna guide är att ge en introduktion till kärnan, de väsentliga delarna, i programmeringsspråket JavaScript, så som en programmerare tar sig an ett nytt programmeringsspråk.



### Versioner

JavaScript uppdateras flitigt och vid varje uppdatering tillkommer det funktionalitet. Webbläsarna, som renderar JavaScripten, måste då uppdateras för att kunna hantera den nya funktionaliteten. De två "stora" uppdateringarna var ES5 (ca 2009) och ES6 (ca 2015). Den senaste, i skrivande stund, är ECMAScript 2021.

I den här kursen kommer vi ha ett fokus på grunderna i språket och hur det fungerar på klientsidan. Den här kursen kommer fokusera på ES6 och bakåt. Vi har valt att inte dra det längre, utan vi håller oss däromkring. Det kan såklart finnas konstruktioner i senare versioner som går att använda, vilket uppmuntras om stödet finns i de vanliga webbläsarna.



Dokumentation och resurser
==================================

Använd Mozilla Developer Network (MDN) som [referens för JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript).

Om du googlar så sätter du "mdn" först i din googling så hittar du referenssidorna på MDN.

StackOverflow i all ära, men om du verkligen vill veta svaret så behöver du ta dig till referensmanualen på MDN.

Använd manualerna flitigt. Lär dig slå upp i dem.



Utvecklingsverktyg
==================================

När man utvecklar JavaScript behöver man en utvecklingsmiljö och utvecklingsverktyg.

Vi börjar kursen med att hålla oss i terminalen och exekvering av JavaScript där. Vi går sedan vidare med att låta webbläsaren ta hand om koden.

Du ska installera Node.js och köra dess interpretator i terminalen, det låter dig testa enklare konstruktioner på ett enkelt sätt.

Det som sedan ligger närmast till hands är en webbläsare och en grundstruktur för en webbsida. Du kan hitta en mall för att skriva dina exempel och testprogram i ditt kursrepo under `example/sandbox`.

Din webbläsare har en developer tools (console) där du kan skriva enklare konstruktioner i JavaScript.

Vill du göra kodexempel och dela med dig av koden så använder du online-verktyg likt [jsfiddle](https://jsfiddle.net/) eller [codepen](https://codepen.io/). Det är gratis att skapa ett konto på båda de sidorna.
