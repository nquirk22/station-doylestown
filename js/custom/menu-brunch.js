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
            <!-- SHELLFISH & RAW BAR -->
            <div class="menu-section">
                <h3 class="menu-header">BRUNCH</h3>

                <h4>SHAKSHUKA<span>$18</span></h4>
                <p>(2) FRIED EGGS, MIXED PEPPER, CARAMELIZED ONION, GOAT CHEESE, FOCACCIA TOAST</p>

                <h4>BRUNCH SMASH BURGER<span>$19</span></h4>
                <p>4OZ. BEEF PATTY, SUNNY-SIDE UP EGG, TOMATO BACON JAM, LETTUCE, CHILLI CRISP, HOUSE FRIES</p>

                <h4>ANDOUILLE SAUSAGE HASH<span>$19</span></h4>
                <p>(2) SUNNY-SIDE UP EGGS, CRISPY POTATO, SOUR CREAM, PICKLED RED ONION, QUESO FRESCO CHEESE SAUCE, CHIPOTLE AIOLI, POBLANO CORN RELISH</p>

                <h4>BELGIAN WAFFLE<span>$17</span></h4>
                <p>(1) HOMEMADE WAFFLE, WHIPPED BUTTER, FRESH STRAWBERRY, MAPLE SYRUP, CHOICE OF BACON OR SAUSAGE</p>

                <h4>TRUFFLED EGG FLATBREAD<span>$20</span></h4>
                <p>(3) SUNNY-SIDE UP EGGS, MOZZARELLA, CRISPY BACON, HASHBROWN, SCALLION, BLACK TUFFLE CREAM</p>

                <h4>AVOCADO TOAST<span>$15</span></h4>
                <p>(2) SUNNY-SIDE UP EGGS,MULTIGRAIN SOURDOUGH, AVOCADO SPREAD, ROASTED TOMATO, PICKLED RED ONION, ARUGULA</p>

                <h4>LEMON RICOTTA PANCAKES<span>$17</span></h4>
                <p>(3) BUTTERMILK PANCAKES, LEMON RICOTTA CREAM, FRESH STRAWBERRY, MAPLE SYRUP, CHOICE OF BACON OR SAUSAGE</p>

                <h4>DUBAI CHOCOLATE FRENCH TOAST<span>$19</span></h4>
                <p>CRÈME BRÛLÉE BATTERED FRENCH TOAST, PISTACHIO CREAM, CHOCOLATE GLAZE, CHOICE OF BACON OR SAUSAGE</p>

                <h4>THE STATION SKILLET<span>$16</span></h4>
                <p>(2) EGGS ANY STYLE, HASHBROWN, MULTIGRAIN TOAST, BACON, ROASTED BELL PEPPER, CARAMELIZED ONION</p>

                <h4>SHORT RIB OMELETTE<span>$19</span></h4>
                <p>BRAISED SHORT RIB, ROASTED BELL PEPPER, MUSHROOM, SHREDDED WHITE AGED CHEDDAR, CHOICE OF BACON OR SAUSAGE</p>

            </div>
            <div class="menu-section">
                <h3 class="menu-header">SHELLFISH & RAW BAR</h3>
                <h4>TUNA TARTARE<span>$18</span></h4>
                <p></p>ARUGULA, SCALLION, SOY, SWEET CHILI PASTE, AVOCADO MOUSSE, CROSTINI</p>

                <h4>JUMBO SHRIMP COCKTAIL (5)<span>$17</span></h4>
                <p>WASABI COCKTAIL SAUCE, GRILLED LEMON</p>

                <h4>FRESH SHUCKED OYSTERS (6 PC./12 PC.)<span>$18/34</span></h4>
                <p>CHAMPAGNE MIGNONETTE, HORSERADISH, LEMON, TABASCO</p>

            </div>
            <div class="menu-section">
                <h3 class="menu-header">BRUNCH</h3>
            </div>

        </div>
        <!-- RIGHT COLUMN -->
        <div class="menu-column">
            <div class="menu-section">

                <h3 class="menu-header">KIDS' BRUNCH</h3>
                <h4>HAPPY STACK<span>$10</span></h4>
                <p>(2) FLUFFY PANCAKES, SERVED WITH BUTTER AND MAPLE SYRUP</p>

                <h4>EGGY TOAST<span>$10</span></h4>
                <p>(2) EGGS ANY STYLE, CHOICE OF TOAST, CHOICE OF BACON OR SAUSAGE</p>

            </div>
        </div>
    </div>
`
