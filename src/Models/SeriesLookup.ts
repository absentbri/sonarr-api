import { Image } from './Image'
import { Season } from './Season'
import { Rating } from './Rating'

export interface SeriesLookup {
  title: number
  sortTitle: string
  seasonCount: number
  status: string
  overview: string
  network: string
  airTime: string
  images: Image,
  remotePoster: string,
  seasons: Season,
  year: number
  profileId: number,
  seasonFolder: boolean,
  monitored: boolean,
  useSceneNumbering: boolean,
  runtime: number
  tvdbId: number
  tvRageId: number
  tvMazeId: number
  firstAired: Date
  seriesType: string
  cleanTitle: string
  imdbId: string
  titleSlug: string
  certification: string
  genres: Array<string>,
  tags: Array<string>,
  added: Date,
  ratings: Rating,
  qualityProfileId: number
}
