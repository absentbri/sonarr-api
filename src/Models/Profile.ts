import { Base } from './Base'
import { Quality } from './Quality'
import { ProfileItems } from './ProfileItems'

export interface Profile extends Base {
    name: string
    cutoff: Quality
    items: ProfileItems
}
