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
							<a href="${ this.userMapLink }">194 W. Ashland Street<br>Doylestown, PA 18901</a><br>
						</p>
						<p>
							<a href="tel:+14849736622">215.348.1663</a>
						</p>
					</div>
					<div id="badgeContainer">
					</div>
				</div>
			</footer>
		`;
	}
}

customElements.define("main-footer", MainFooter)
