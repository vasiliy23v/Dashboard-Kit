import _ from "lodash"
import { User } from "../api/types"
export function paginate(items: Array<User>, pageNumber: number, pageSize: number) {
    const startIndex = (pageNumber - 1) * pageSize
    _.slice(items, startIndex)
    const users = _(items).slice(startIndex).take(pageSize).value()
    return users
}