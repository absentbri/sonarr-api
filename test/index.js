require('dotenv').config()
const { SonarrClient } = require('../dist')
const { APIKEY: apiKey, ENDPOINT: host } = process.env

const sonarr = new SonarrClient({ apiKey, host })

async function run() {
	const test = await sonarr.profile.list()
	console.log(test)
	console.log(test.length)
	return test
}

run()