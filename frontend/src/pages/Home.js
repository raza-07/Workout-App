import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {
    // workouts has nothing first, setWorkouts will update it 
    const [workouts, setWorkouts] = useState()

    // Fetching data from API
    useEffect(() =>{
        const fetchWorkouts = async () => {
            const response = await fetch('api/workouts')
            const json = await response.json()

            // Updating if fetched data correctly 
            if (response.ok) {
                setWorkouts(json)
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
        </div>
    )
}

export default Home