# Uppgift - "DOM och events"

I den här uppgiften tränar vi mer på manipuleringen av dom. Vi ska bygga vidare (eller bygga om) föregående uppgift och lägga till fler events och manipulera elementen på sidan.

Du jobbar i mappen `kmom04/`.



### Förutsättning

Det förutsätts att du gått igenom artiklarna för [kursmoment 04](../../articles/kmom04) samt är det en fördel om du gjort tidigare kursmoment. De ger dig koll på hur vi börjar jobba med JavaScript och webbläsaren.



### Intro

Din förra uppgift blev så bra och höll den kvalitét som "eQuality" vill utstråla. Användarna tyckte mycket om att interagera med webbsidan och har nu önskat en version till. Fast med mer fokus på tangentbordevents.

De vill även att uppgiften ska byggas ihop med något som heter "webpack" för att hålla ned mängden data som behöver skickas.

Du utgår ifrån din sandbox och har såklart tillgång till tidigare uppgifter att hämta kod från.

```console
$ cd me
$ cp -r example/sandbox/* kmom04/
```

Dubbelkolla även filen `package.json` och se till så du har webpack installerat.



### Krav

#### 0. Miljön

1. Se till så du har fungerande script i package.json för att bygga applikationen med webpack, både `dev` och `prod`.

1. Dina källfiler har du i mappen `js/`.

1. Du ska använda ES moduler. Läs igenom hela uppgiften och fundera på vilka moduler som passar och skaffa en grundtanke för upplägget.



#### 1. Storlekar och position



##### 1.1 Placera ut en röd låda

Skapa en låda på din sida: `<div id="box1" class="box center red size200"></div>` i filen `index.html`, positionera ut den med absolut positionering i centrum av webbsidans fönster.

Sätt följande i stylesheeten:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    position: relative;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
```

Använd CSS-klasser för att ge lådan egenskaper. Här är ett exempel som du kan utgå ifrån.

```css
.box {
    position: absolute;
}

.center {
    top: 50%;
    left: 50%;
}

.red {
    background-color: red;
}

.size200 {
    height: 200px;
    width: 200px;   
}
```

Ta det som ett exempel på hur du kan strukturera dina CSS-klasser i förhållande till HTML-elementet. Du kan välja att göra på annat sätt om du vill.

Avsluta med att skapa en funktion som hjälper dig att skriva ut följande via `console.log()`.

1. Bredd och höjd på webbläsarens fönster.
1. Bredd och höjd på `#box1`-elementet.
1. Positionen på `#box1`-elementet enligt `left, top`.  

<!-- Tips. Studera exemplet [`example/getSize/` i kursrepot](js/repo/example/getSize) -->

Tips. Använd följande för att hämta detaljer om ett objekt: `Window.getComputedStyle()`, `parseInt()`.

Tips. Dela upp din kod i små funktioner. Var flitigt med att använda `console.log()` när du hamnar i bekymmer.



##### 1.2 Flytta ett objekt

Använd JavaScript-kod för att positionera `#box1` så exakt som möjligt i mitten av sidan.

Tips. Skapa egna små funktioner för att lösa uppgiften. Dina funktioner kan både utföra det de ska och samtidigt skriva ut debugg-utskrifter med `console.log()`.



#### 2. Eventhantering



##### 2.1 När webbläsarens fönster ändrar storlek

Fånga eventet för när webbläsarens fönster ändrar storlek. När det händer skall du alltid placera `#box1` i mitten av fönstret.

Tips. Studera exemplet [`example/resizeEvent/` i kursrepot](js/repo/example/resizeEvent).

Tips: `Window.onresize`.



##### 2.2 Fånga ett klick-event

Skapa en CSS-klass som definierar en `outline` för ett objekt, kalla CSS-klassen för `selected`.

Gör en eventhanterare för `click` som omväxlande ritar ut eller tar bort en outline från ett klickat objekt.

Koppla eventhanterare till `#box1`.

Om man nu klickar på objektet skall dess outline omväxlande visas och försvinna.

Tips. `Element.classlist`, `EventTarget.addEventListener`.



##### 2.3 Fånga ett dubbelklick-event

Skapa en CSS-klass som använder sig av CSS-transitions för att animera förändringen av ett elements storlek.

```css
.animateSize {
    transition: width 1s, height 1s;
}
```
När du dubbelklickar på ett element skall det "försvinna" enligt följande.

1. Ge elementet klassen `.animateSize`.
2. Sätt elementets `width` och `height` till `2px`.
3. Använd en timer för att radera elementet efter 2 sekunder.

Tips: `transition`, `window.setTimeout`.



#### 3. Keyboardevents



##### 3.1 Tangenten `e`

Skapa en CSS-klass som gör ett cirkulärt element. Du kan uppnå denna effekten genom att sätta 50% som värde på `border-radius`. Döp klassen till `circle`.

När man klickar på tangenten `e` så skall alla element som har klassen `selected` växla mellan formen fyrkantig och cirkulär.

Tips: `Document.getElementsByClassName()`, `NodeList`, Använd en for-loop för att loopa runt elementen i `Nodelist`.



##### 3.2 Tangenterna `q`, `w`

Skapa en funktion som tar ett element och förändrar dess storlek men behåller dess centrumposition.

Skapa en eventhanterare för tangentbordsnedtryckningar som förstorar elementet med 10px varje gång som tangenten `q` trycks ned.

Varje gång som tangenten `w` trycks ned skall elementet förminskas med 10px.

Förändringen skall ske om elementet är valt (har klassen `selected` satt). Annars händer inget.

Elementets upplevda centrum-position skall inte ändras. Man skall få känslan att elementet blir större eller mindre, men det skall inte flytta sin centrumposition. Du behöver alltså förändra `left` och `top` för att detta skall fungera.



##### 3.3 Tangenten `r`

Skapa CSS-klasser som representerar bakgrundsfärgerna `["red", "orange", "yellow", "green", "blue", "indigo", "violet"]`.

När man trycker på tangenten `r` så skall alla element som har klassen `selected` byta färg enligt följande schema:

* red -> orange
* orange -> yellow
* yellow -> green
* green -> blue
* blue -> indigo
* indigo -> violet
* violet -> red

Gillar du inte färgerna så kan du byta till andra.



##### 3.4 Tangenten `t`

När man trycker på `t` skall det skapas en kopia av alla element som är `selected`. Kopian skall placeras ut på en slumpmässig position, men hela elementet måste vara placerat innanför nuvarande storlek på fönster.

Missa inte att lägga till eventhanteraren för att göra select/de-select av ett element.

Tips: `Element.cloneNode`, `Node.appendChild`. Använd inte `document.getElementsByClassName` som ger en *live `NodeList`*, använd , `document.querySelectorAll` som ger en *icke live `NodeList`*.



##### 3.5 Tangenten `y`

Tryck på `y` för att radera de element som är valda.

Tips: `document.querySelectorAll`, `Node.removeChild`.



##### 3.6 Tangenten `u`

Tryck på `u` för att göra alla valda element till icke valda.



##### 3.7 Tangenten `i`

Tryck på `i` för att göra alla element till valda.



##### 3.8 Tangenten `p`

När man trycker på `p` så skall ett slumpmässigt element skapas. Ta en kopia av `#box1`, men slumpa fram dess position, färg och form.



##### 3.9 Piltangenterna

Skapa händelser för piltangenterna så att man kan flytta valda element till höger, vänster, upp och ned. Välj själv hur många pixel du vill flytta för varje tangentnedtryckning.



#### 4. Gör en egen händelse

Gör en egen valfri händelse. Beskriv din händelse i redovisningstexten och berättar vad du gjort och hur du löste det. Glöm inte att meddela hur eventet triggas.

Det kan vara enkelt eller utmanande, välj en rimlig nivå.



### Extra uppgift (Optionell)

#### 5. Animera med timer

Skapa en timer som byter utseende (färg, form) och position på ett element 5 gånger under 1 sekund.

Skapa en händelse för tangenten `d` som skall gälla samtliga element som är valda.



### Validering

Se till så koden validerar:

```console
$ cd me
$ npm run linter kmom04/
```



### Hur kan det se ut när det är klart?

Nedan är en video som visar hur det kan se ut när det är klart:

[![js exercise kmom04](https://img.youtube.com/vi/3kN-6TO5dC4/0.jpg)](https://www.youtube.com/watch?v=3kN-6TO5dC4)



### Avslutningsvis

Lycka till och hör av dig om du kör fast eller har några funderingar.

[TBD: Länk till issues](#)
