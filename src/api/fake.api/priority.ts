import { Priority } from "../types"

export const priority: Priority = {
    high: { name: "High", color: "#F12B2C" },
    normal: { name: "Low", color: "#29CC97" },
    low: { name: "Normal", color: "#FEC400" },
}
export const fetchAllPriority = () => {
    return priority
}