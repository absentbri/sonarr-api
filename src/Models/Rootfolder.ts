import { Base } from './Base'
import { RootfolderUnmapped } from './RootfolderUnmapped'

export interface Rootfolder extends Base {
  path: string
  freeSpace: number
  totalSpace: number
  unmappedFolders: RootfolderUnmapped
}