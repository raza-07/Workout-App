import { WorkoutsContext } from "../context/WorkoutsContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context){
        throw new Error("useWorkoutsContexts must used inside of WorkoutsContextProvider")
    }
    return context
}