import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"


const Home = () => {
    // workouts has nothing first, setWorkouts will update it 
    const {workouts, dispatch} = useWorkoutsContext()

    // Fetching data from API
    useEffect(() =>{
        const fetchWorkouts = async () => {
            const response = await fetch('api/workouts')
            const json = await response.json()

            // Updating if fetched data correctly 
            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
                
            }  
        }
        fetchWorkouts()
    }, [])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>( 
                    // It will map each workout in all workouts 
                    <WorkoutDetails key={workout._id} workout={workout}/> 
                    // Pass each workout as prop to WorkoutDetails component
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home