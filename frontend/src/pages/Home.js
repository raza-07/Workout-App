import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import {useAuthContext} from "../hooks/useAuthContext"

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    // Fetching data from API
    useEffect(() =>{
        const fetchWorkouts = async () => {
            const response = await fetch('api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            // Updating if fetched data correctly 
            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
                
            }  
        }
        // Fetch workouts if user there is some user
        if (user){
            fetchWorkouts()
        }
        
    }, [dispatch, user])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>( 
                    <WorkoutDetails key={workout._id} workout={workout}/> 
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home