import { setIsLoading, setCarError, getCarsList } from './carsListSlice'
import { AppThunk } from '../store';

const rapidAPI = process.env.NEXT_PUBLIC_RAPID_API_ENDPOINT

export const fetchAllCars = (): AppThunk => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '918ab0f5abmshd7e7b590aab2234p188518jsn696cd22471bf',
                'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
            },
        }

        const response = await fetch(rapidAPI, options);
        const data = await response.json();
        dispatch(getCarsList(data));
        console.log(data)
    } catch (error) {
        dispatch(setCarError(error.message));
    } finally {
        dispatch(setIsLoading(false));
    }
}
