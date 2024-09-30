import {useAuthContext} from './useAuthContext'
import {useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = ()=> {
    const {dispatch: authDispatch} = useAuthContext()
    const {dispatch: workoutsDispatch} = useWorkoutsContext()

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout action for user
        authDispatch({type: 'LOGOUT'})
        // dispatch user's workouts to null if user logout
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout}
}