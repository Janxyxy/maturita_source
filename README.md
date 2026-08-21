# Maturita SPŠUL

Studijní materiály k maturitní zkoušce, publikované jako statický web
postavený na [Docusaurus](https://docusaurus.io/) 3.

## Obsah

| Předmět | Co obsahuje |
| --- | --- |
| **Anglický jazyk** | 19 okruhů k ústní zkoušce (Education, Transportation, The UK, …) – chybí č. 04 |
| **Český jazyk** | 31 rozborů děl k ústní zkoušce + 3 materiály k didaktickému testu (autoři, literární období, žánry) |
| **Datové sítě** | 25 okruhů (DAS 1–25) včetně obrázků a schémat |
| **Počítačové vybavení** | 26 okruhů (POV 1–26) včetně obrázků |

Zdrojové texty jsou Markdown soubory v `maturita/docs/`. Postranní menu se
generuje automaticky ze struktury složek (`sidebars.js`), takže nový soubor
stačí přidat do správné složky – nikam se neregistruje ručně.

## Struktura repozitáře

```
.
├── maturita/               # samotný Docusaurus web
│   ├── docs/               # obsah – Markdown podle předmětů
│   ├── src/                # úvodní stránka a vlastní CSS
│   ├── static/img/         # obrázky, logo, favicon
│   ├── docusaurus.config.js
│   └── sidebars.js
├── vercel.json             # nastavení buildu pro Vercel
├── Dockerfile              # alternativní běh v kontejneru
└── docker-compose.yml
```

Web **není** v kořeni repozitáře, ale ve složce `maturita/`. Na to je potřeba
myslet u všech příkazů i u nasazení.

## Lokální spuštění

Potřebuješ Node.js 18 nebo novější.

```bash
cd maturita
npm ci
npm start
```

Web běží na <http://localhost:3000> a při úpravě souborů se sám obnoví.

### Build produkční verze

```bash
cd maturita
npm run build     # vygeneruje statické soubory do maturita/build
npm run serve     # lokální náhled výsledného buildu
```

## Docker

```bash
docker compose up --build
```

Web pak běží na <http://localhost:3000>.

## Nasazení na Vercel

Build je nastavený souborem `vercel.json` v kořeni repozitáře, který Vercelu
říká, že se má instalovat a buildit uvnitř `maturita/`:

```json
{
  "installCommand": "cd maturita && npm ci",
  "buildCommand": "cd maturita && npm run build",
  "outputDirectory": "maturita/build"
}
```

Po pushi do `main` se nasazení spustí samo.

> **Pozor:** pokud si ve Vercelu nastavíš *Root Directory* na `maturita`,
> Vercel hledá `vercel.json` uvnitř té složky a tenhle kořenový soubor bude
> ignorovat. Používej vždy jen jednu z těch dvou variant, ne obě zároveň.

## Přidání nového materiálu

1. Vytvoř Markdown soubor ve složce příslušného předmětu v `maturita/docs/`.
2. Číslování v názvu souboru (`01-…`, `02-…`) určuje pořadí v menu.
   Případně jde pořadí nastavit v hlavičce souboru:

   ```markdown
   ---
   sidebar_position: 3
   ---

   # Nadpis okruhu
   ```

3. Obrázky ukládej do podsložky `img/` u daného předmětu a odkazuj se na ně
   relativně: `![popis](img/12/schema.png)`.

Build má zapnuté `onBrokenLinks: 'throw'` – rozbitý odkaz shodí build,
takže si po přidání obsahu radši lokálně pusť `npm run build`.
