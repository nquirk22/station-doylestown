class MenuHappyHour extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = happyHourContent;
	}
}

customElements.define("menu-happy-hour", MenuHappyHour);

//language=HTML
const happyHourContent = `
    <!-- HAPPY HOUR -->
    <div class="menu-section">
        <h3 class="menu-header">HAPPY HOUR</h3>

        <h4>TUESDAY-FRIDAY<span>4PM-6PM</span></h4>
    </div>

    <div class="flex-container">
        <!-- LEFT COLUMN -->
        <div class="menu-column">
            <!-- COCKTAILS -->
            <div class="menu-section">
                <h3 class="menu-header">COCKTAILS</h3>

                <h4>WHISKY SOUR<span>$10</span></h4>
                <p>TEA INFUSED WHISKEY, HOMEMADE SOUR MIX, AMARENA CHERRY, LEMON PEEL</p>

                <h4>HUGO SPRITZ<span>$10</span></h4>
                <p>ELDERFLOWER LIQUEUR, PROSECCO, SPLASH OF CLUB SODA, MINT</p>

                <h4>LIMONCELLO SPRITZ<span>$10</span></h4>
                <p>HOUSE MADE LIMONCELLO, PROSECCO, SPLASH OF CLUB SODA, LEMON PEEL</p>

                <h4>APEROL SPRITZ<span>$10</span></h4>
                <p>APEROL LIQUEUR, PROSECCO, SPLASH OF CLUB SODA, ORANGE PEEL</p>

                <h4>LIMONCELLO MARTINI<span>$10</span></h4>
                <p>CITRUS VODKA, HOMEMADE LIMONCELLO, LEMON JUICE, SPLASH OF CLUB SODA, LEMON TWIST</p>
            </div>

            <!-- WINES -->
            <div class="menu-section">
                <h3 class="menu-header">WINES</h3>

                <h4>CHARDONNAY-CARDIFF<span>$8</span></h4>
                <p>(CA) TROPICAL CITRUS, COMPLEX, TOASTY VANILLA, BALANCED, BUTTERY FINISH</p>

                <h4>PINOT GRIGIO-SPINELLI<span>$8</span></h4>
                <p>(IT) FRUITY NOSE, FLORAL NOTES, RIPE MELON, LEMON, WELL BALANCED & CRISP</p>

                <h4>PINOT NOIR-NASH<span>$8</span></h4>
                <p>(CA) RIPE FRUIT AROMAS, EXOTIC RED FRUITS, HERBS, HINTS OF FRESH TILLED EARTH</p>

                <h4>CABERNET SAUV-CARDIFF<span>$8</span></h4>
                <p>(CA) LIGHT BODIED, PLUM, HERBS AND BLACKBERRIES, LIGHT TANNINS</p>
            </div>

            <!-- CANS -->
            <div class="menu-section">
                <h3 class="menu-header">CANS</h3>
                <p>ASK YOUR SERVER ABOUT AVAILABLE FLAVORS</p>

                <h4>STATESIDES<span>$6</span></h4>

                <h4>SURFSIDES<span>$6</span></h4>

                <h4>HIGH NOONS<span>$5</span></h4>
            </div>

            <!-- DRAFT BEERS -->
            <div class="menu-section">
                <h3 class="menu-header">DRAFT BEERS</h3>

                <h4>ALL DRAFT BEERS<span>$2 OFF</span></h4>
                <p>MILLER LITE | BLUE MOON | FIDDLEHEAD | GUINNESS | YUENGLING | LAGUNITAS | LEVANTE C&C | MANGO CART | TROEGS PERPETUAL | VICTORY SEASONAL | PERONI | SEASONAL CIDER</p>
            </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="menu-column">
            <!-- SMALL BITES -->
            <div class="menu-section">
                <h3 class="menu-header">SMALL BITES</h3>

                <h4>ARANCINI (3 PC.)<span>$9</span></h4>
                <p>ARBORIO RICE BALLS, BROCCOLI RABE, SWEET ITALIAN SAUSAGE, PARMESAN, MOZZARELLA, TOMATO BASIL SAUCE</p>

                <h4>CHICKEN WINGS (6 PC.)<span>$9</span></h4>
                <p>CRISPY CHICKEN WINGS, CARROT, CELERY AND BLUE CHEESE, YOUR CHOICE OF BUFFALO, HOT HONEY OR GARLIC PARMESAN</p>

                <h4>STATION FRIES<span>$9</span></h4>
                <p>BRAISED SHORT RIB GRAVY, CHEDDAR CHEESE CURD, STEAK FRIES</p>

                <h4>MARGARITA FLATBREAD<span>$10</span></h4>
                <p>MOZZARELLA, POMODORO, EVOO, FRESH BASIL</p>

                <h4>PASTA BOLOGNESE<span>$14</span></h4>
                <p>SAVORY GROUND BEEF, TOMATO CREAM SAUCE, LINGUINE PASTA</p>

                <h4>HOMEMADE HUMMUS TRIO<span>$13</span></h4>
                <p>CHICKPEA HUMMUS, EGGPLANT-PEPPER RATATOUILLE, ROASTED RED-PEPPER HUMMUS, GRILLED FLATBREAD</p>

                <h4>KOREAN BBQ SESAME CHICKEN SKEWERS<span>$14</span></h4>
                <p>KOREAN BBQ CHICKEN WITH PINEAPPLE PICO DE GALLO, SESAME SEEDS</p>

                <h4>CRISPY CALAMARI<span>$13</span></h4>
                <p>FRIED CALAMARI SERVED WITH CHERRY HOT PEPPER, CHIPOTLE AIOLI, SIDE OF MARINARA AND FRESH LEMON</p>

                <h4>MUSSELS<span>$11</span></h4>
                <p>P.E.I. MUSSELS, CHOICE OF GARLIC WHITE WINE SAUCE OR SPICY TOMATO FRA DIAVOLO SAUCE</p>

                <h4>CLAMS<span>$14</span></h4>
                <p>WHITE WINE GARLIC, FRA DIAVOLO SAUCE</p>

                <h4>SHRIMP<span>$14</span></h4>
                <p>GRILLED SHRIMP WITH GARLIC BUTTER SAUCE</p>
            </div>
        </div>
    </div>
`;
