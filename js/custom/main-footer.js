class MainFooter extends HTMLElement {
	constructor() {
		super();
		this.userMapLink = agentInfo.mobileAddressLink;
	}

	connectedCallback() {
		this.innerHTML = this.getContent();
	}

	getContent() {
		//language=HTML
		return `
			<!-- ============================================ -->
			<!--                     FOOTER                   -->
			<!-- ============================================ -->
			<footer id="footer">
				<div id="footer-content">
					<a href="/index.html">
						<img id="footer-logo" loading="lazy" decoding="async" src="/assets/img/logo/station-train-inverted.svg" alt="logo">
					</a>
					<div id="footer-links">
						<!--				<span> | </span><a href="/contact.html">CONTACT</a>-->
						<!--				<span> | </span><a href="/jobs.html">CAREERS</a>-->
					</div>
					<div id="footer-contact">
						<p>
							<a href="${ this.userMapLink }">217 E. Main Street<br>Collegeville, PA 19426</a><br>
						</p>
						<p>
							<a href="tel:+14849736622">484.973.6622</a>
						</p>
					</div>
					<div id="badgeContainer">
						<div>
							<div id="circle_v12_wrap" style="width:calc(150px * 0.75);height:calc(134px * 0.75)">
								<div id="circle_v12" tabindex="0">
									<div id="circletype_v12_brand_name" class="autoFontSize">
										<a href='https://www.restaurantji.com/pa/collegeville/the-library-/' class="ahref_emprty_area" style="font-size:calc(12px * 0.75);">The Library</a>
									</div>
									<a href="https://www.restaurantji.com" id="rewards_link">Restaurantji</a></div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		`;
	}
}

customElements.define("main-footer", MainFooter)
