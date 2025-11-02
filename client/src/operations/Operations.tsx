import AxiosInstance from "./AxiosInstance"
import { setCurrentEvent, setError, setEvents, setLoading } from "./redux/EventSlice"


export const getAllEvents = async (dispatch: any, filters = {}) => {
    try {
        dispatch(setLoading(true))
        const queryParams = new URLSearchParams(filters).toString();
        const response = await AxiosInstance.get(`/api/events?${queryParams}`)
        console.log(response)
        dispatch(setEvents(response.data.Events))
        return response?.data
    }
    catch (err: any) {
        console.error("Error fetching events:", err);
        dispatch(setError(err?.response?.data?.message || "Failed to fetch events"))
    }
    finally{
        dispatch(setLoading(false))
    }
}

export const createEvent = async (dispatch: any, EventData: any) => {
    try {
        dispatch(setLoading(true))
        const response = await AxiosInstance.post("/api/events", EventData)
        console.log(response)
        return response?.data
    }
    catch (err: any) {
        console.error("Error creating events:", err);
        dispatch(setError(err?.response?.data?.message || "Something went wrong"))
    }
    finally{
        dispatch(setLoading(false))
    }
}

export const getEventById = async ( dispatch: any, id : string | undefined) => {
    try {
        dispatch(setLoading(true))
        const response = await AxiosInstance.get(`/api/events/${id}`)
        console.log(response?.data)
        dispatch(setCurrentEvent(response?.data?.Event))
        return response?.data
    }
    catch (err: any) {
        console.error("Error fetching events:", err);
        dispatch(setError(err?.response?.data?.message || "Failed to fetch events"))
    }
    finally{
        dispatch(setLoading(false))
    }
}