import { expect } from 'chai'
import { SonarrClient } from '../src'

describe('when using SeriesLookupResource', function() {
  const {APIKEY: apiKey, ENDPOINT: host} = process.env
  const client = new SonarrClient({ apiKey, host })

  it('should get list of searched shows', async function() {
    this.timeout(5000);
    const shows = await client.serieslookup.list("the blacklist")
    expect(shows).to.not.be.empty
  })

})