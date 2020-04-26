const { SonarrClient } = require('../dist')

const sonarr = new SonarrClient({apiKey: "b8f7c51a9eeb432bacd7bc7e9be85a26", port: 8989})

async function run() {
	const test = await sonarr.serieslookup.list("the blacklist")
	console.log(test)
	console.log(test.length)
	return test
}

run()