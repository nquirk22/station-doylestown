class AppNav extends HTMLElement {

	constructor() {
		super();
	}

	sidenav;
	menuBtn;

	connectedCallback() {
		this.userMapLink = agentInfo.mobileAddressLink;
		this.innerHTML = this.getAppNavContent(this.attributes.showHome.value);
		this.sidenav = this.querySelector('#mobile-nav');
		this.menuBtn = this.querySelector('#menu-btn');

		this.menuBtn.addEventListener('click', () => this.toggleNav());
	}

	toggleNav() {
		this.sidenav.classList.toggle('open');
		this.menuBtn.classList.toggle('open');
		document.body.classList.toggle('fixed');
	}

	getAppNavContent(showHomeBtn) {
		//language=HTML
		return `
			<!-- ============================================ -->
			<!--                   NAVIGATION                 -->
			<!-- ============================================ -->
			<!-- Nav Strip -->
			<nav id="top-nav" aria-label="main-navigation-desktop">
				<div id="top-nav-container">
					${ showHomeBtn === 'true' ? '<a href="/index.html"><img id="top-logo" src="/assets/img/books.png" alt="the library logo"></a>' : '' }
					<div class="top-nav-links">
						<a href="/index.html#menus">MENUS</a>
						<a href="https://www.yelp.com/reservations/the-library-collegeville-collegeville-3?from_reserve_now=1">RESERVE</a>
						<a href="https://thelibrarycollegeville.webgiftcardsales.com">GIFT CARDS</a>
					</div>
				</div>
				<!-- Hamburger Button -->
				<div aria-label="menu" id="menu-btn"></div>
			</nav>

			<nav id="mobile-nav" aria-label="main-navigation-mobile">
				<a href="/index.html">
					<img id="mobile-nav-logo" aria-hidden="true" decoding="async" src="/assets/img/logo/logo-cville-blk.svg" alt="the library logo">
				</a>
				<ul id="mobile-nav-links">
					<li class="mobile-nav-li"><a href="/index.html#menus">MENUS</a></li>
					<li class="mobile-nav-li"><a href="https://www.yelp.com/biz/the-library-collegeville-collegeville-3">RESERVE</a></h2>
					<li class="mobile-nav-li"><a href="https://thelibrarycollegeville.webgiftcardsales.com">GIFT CARDS</a></h2>
						<!--<li class="mobile-nav-li"><a href="/contact.html">Contact</a></li>-->
						<!--<li class="mobile-nav-li"><a href="/events.html">Events</a></li>-->
						<!--<li class="mobile-nav-li"><a href="/location.html">Location</a></li>-->
				</ul>
				<div id="mobile-nav-contact">
					<h3>NOW OPEN</h3>
					<p><a href="tel:+14849736622">484.973.6622</a></p>
					<p><a href="${ this.userMapLink }">217 E. Main Street Collegeville, PA 19426</a></p>
				</div>
			</nav>`;
	}
}

customElements.define("app-nav", AppNav)
