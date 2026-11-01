class MenuAllDay extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = allDayMenuContent;
	}
}

customElements.define("menu-allday", MenuAllDay);

//language=HTML
const allDayMenuContent = `
    <div class="flex-container">
        <!-- LEFT COLUMN -->
        <div class="menu-column">
            <!-- SALADS -->
            <div class="menu-section">
                <h3 class="menu-header">SALADS</h3>
                <h3 class="menu-subheader">GRILLED CHICKEN<span>$8</span>, GRILLED SALMON<span>$12</span>, GRILLED SHRIMP (4 PC.)<span>$12</span>, SEARED TUNA<span>$12</span></h3>

                <h4>HOUSE SALAD<span>$12</span></h4>
                <p>CRISP ICEBERG, ROMAINE, ARUGULA, RADICCHIO, ALMONDS, CROUTONS, TOMATO, SHAVED PARMESAN, HONEY-RED WINE VINAIGRETTE</p>

                <h4>CAESAR SALAD<span>$12</span></h4>
                <p>FRESH ROMAINE LETTUCE, TOMATO, SHAVED PARMESAN, CROUTONS, HOMEMADE DRESSING</p>

                <h4>GRILLED ROMAINE WEDGE<span>$13</span></h4>
                <p>CRUMBLED GORGONZOLA, CHERRY TOMATO, CANDIED WALNUT, CRISPY PORK PANCETTA, BALSAMIC VINAIGRETTE</p>

                <h4>ASIAN NOODLE SALAD<span>$14</span></h4>
                <p>PICKLED CUCUMBER, CARROT, RADISH, CHARRED CORN, EDAMAME, UDON SESAME NOODLES, CILANTRO, SWEET SOY DRIZZLE</p>
            </div>

            <!-- SHELLFISH & RAW BAR -->
            <div class="menu-section">
                <h3 class="menu-header">SHELLFISH & RAW BAR</h3>

                <h4>FRESH SHUCKED OYSTERS<span>$18/34</span></h4>
                <p>CHAMPAGNE MIGNONETTE, HORSERADISH, LEMON, TABASCO (6 PC./12 PC.)</p>

                <h4>GARLIC ROASTED OYSTERS (4 PC.)<span>$16</span></h4>
                <p>GARLIC PARMESAN BREADCRUMB, LEMON</p>

                <h4>TUNA TARTARE<span>$18</span></h4>
                <p>ARUGULA, SCALLION, SOY, SWEET CHILI PASTE, AVOCADO MOUSSE, CROSTINI</p>

                <h4>CRAB CAKE<span>$18</span></h4>
                <p>FRESH CORN-POBLANO RELISH, CHIPOTLE AIOLI</p>

                <h4>JUMBO SHRIMP COCKTAIL (5 PC.)<span>$20</span></h4>
                <p>WASABI COCKTAIL SAUCE, GRILLED LEMON</p>

                <h4>POKE NACHOS<span>$19</span></h4>
                <p>WONTON CHIPS, AHI TUNA, FRESH CORN, DICED CUCUMBER, EDAMAME, SWEET SOY MARINADE, CHIPOTLE AIOLI</p>
            </div>

            <!-- SMALL BITES -->
            <div class="menu-section">
                <h3 class="menu-header">SMALL BITES</h3>

                <h4>HOUSE MADE FOCACCIA<span>$7</span></h4>
                <p>HERB SEASONED GARLIC OLIVE OIL</p>

                <h4>ARANCINI (4 PC.)<span>$15</span></h4>
                <p>ARBORIO RICE BALLS, BROCCOLI RABE, SWEET ITALIAN SAUSAGE, PARMESAN, MOZZARELLA, TOMATO BASIL SAUCE</p>

                <h4>SHRIMP AVOCADO STACK<span>$18</span></h4>
                <p>CHILLED POACHED SHRIMP, CUCUMBER, AVOCADO, TOBIKO, SWEET SOY, SESAME, CRISPY RICE CAKE, SRIRACHA AIOLI</p>

                <h4>CRISPY CALAMARI<span>$17</span></h4>
                <p>FRIED CALAMARI SERVED WITH CHERRY HOT PEPPER, CHIPOTLE AIOLI, SIDE OF MARINARA AND FRESH LEMON</p>

                <h4>BEEF CARPACCIO<span>$18</span></h4>
                <p>TARTARE GARNISH, SLICED FILET MIGNON, ARUGULA, PICKLED RED ONION, EGG YOLK CRUMBLE, FRIED CAPERS, GRAIN MUSTARD AIOLI, CROSTINI</p>

                <h4>SHORT RIB EGGROLL (2 PC.)<span>$14</span></h4>
                <p>TENDER BRAISED BEEF, AGED WHITE CHEDDAR CHEESE, CARAMELIZED ONION, HORSERADISH MUSTARD SAUCE</p>

                <h4>CHICKEN WINGS (6 PC.)<span>$12</span></h4>
                <p>CRISPY CHICKEN WINGS, CARROT, CELERY AND BLUE CHEESE, YOUR CHOICE OF BUFFALO, HOT HONEY OR GARLIC PARMESAN</p>

                <h4>HOMEMADE HUMMUS TRIO<span>$18</span></h4>
                <p>CHICKPEA HUMMUS, EGGPLANT-PEPPER RATATOUILLE, ROASTED RED PEPPER HUMMUS, GRILLED FLATBREAD</p>
            </div>

            <!-- HANDHELDS -->
            <div class="menu-section">
                <h3 class="menu-header">HANDHELDS</h3>

                <h4>CRAB CAKE SANDWICH<span>$22</span></h4>
                <p>TOASTED BRIOCHE BUN, ARUGULA, TOMATO, CHIPOTLE PEPPER AIOLI, HOUSE FRIES</p>

                <h4>SHORT RIB GRILLED CHEESE & TOMATO BASIL BISQUE<span>$20</span></h4>
                <p>WHOLE GRAIN SOURDOUGH, CHEDDAR CHEESE, BEEF SHORT RIB, CUP OF ROASTED TOMATO BASIL BISQUE</p>

                <h4>SEARED SALMON SANDWICH<span>$22</span></h4>
                <p>TOASTED SOURDOUGH, OLIVE SALAD, TOMATO, LEAF LETTUCE, HOUSE FRIES</p>

                <h4>PESTO GRILLED CHICKEN<span>$19</span></h4>
                <p>GRILLED CHICKEN BREAST, CIABATTA ROLL, TOMATO, ARUGULA, BASIL PESTO, HOUSE FRIES</p>

                <h4>SINGLE SMASH<span>$16</span></h4>
                <p>4OZ. BEEF PATTY, TOASTED BRIOCHE BUN, CHEDDAR CHEESE, LETTUCE, TOMATO, RED ONION, HOUSE FRIES</p>

                <h4>DOYLESTOWN SMASH<span>$19</span></h4>
                <p>2-4OZ. BEEF PATTIES, TOASTED BRIOCHE BUN, BACON, CARAMELIZED ONION, CHEDDAR CHEESE, HOUSE FRIES</p>

                <h4>CRISPY SHRIMP TACO (3 PC.)<span>$16</span></h4>
                <p>CORN TORTILLAS, FRIED SHRIMP, COLESLAW, CHIPOTLE AIOLI</p>

                <h4>SHORT RIB TACO (3 PC.)<span>$18</span></h4>
                <p>CORN TORTILLAS, PULLED SHORT RIB, CHEDDAR CHEESE, FRESH CORN-POBLANO RELISH, AVOCADO CREMA, CILANTRO</p>
            </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="menu-column">
            <!-- SHAREABLES -->
            <div class="menu-section">
                <h3 class="menu-header">SHAREABLES</h3>

                <h4>FIG RICOTTA CROSTINI (3 PC.)<span>$16</span></h4>
                <p>FIG JAM, WHIPPED RICOTTA, PORK PROSCIUTTO, HONEY-MINT DRIZZLE</p>

                <h4>MARGARITA FLATBREAD<span>$16</span></h4>
                <p>MOZZARELLA, TOMATO SAUCE, EVOO, BASIL</p>

                <h4>SHORT RIB FLATBREAD<span>$20</span></h4>
                <p>CARAMELIZED ONION, TENDER BEEF SHORT RIB, BLUE CHEESE, HORSERADISH AIOLI</p>

                <h4>SAUTEED MUSSELS<span>$17</span></h4>
                <p>P.E.I. MUSSELS, CHOICE OF GARLIC WHITE WINE SAUCE OR SPICY TOMATO FRA DIAVOLO SAUCE</p>

                <h4>SPICY MARYLAND CRAB DIP<span>$22</span></h4>
                <p>CREAMY CRAB DIP, DICED PEPPER, OLD BAY, WONTON CHIPS</p>

                <h4>THE STATION FRIES<span>$14</span></h4>
                <p>BRAISED SHORT RIB GRAVY, CHEDDAR CHEESE CURD, STEAK FRIES</p>

                <h4>CRISPY EGGPLANT CHIPS<span>$16</span></h4>
                <p>THIN SLICED FRIED EGGPLANT, OLIVE TAPENADE, ROASTED GARLIC-ZA’ATAR SPICED AIOLI</p>
            </div>

            <!-- BIG PLATES -->
            <div class="menu-section">
                <h3 class="menu-header">BIG PLATES</h3>

                <h4>CHICKEN & CRAB<span>$29</span></h4>
                <p>SAUTEED CHICKEN BREAST, TOPPED WITH SAUTEED SPINACH, JUMBO LUMP CRAB, LEMON WHITE WINE SAUCE, LINGUINE</p>

                <h4>CHICKEN PARMIGIANA<span>$25</span></h4>
                <p>CHICKEN BREAST CUTLET, MARINARA SAUCE, MOZZARELLA, LINGUINE</p>

                <h4>JAMBALAYA<span>$24</span></h4>
                <p>SLICED CHICKEN BREAST, ANDOUILLE SAUSAGE, ARBORIO RICE, CAJUN TOMATO CREAM SAUCE</p>

                <h4>SHRIMP & LOBSTER RISOTTO<span>$36</span></h4>
                <p>3 JUMBO SHRIMP, COLD WATER LOBSTER CHUNKS, ARBORIO RICE, EDAMAME, TOASTED CORN, TOMATO LOBSTER BROTH</p>

                <h4>SEAFOOD PESCATORE<span>$35</span></h4>
                <p>SAUTEED MUSSELS, CLAMS, SHRIMP, SALMON, WHITE FISH, WHITE WINE TOMATO SAUCE, LINGUINE</p>

                <h4>STEAK FRITES<span>$42</span></h4>
                <p>12 OZ. GRILLED NY STRIP STEAK, GARLIC-HERB BUTTER, HOUSE PARMESAN TRUFFLE FRIES</p>

                <h4>BRAISED SHORT RIB<span>$36</span></h4>
                <p>RED WINE BRAISED BEEF, MASHED POTATO, BABY CARROTS, CRISPY FRIED ONION</p>

                <h4>RIGATONI BOLOGNESE<span>$26</span></h4>
                <p>SAVORY GROUND BEEF, TOMATO CREAM SAUCE, MEZZI RIGATONI PASTA</p>

                <h4>COWBOY PORK CHOP<span>$33</span></h4>
                <p>14 OZ. CENTER CUT CHOP, MUSHROOM RISOTTO, RED WINE DEMI GLAZE</p>

                <h4>RIGATONI ALLA VODKA<span>$24</span></h4>
                <p>CRISPY BACON, VODKA CREAM, PARMESAN, MEZZI RIGATONI PASTA</p>

                <h4>FISH FRANCESE<span>$31</span></h4>
                <p>LIGHTLY BATTERED WHITE FISH FILLET, JUMBO LUMP CRABMEAT, LINGUINE, LEMON, SPINACH, WHITE WINE SAUCE</p>

                <h4>KOREAN BBQ SALMON<span>$29</span></h4>
                <p>PAN-SEARED SALMON, UDON-SESAME NOODLES, CHARRED BROCCOLINI, PICKLED CUCUMBER, SWEET SOY REDUCTION</p>
            </div>

            <!-- SIDES -->
            <div class="menu-section">
                <h3 class="menu-header">SIDES</h3>

                <h4>MASHED POTATO<span>$9</span></h4>
                <p>CREAMY IDAHO MASHED POTATO</p>

                <h4>TRUFFLE FRIES<span>$10</span></h4>
                <p>PARMESAN TRUFFLE FRIES</p>

                <h4>SAUTEED BABY CARROTS<span>$10</span></h4>
                <p>FRESH SHALLOTS, BUTTER</p>

                <h4>BROCCOLINI<span>$12</span></h4>
                <p>SAUTEED GARLIC, EXTRA VIRGIN OLIVE OIL</p>

                <h4>BRUSSELS SPROUTS<span>$12</span></h4>
                <p>CARAMELIZED ONION, BACON</p>

                <h4>PASTA MARINARA<span>$9</span></h4>
                <p>YOUR CHOICE OF MEZZI RIGATONI, LINGUINE OR GLUTEN-FRIENDLY PENNE</p>
            </div>
        </div>
    </div>
`;
