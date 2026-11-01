class MenuDrinks extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = drinksMenuContent;
	}
}

customElements.define("menu-drinks", MenuDrinks);

//language=HTML
const drinksMenuContent = `
    <div class="flex-container">
        <div class="menu-column">
            <div class="menu-section">
                <!-- WHITE WINE -->
                <h3 class="menu-header">WHITE WINE</h3>
                <h4>CHARDONNAY-CARDIFF<span>$11/40</span></h4>
                <p>(CA) TROPICAL CITRUS, COMPLEX, TOASTY VANILLA, BALANCED, BUTTERY FINISH</p>

                <h4>CHARD-TOAD HOLLOW<span>$13/45</span></h4>
                <p>(CA) UNOAKED, PEAR, APPLE, GINGER, ORANGE BLOSSOM, EXPANSIVE, CREAMY & CRISP</p>

                <h4>MOSCATO-STELLA <span>$11/40</span></h4>
                <p>(IT) SWEET AND AROMATIC, RIPE PEACHES, ORANGE BLOSSOM, GENTLE EFFERVESCENCE</p>

                <h4>PINOT GRIGIO-BANFI<span>$14/50</span></h4>
                <p>(IT) “SAN ANGELO” NOTES OF PEAR, PEACH, ANISE AND HONEY, FRUITY, CRISP, VERY REFRESHING</p>

                <h4>PINOT GRIGIO-SPINELLI<span>$11/40</span></h4>
                <p>(IT) FRUITY NOSE, FLORAL NOTES, RIPE MELON, LEMON, WELL-BALANCED AND CRISP</p>

                <h4>RIESLING-SALMON RUN<span>$12/44</span></h4>
                <p>(NY) REFRESHING, STONE FRUITS, HINTS OF CITRUS, OFF-DRY</p>

                <h4>ROSE-C’EST LA VIE!<span>$12/44</span></h4>
                <p>(FR) DRY AND REFRESHING, LIGHT RED BERRIES, FRESH CUT ROSE AND LIGHT HERBS</p>

                <h4>SAUVIGNON BLANC-ARONA<span>$12/44</span></h4>
                <p>(NZ) ZESTY RIPE PASSION FRUIT AND MELON, FRUIT FORWARD, FRESH TEXTURE, CLIPPED GRASS</p>

                <h4>VERDICCHIO-LUCCHETTI<span>$14/50</span></h4>
                <p>(IT) “CASTELLI DI JESI”, WHITE FLOWERS, VIBRANT CITRUS, SALINE MINERALITY, EASY DRINKING</p>

                <h4>PROSECCO-NINO ARDEVI<span>$11/40</span></h4>
                <p>(IT) FRESH, CREAMY, PEAR AND GOLDEN APPLE, HINTS OF CITRUS, LIVELY BUBBLES</p>

            </div>
            <div class="menu-section">
                <!-- RED WINE -->
                <h3 class="menu-header">RED WINE</h3>
                <h4>CABERNET SAUV-CARDIFF<span>$11/40</span></h4>
                <p>(CA) LIGHT BODIED, PLUM, HERBS AND BLACKBERRIES, LIGHT TANNINS</p>

                <h4>CABERNET SAUV-DAOU<span>$15/54</span></h4>
                <p>(CA) “SPECIAL SELECT”, DARK AND RED FRUITS, FULL-BODIED, SILKY AND SAVORY</p>

                <h4>CHIANTI-BADIA AL COLLE<span>$12/46</span></h4>
                <p>(IT) BRIGHT RED CHERRY, MEDIUM BODIED, DRY, MEDIUM TANNINS</p>

                <h4>MALBEC-PARCELEROS<span>$12/45</span></h4>
                <p>(ARG) MEDIUM BODIED, BLACKBERRY, DARK CHERRY AND COCOA WITH TOBACCO FINISH</p>

                <h4>MONTEPULCIANO-MONTEFRESCO<span>$11/40</span></h4>
                <p>(IT) MEDIUM BODIED, RIPE RED FRUIT, HINTS OF SPICE</p>

                <h4>RED BLEND-LEONE DI CASTRIS<span>$15/55</span></h4>
                <p>(IT) “MAIANA”, RICH DARK DRY FRUITS, MEDIUM BODIED, HINTS OF SWEET OAK</p>

                <h4>RED BLEND-”PESSIMIST” DAOU<span>$12/46</span></h4>
                <p>(CA) FULL BODIED, INTENSE DARK FRUIT, POWERFUL, ELEGANT</p>

                <h4>SUPER TUSCAN-ACHILLE<span>$14/48</span></h4>
                <p>(IT) MEDIUM/FULL BODIED, DARK FRUIT, HERBS, LEATHER, DRY, FIRM TANNINS</p>

                <h4>SYRAH/VIOGNIER-L’ORANGERAIE<span>$12/42</span></h4>
                <p>(FR) ROUNDED AND SUPPLE, DARK RASPBERRY, PLUM FRUIT, LIFTED WITH FLORAL NOTES</p>

                <h4>PINOT NOIR-LEESE FITCH<span>$11/40</span></h4>
                <p>(CA) RIPE FRUIT AROMAS, EXOTIC RED FRUITS, HERBS, HINTS OF FRESH TILLED EARTH</p>

            </div>
        </div>
        <div class="menu-column">
            <div class="menu-section">
                <!-- COCKTAILS -->
                <h3 class="menu-header">COCKTAILS</h3>
                <h4>APEROL SPRITZ<span>$13</span></h4>
                <p>APEROL LIQUEUR, PROSECCO, ORANGE PEEL</p>

                <h4>ENGINE ON THE RUM<span>$13</span></h4>
                <p>RUM, COCONUT MILK, LIME JUICE, SYMPLE SYRUP</p>

                <h4>LIMONCELLO MARTINI<span>$14</span></h4>
                <p>CITRUS VODKA, HOMEMADE LIMONCELLO, LEMON JUICE, SPLASH OF CLUB SODA, LEMON TWIST</p>

                <h4>STRAWBERRY MOJITO<span>$12</span></h4>
                <p>COCONUT RUM, STRAWBERRY PURÉE, LIME JUICE, MINT LEAVES, SPLASH OF CLUB SODA</p>

                <h4>LAST TRAIN TO MOSCOW<span>$12</span></h4>
                <p>VODKA, RASPBERRY PURÉE, GINGER BEER, FRESH LIME JUICE</p>

                <h4>SMOKED OLD FASHIONED<span>$14</span></h4>
                <p>OAK SMOKED, JIM BEAM RYE, BITTERS, SIMPLE SYRUP, AMARENA CHERRY AND ORANGE PEEL</p>

                <h4>LAVENDER MARTINI<span>$14</span></h4>
                <p>VODKA, ELDERFLOWER, LAVENDER LEMONADE</p>

                <h4>POMEGRANATE COSMOPOLITAN<span>$14</span></h4>
                <p>VODKA, TRIPLE SEC, PAMA LIQUOR, PINEAPPLE JUICE, FRESH LIME</p>

                <h4>PINEAPPLE TO PARADISE<span>$13</span></h4>
                <p>PINEAPPLE INFUSED TEQUILA, SIMPLE SYRUP, COINTREAU, HOMEMADE SOUR MIX,TAJIN SPICE RIM</p>

                <h4>THE LOCO-PALOMA<span>$13</span></h4>
                <p>TEQUILA, JALAPENO, SOUR MIX, TRIPLE SEC, GRAPEFRUIT SODA, HAWAIIAN BLACK SALT RIM</p>

                <h4>WHISKY SOUR<span>$14</span></h4>
                <p>TEA INFUSED WHISKEY, HOMEMADE SOUR MIX, AMARENA CHERRY, LEMON PEEL</p>

                <h4>GIN EXPLORATION<span>$14</span></h4>
                <p>GIN, LEMON JUICE, ST GERMAIN, MUDDLED CUCUMBER</p>

                <h4>THE ORIENT ESPRESSO<span>$14</span></h4>
                <p>VANILLA VODKA, KAHLUA LIQUEUR, FRESH ESPRESSO, COFFEE BEANS</p>

                <h4>ROSSINI<span>$12</span></h4>
                <p>STRAWBERRY PURÉE, PROSECCOA</p>

                <h4>FIZZY FREIGHT<span>$13</span></h4>
                <p>GIN, CHERRY JUICE, LEMON JUICE, PROSECCO</p>
            </div>
            <div class="menu-section">
                <!-- BEER -->
                <h3 class="menu-header">BEER</h3>
                <h4>CORONA LIGHT (4.0%)<span>$7</span></h4>
                <p>MEXICO, PALE LIGHT LAGER, 99 CAL, 12 OZ.</p>

                <h4>MICHELOB ULTRA (4.2%)<span>$6</span></h4>
                <p>DOMESTIC, LIGHT LAGER, 95 CALORIES, 12 OZ.</p>

                <h4>MILLER LITE (4.2%)<span>$6</span></h4>
                <p>DOMESTIC, LIGHT LAGER, 96 CALORIES, 12 OZ.</p>

                <h4>CORONA (4.6%)<span>$7</span></h4>
                <p>MEXICO, PALE LAGER, 148 CALORIES, 12 OZ.</p>

                <h4>HEINEKEN (5.0%)<span>$7</span></h4>
                <p>EUROPE, PALE LAGER, 142 CALORIES, 12 OZ.</p>

                <h4>MODELO ESPECIAL (4.4%)<span>$7</span></h4>
                <p>MEXICO, PILSNER STYLE LAGER, 143 CAL, 12 OZ.</p>

                <h4>STELLA ARTOIS (5.2%)<span>$7</span></h4>
                <p>EUROPE, PALE LAGER, 141 CALORIES, 12 OZ.</p>

                <h4>STELLA ARTOIS LIBERTE (N/A)<span>$7</span></h4>
                <p>EUROPE, NON-ALCOHOLIC, 59 CALORIES, 12 OZ.</p>

                <h4>VON C STONY CREEK (6.7%)<span>$9</span></h4>
                <p>PA, HAZY IPA, 195 CALORIES, 16 OZ. CAN</p>
            </div>
        </div>
    </div>
`;


