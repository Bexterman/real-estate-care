# Project Real Estate Care - _debriefing_

###### work in progress

## Inhoudsopgave

1.  Wat is de casus?
2.  Welke frameworks worden toegepast?
3.  Hoe ziet het ecosysteem van dit project eruit?
4.  Samenvattend

## 1. Wat is de casus?

RealEstateCare is een dienstverlener voor woningen onderhoud. De organisatie schrijft rapporten over onder anderen: inspecties, schade reparaties, brandgevaar, ongedierte bestrijding en achterstallig onderhoud. RealEstateCare heeft een applicatie die een formulier/inspectierapport opmaakt, maar deze heeft een workflow upgrade nodig.

## 2. Welke frameworks worden toegepast?

### 2.1 De grootste frameworks

Er zijn een aantal populaire frameworks, zoals **React**, **Angular** en **Vue**. Allemaal een eigen specifieke insteek. Angular is een complete keuken. Helemaal ingericht, van apparatuur tot keukenblad: je moet zelf uitzoeken hoe de keuken is ingedeeld en hoe alles werkt. React zorgt ervoor dat je kan kiezen wat je wilt. Ze geven bijvoorbeeld de oven, maar je mag zelf de keuken inrichten. Vue zit daar een beetje tussen in. Lijkt veel op Angular, maar Vue kan qua functionaliteit ook lijken op React. Vue is geschikt voor zowel kleine als grote projecten en heeft een toegankelijk _learning curve_.

### 2.2 Vue, het framework voor dit project

**Vue** is een fijn en geschikt framework voor clientside webapplicaties. Het ecosysteem van Vue is flexibel en uitgebreid. Bovendien is de compatibiliteit met verschillende devices, browsers, browserversies, servers en databanken hoog. Vue wordt daarom de keuze voor dit project.

### 2.3 Een mobile app

**Cross-platform mobile development** is elementair in het ontwikkelproces en kan niet gemist worden als de app portable moet zijn. Om deze taak uit te voeren zal aansluitend het framework **Ionic** worden toegepast. Ionic werkt uitstekend met Vue en biedt o.a. de mogelijkheid voor **light en dark themes**.

## 3. Hoe ziet het ecosysteem van dit project eruit?

### 3.1 Design pattern

Het project zal een **Single Page Application** worden, wat de performance optimaliseert. Met de **Vue Router** als toevoeging aan het ecosysteem, kan eenvoudig en vloeiend tussen componenten (website onderdelen) worden geschakeld.

### 3.2 Data verwerking

Ook moet data uit API’s worden opgehaald én worden getoond in de applicatie. Dus om deze communicatie te bewerkstelligen komt de bibliotheek **Axios** bij het ecosysteem. Tevens moet opgehaalde data worden opgeslagen, waarvoor Vuex zal worden toegepast als centraal beheer (statemanagement) van deze data.

### 3.3 Scripting

Dit project zal gebruik maken van **TypeScript**. TypeScript is een superset van JavaScript waarmee je statisch kunt typen, waardoor fouten vroegtijdig worden opgespoord en de kwaliteit van de code optimaliseert. Bovendien biedt TypeScript verbeterde tooling-ondersteuning, waaronder automatische aanvulling, refactoring en codenavigatie. Vanwege het feit dat TypeScript een superset is van JavaScript is, kun je JavaScript code eenvoudig omzetten naar TypeScript zonder de gehele JavaScript code te herschrijven - goed voor de _developer experience_.

### 3.4 Veiligheid

#### a) Compatibiliteit met script syntax

Voor breed gedragen performance is **Babel** een JavaScript transpiler die nieuwe syntax van JavaScript omzet naar oudere versies, zodat browsers die de nieuwste syntax niet ondersteunen ook runnen én zodat de veiligheid van de applicatie zo hoog mogelijk blijft.

#### b) Code injectie zo veel als mogelijk voorkomen

Vanuit het oogpunt van een developer, is user input niet te vertrouwen. Zeker vanwege kwaadwillende personen. Onvoldoende formuliervalidatie kan er voor zorgen dat de applicatie in gevaar loopt. **Cross-site scripting (XSS)** is een bekende manier om valse code te injecteren, waarbij zowel de gebruiker als de ontwikkelaar hier slachtoffer van kunnen zijn.

#### c) Wat kan de developer doen?

Het **testen** van formuliervalidatie en geschreven syntax/code zal grotendeels de veiligheid garanderen. Hulpmiddelen in de code editor, zoals **ESlint** en **Jest**, dragen bij aan de veiligheid door automatisch kwetsbaarheden tijdens en naderhand het programmeren te herkennen. ESlint en Jest worden toegepast voor dit project.

#### d) Wat kan de gebruiker doen?

Een simpele oplossing voor de gebruiker: **download antivirus software**. Het reduceert het risico op virussen zoals adware, malware en trojans. Ook helpen antivirussen de ontwikkelaar. Een antivirus kan beveiligingsrisico's in software inschatten en mocht er beveiligingsgevaarlijke bugs in de code zitten, dan kan het antivirus de app blokkeren. Hopelijk krijgt de ontwikkelaar een melding van de antivirus, maar de gebruiker kan ook communiceren.

## 4. Samenvattend

Real Estate Care heeft optimalisatie in hun werkproces nodig voor hun dienstverlening. Dit project wordt een Single Page Application die gerealiseerd wordt met:

1.  frameworks Vue en Ionic (User Interface)
2.  Vue Router
3.  Axios
4.  TypeScript
5.  Babel
6.  ESlint
7.  Jest

Het is mogelijk dat later in het project een dependency wordt toegevoegd of verwijderd. De aanpassing (met toelichting) zal in dit document worden weergeven.
