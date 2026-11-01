class MenuBrunch extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = brunchMenuContent;
	}
}

customElements.define("menu-brunch", MenuBrunch);

//language=HTML
const brunchMenuContent = `
    <div class="flex-container">
        <!-- LEFT COLUMN -->
        <div class="menu-column">
            <!-- BRUNCH -->
            <div class="menu-section">
                <h3 class="menu-header">BRUNCH</h3>

                <h4>SHAKSHUKA<span>$18</span></h4>
                <p>(2) FRIED EGGS, MIXED PEPPERS, CARAMELIZED ONION, GOAT CHEESE, FOCACCIA TOAST</p>

                <h4>SHORT RIB OMELETTE<span>$18</span></h4>
                <p>BRAISED SHORT RIB, BELL PEPPER, MUSHROOM, SHREDDED WHITE AGED CHEDDAR, SIDE OF BACON OR SAUSAGE</p>

                <h4>THE STATION SKILLET<span>$16</span></h4>
                <p>(2) EGGS ANY STYLE, HOME FRIES WITH BELL PEPPER, CARAMELIZED ONION, BACON OR SAUSAGE, CHOICE OF TOAST</p>

                <h4>BRUNCH SMASH BURGER<span>$18</span></h4>
                <p>4OZ. BEEF PATTY, SUNNY SIDE UP EGG, TOMATO BACON JAM, LETTUCE, CHILI CRISP, HOME FRIES</p>

                <h4>TRUFFLED EGG FLATBREAD<span>$20</span></h4>
                <p>(3) SUNNY SIDE UP EGGS, MOZZARELLA, CRISPY BACON, HASHBROWNS, SCALLION, BLACK TRUFFLE OIL</p>

                <h4>ANDOUILLE SAUSAGE HASH<span>$19</span></h4>
                <p>(2) SUNNY SIDE UP EGGS, CRISPY POTATO, SPICY PORK SAUSAGE, SOUR CREAM, PICKLED RED ONION, CRUMBLED GOAT CHEESE, CHIPOTLE AIOLI, POBLANO CORN RELISH</p>

                <h4>AVOCADO TOAST<span>$15</span></h4>
                <p>(2) SUNNY SIDE UP EGGS, GRILLED MULTIGRAIN SOURDOUGH, AVOCADO SPREAD, ARUGULA, ROASTED CHERRY TOMATO, PICKLED RED ONION</p>

                <h4>LEMON RICOTTA PANCAKES<span>$17</span></h4>
                <p>(3) BUTTERMILK PANCAKES, LEMON RICOTTA CREAM, FRESH STRAWBERRIES, MAPLE SYRUP, SIDE OF BACON OR SAUSAGE</p>

                <h4>BELGIAN WAFFLE<span>$17</span></h4>
                <p>(1) HOMEMADE WAFFLE, WHIPPED BUTTER, FRESH STRAWBERRY, MAPLE SYRUP, SIDE OF BACON OR SAUSAGE</p>

                <h4>DUBAI CHOCOLATE FRENCH TOAST<span>$19</span></h4>
                <p>CRÈME BRÛLÉE BATTERED FRENCH TOAST, PISTACHIO CREAM, CHOCOLATE GLAZE, SIDE OF BACON OR SAUSAGE</p>
            </div>

            <!-- KIDS -->
            <div class="menu-section">
                <h3 class="menu-header">KIDS</h3>

                <h4>HAPPY STACK<span>$10</span></h4>
                <p>(2) FLUFFY PANCAKES, SERVED WITH BUTTER AND MAPLE SYRUP, SIDE OF BACON OR SAUSAGE</p>

                <h4>EGGY TOAST<span>$10</span></h4>
                <p>(2) EGGS ANY STYLE, CHOICE OF TOAST, SIDE OF BACON OR SAUSAGE</p>
            </div>

            <!-- SHELLFISH & RAW BAR -->
            <div class="menu-section">
                <h3 class="menu-header">SHELLFISH & RAW BAR</h3>

                <h4>FRESH SHUCKED OYSTERS<span>$18/34</span></h4>
                <p>CHAMPAGNE MIGNONETTE, HORSERADISH, LEMON, TABASCO (6 PC./12 PC.)</p>

                <h4>JUMBO SHRIMP COCKTAIL<span>$20</span></h4>
                <p>WASABI COCKTAIL SAUCE, GRILLED LEMON (5 PC.)</p>

                <h4>TUNA TARTARE<span>$18</span></h4>
                <p>ARUGULA, SCALLION, SOY, SWEET CHILI PASTE, AVOCADO MOUSSE, CROSTINI</p>
            </div>

            <!-- SIDES -->
            <div class="menu-section">
                <h3 class="menu-header">SIDES</h3>

                <h4>BACON<span>$6</span></h4>
                <p>PORK BACON STRIPS</p>

                <h4>BREAKFAST SAUSAGE<span>$6</span></h4>
                <p>(2) LINKS OF PORK SAUSAGE</p>

                <h4>HOME FRIES<span>$4</span></h4>
                <p>FRIED ONION, MIXED BELL PEPPER, CRISPY SEASONED POTATO</p>

                <h4>TOAST<span>$3</span></h4>
                <p>CHOICE OF RYE, WHEAT, WHITE OR MULTIGRAIN SOURDOUGH</p>

                <h4>HEN’S EGG<span>$3</span></h4>
                <p>(1) EGG ANY STYLE</p>

                <h4>FRUIT SALAD<span>$5</span></h4>
                <p>FRESH SEASONAL FRUITS</p>
            </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="menu-column">
            <!-- SMALL BITES & HANDHELDS -->
            <div class="menu-section">
                <h3 class="menu-header">SMALL BITES & HANDHELDS</h3>

                <h4>ARANCINI<span>$15</span></h4>
                <p>ARBORIO RICE BALLS, BROCCOLI RABE, SWEET ITALIAN SAUSAGE, PARMESAN, MOZZARELLA, TOMATO BASIL SAUCE</p>

                <h4>SHORT RIB EGGROLL<span>$14</span></h4>
                <p>TENDER BRAISED BEEF, AGED WHITE CHEDDAR, CARAMELIZED ONION, HORSERADISH MUSTARD SAUCE</p>

                <h4>CRISPY CALAMARI<span>$17</span></h4>
                <p>FRIED CALAMARI, CHERRY HOT PEPPER, CHIPOTLE AIOLI, MARINARA, FRESH LEMON</p>

                <h4>BEEF CARPACCIO<span>$18</span></h4>
                <p>TARTARE GARNISH, SLICED FILET MIGNON, ARUGULA, PICKLED RED ONION, EGG YOLK CRUMBLE, FRIED CAPERS, GRAIN MUSTARD AIOLI, CROSTINI</p>

                <h4>FIG RICOTTA CROSTINI<span>$16</span></h4>
                <p>FIG JAM, WHIPPED RICOTTA, MINT HONEY, PORK PROSCIUTTO</p>

                <h4>CRISPY SHRIMP TACO (3)<span>$16</span></h4>
                <p>CORN TORTILLAS, FRIED SHRIMP, COLESLAW, CHIPOTLE AIOLI</p>

                <h4>SHORT RIB TACO (3)<span>$18</span></h4>
                <p>CORN TORTILLAS, PULLED SHORT RIB, CHEDDAR CHEESE, FRESH CORN-POBLANO RELISH, AVOCADO CREMA, CILANTRO</p>

                <h4>SEARED SALMON SANDWICH<span>$22</span></h4>
                <p>TOASTED SOURDOUGH, OLIVE SALAD, TOMATO, LEAF LETTUCE, HOUSE FRIES</p>

                <h4>PESTO GRILLED CHICKEN<span>$19</span></h4>
                <p>CIABATTA ROLL, GRILLED CHICKEN BREAST, TOMATO, ARUGULA, BASIL PESTO, HOUSE FRIES</p>

                <h4>SHORT RIB GRILLED CHEESE & TOMATO BASIL SOUP<span>$20</span></h4>
                <p>WHOLE GRAIN SOURDOUGH, AGED CHEDDAR CHEESE, BEEF SHORT RIB, CUP OF ROASTED TOMATO-BASIL BISQUE</p>
            </div>

            <!-- SALADS -->
            <div class="menu-section">
                <h3 class="menu-header">SALADS</h3>
                <h3 class="menu-subheader">GRILLED CHICKEN<span>$8</span>, GRILLED SALMON<span>$12</span>, GRILLED SHRIMP<span>$10</span>, SEARED TUNA<span>$12</span></h3>

                <h4>HOUSE SALAD<span>$12</span></h4>
                <p>CRISP ICEBERG, ROMAINE, ARUGULA, RADICCHIO, SHAVED PARMESAN, TOMATO, ALMOND, CROUTONS, HONEY-RED WINE VINAIGRETTE</p>

                <h4>CAESAR SALAD<span>$12</span></h4>
                <p>FRESH ROMAINE LETTUCE, TOMATO, SHAVED PARMESAN, CROUTONS, HOMEMADE DRESSING</p>

                <h4>GRILLED ROMAINE WEDGE<span>$13</span></h4>
                <p>CRUMBLED GORGONZOLA, CHERRY TOMATO, CANDIED WALNUTS, CRISPY PORK PANCETTA, BALSAMIC VINAIGRETTE</p>

                <h4>ASIAN NOODLE SALAD<span>$14</span></h4>
                <p>PICKLED CUCUMBER, CARROT, RADISH, CHARRED CORN, EDAMAME, UDON SESAME NOODLES, CILANTRO, SWEET SOY DRIZZLE</p>
            </div>

            <!-- BIG PLATES -->
            <div class="menu-section">
                <h3 class="menu-header">BIG PLATES</h3>

                <h4>STEAK FRITES<span>$42</span></h4>
                <p>12 OZ. GRILLED NY STRIP STEAK, GARLIC-HERB BUTTER, HOUSE PARMESAN TRUFFLE FRIES</p>

                <h4>KOREAN BBQ SALMON<span>$29</span></h4>
                <p>PAN-SEARED SALMON, UDON-SESAME NOODLES, BROCCOLINI, PICKLED CUCUMBER, SWEET SOY REDUCTION</p>

                <h4>FISH FRANCESE<span>$31</span></h4>
                <p>LIGHTLY BATTERED WHITE FISH FILLET, JUMBO LUMP CRABMEAT, LINGUINE, LEMON, SPINACH, WHITE WINE SAUCE</p>

                <h4>JAMBALAYA<span>$24</span></h4>
                <p>SLICED CHICKEN, ANDOUILLE SAUSAGE, ARBORIO RICE, BELL PEPPERS, ONIONS, CAJUN TOMATO CREAM</p>

                <h4>SHRIMP & LOBSTER RISOTTO<span>$36</span></h4>
                <p>3 JUMBO SHRIMP, COLD WATER LOBSTER CHUNKS, ARBORIO RICE, EDAMAME, TOASTED CORN, TOMATO LOBSTER BROTH</p>

                <h4>CHICKEN PARMIGIANA<span>$25</span></h4>
                <p>CHICKEN BREAST CUTLET, MARINARA SAUCE, MOZZARELLA, LINGUINE</p>
            </div>
        </div>
    </div>
`;
