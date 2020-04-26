import 'mocha'

import { expect } from 'chai'

import { APIKEY, ENDPOINT } from './env'
import { SonarrClient } from '../src'

describe('when using SeriesLookupResource', () => {
  const client = new SonarrClient({ apiKey: APIKEY, host: ENDPOINT })

  it('should get list of searched shows', async () => {
    const shows = await client.serieslookup.list("the blacklist")
    expect(shows).to.not.be.empty
  })

})