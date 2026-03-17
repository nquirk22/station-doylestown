const sidenav = document.getElementById('mobile-nav');
const menuBtn = document.getElementById('menu-btn');

function toggleNav() {
	sidenav.classList.toggle('open');
	menuBtn.classList.toggle('open');
	document.body.classList.toggle('fixed');
}

const agentInfo = function () {
	let unknown = '-';

	// screen
	let screenSize = '';
	if (screen.width) {
		const width = (screen.width) ? screen.width : '';
		const height = (screen.height) ? screen.height : '';
		screenSize += '' + width + " x " + height;
	}
	let nVer = navigator.appVersion;
	let nAgt = navigator.userAgent;
	let browser;
	let version = '' + parseFloat(nVer);
	let nameOffset;
	let verOffset;
	let ix;
	// Safari
	if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
		browser = 'Safari';
		version = nAgt.substring(verOffset + 7);
		if ((verOffset = nAgt.indexOf('Version')) !== -1) {
			version = nAgt.substring(verOffset + 8);
		}
	}
	// Chrome
	else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
		browser = 'Chrome';
		version = nAgt.substring(verOffset + 7);
	}
	// Firefox
	else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
		browser = 'Firefox';
		version = nAgt.substring(verOffset + 8);
	}
	// Legacy Edge
	else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
		browser = 'Microsoft Legacy Edge';
		version = nAgt.substring(verOffset + 5);
	}
	// Edge (Chromium)
	else if ((verOffset = nAgt.indexOf('Edg')) !== -1) {
		browser = 'Microsoft Edge';
		version = nAgt.substring(verOffset + 4);
	}
	// MSIE
	else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
		browser = 'Microsoft Internet Explorer';
		version = nAgt.substring(verOffset + 5);
	}
	// MSIE 11+
	else if (nAgt.indexOf('Trident/') !== -1) {
		browser = 'Microsoft Internet Explorer';
		version = nAgt.substring(nAgt.indexOf('rv:') + 3);
	}
	// Other browsers
	else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
		browser = nAgt.substring(nameOffset, verOffset);
		version = nAgt.substring(verOffset + 1);
		if (browser.toLowerCase() === browser.toUpperCase()) {
			browser = navigator.appName;
		}
	}
	// trim the version string
	if ((ix = version.indexOf(';')) !== -1) version = version.substring(0, ix);
	if ((ix = version.indexOf(' ')) !== -1) version = version.substring(0, ix);
	if ((ix = version.indexOf(')')) !== -1) version = version.substring(0, ix);

	let majorVersion = parseInt('' + version, 10);
	if (isNaN(majorVersion)) {
		version = '' + parseFloat(nVer);
		majorVersion = parseInt(nVer, 10);
	}

	// mobile version
	let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
	let os = unknown;
	let clientStrings = [
		{ s: 'Android', r: /Android/ },
		{ s: 'iOS', r: /(iPhone|iPad|iPod)/ },
		{ s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
		{ s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
		{ s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
		{ s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
		{ s: 'Windows Vista', r: /Windows NT 6.0/ },
		{ s: 'Windows Server 2003', r: /Windows NT 5.2/ },
		{ s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
		{ s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
		{ s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
		{ s: 'Windows 98', r: /(Windows 98|Win98)/ },
		{ s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
		{ s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
		{ s: 'Windows CE', r: /Windows CE/ },
		{ s: 'Windows 3.11', r: /Win16/ },
		{ s: 'Open BSD', r: /OpenBSD/ },
		{ s: 'Sun OS', r: /SunOS/ },
		{ s: 'Chrome OS', r: /CrOS/ },
		{ s: 'Linux', r: /(Linux|X11(?!.*CrOS))/ },
		{ s: 'Mac OS X', r: /Mac OS X/ },
		{ s: 'Mac OS', r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
		{ s: 'QNX', r: /QNX/ },
		{ s: 'UNIX', r: /UNIX/ },
		{ s: 'BeOS', r: /BeOS/ },
		{ s: 'OS/2', r: /OS\/2/ },
		{ s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
	];
	for (let id in clientStrings) {
		let cs = clientStrings[id];
		if (cs.r.test(nAgt)) {
			os = cs.s;
			break;
		}
	}
	let osVersion = unknown;
	if (/Windows/.test(os)) {
		osVersion = /Windows (.*)/.exec(os)[1];
		os = 'Windows';
	}
	switch (os) {
		case 'Mac OS':
		case 'Mac OS X':
		case 'Android':
			osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
			break;
		case 'iOS':
			osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
			if (osVersion != null) {
				osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
			}
			break;
	}

	const appleAddress = `https://maps.apple.com/?address=217%20E%20Main%20St,%20Collegeville,%20PA%20%2019426,%20United%20States&auid=5044690996677744910&ll=40.185850,-75.450847&lsp=9902&q=The%20Library%20Collegeville&t=m`;
	const googleAddress = 'https://www.google.com/maps/search/?api=1&query=40.18578447875828,-75.4507133572706&query_place_id=ChIJTX__QQCRxokRd_NGpD4Wg9w';
	return {
		screen: screenSize,
		browser: browser,
		browserVersion: version,
		browserMajorVersion: majorVersion,
		mobile: mobile,
		os: os,
		osVersion: osVersion,
		mobileAddressLink: os === 'iOS' ? appleAddress : googleAddress
	}
}();
