var myAuthenticator = require.resolve('../auth/formAuthenticator');
const path = require("path");
exports.config = {
	profile: 'integration',
	baseUrl: 'https://hbr-715.wdf.sap.corp/ui?sap-client=715&sap-language=EN#InspectionMethod-display',
	auth: {
		'sapcloud-form': {
			name: myAuthenticator,
			user: '${params.user}',
			pass: '${params.pass}',
			userFieldSelector: '#USERNAME_FIELD-inner',
			passFieldSelector: '#PASSWORD_FIELD-inner',
			logonButtonSelector: '#LOGIN_LINK'
		}
	},
	timeouts: {
		getPageTimeout: '300000',
		allScriptsTimeout: '300000',
		defaultTimeoutInterval: '900000'
	},
	browserCapabilities: {
		/* maximize browser on all desktops to ensure consistent browser size */
		'chrome,chromium,firefox,ie,edge,safari': {
			'windows,mac,linux': {
				'*': {
					acceptInsecureCerts: true,
					remoteWebDriverOptions: {
						maximized: false,
						browserSize: {
							width: 1920,
							height: 1080
						}
					}
				}
			}
		},
		/* disable informabrs on chrome, use headless chrome*/
		'chrome,chromium': {
			'*': {
				'*': {
					chromeOptions: {
						'args': [
							"--headless",
							"--disable-gpu",
							"--window-size=1400,900",
							"--disable-infobars",
							"--no-sandbox",
							"--no-default-browser-check",
							"--ignore-certificate-errors",
							"--disable-default-apps",
							"--no-first-run",
							"--disable-dev-shm-usage"
						]
					}
				}
			}
		}
	},
	browsers: [{
		browserName: 'chrome',
		platformName: 'linux'
	}],
	specs: {
		mainSuite: ['./specs/test.spec.js'],
	}
}