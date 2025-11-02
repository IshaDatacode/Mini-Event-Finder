import { useState, useEffect } from "react"
import { createEvent } from "../operations/Operations"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../operations/redux/store"
import CustomLoader from "../components/CustomLoader"

const CreateEvent = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error } = useSelector((state: RootState) => state.EventSlice)
    const [coords, setCoords] = useState({ lat: 0, lng: 0 })
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        date: "",
        maxParticipants: 0,
        currentParticipants: 0,
        location: {
            type: "Point",
            coordinates: [coords?.lat, coords?.lng]
        }
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setCoords({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            (err) => console.error(err)
        );
    }, []);

    useEffect(() => {
        setEventData((prev) => ({
            ...prev,
            location: {
                ...prev.location,
                coordinates: [coords.lng, coords.lat],
            },
        }))
    }, [coords])

    const onHandleChangeEventData = (fieldName: string, value: any) => {
        setEventData(pre => ({
            ...pre,
            [fieldName]: value
        }))
    }

    const handleSubmitEvent = async () => {
        const response = await createEvent(dispatch, eventData)
        if (response?.success) {
            alert("Event is created Successfully")
        }
        else {
            alert("Something went wrong")
        }
        setEventData(() => ({
            title: "",
            description: "",
            date: "",
            maxParticipants: 0,
            currentParticipants: 0,
            location: {
                type: "Point",
                coordinates: [coords?.lat, coords?.lng]
            }
        }))
    }

    if (loading) return <CustomLoader />
    if (error)
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-600 font-semibold">Error: {error}</p>
            </div>
        );

    return (
        <>
            <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
                <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                    Create a New Event
                </h1>

                <form
                    onSubmit={handleSubmitEvent}
                    className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8 flex flex-col gap-5"
                >
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Event Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter event title"
                            value={eventData.title}
                            onChange={(e) => onHandleChangeEventData("title", e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Description
                        </label>
                        <textarea
                            placeholder="Describe your event..."
                            value={eventData.description}
                            onChange={(e) =>
                                onHandleChangeEventData("description", e.target.value)
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg h-24 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            value={eventData.date}
                            onChange={(e) => onHandleChangeEventData("date", e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Max Participants
                            </label>
                            <input
                                type="number"
                                value={eventData.maxParticipants}
                                onChange={(e) =>
                                    onHandleChangeEventData("maxParticipants", e.target.value)
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Current Participants
                            </label>
                            <input
                                type="number"
                                value={eventData.currentParticipants}
                                onChange={(e) =>
                                    onHandleChangeEventData("currentParticipants", e.target.value)
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mt-2">
                        <p className="text-sm text-gray-700 font-medium">
                            📍 <span className="font-semibold">Your Location</span>
                        </p>
                        <p className="text-gray-600 text-sm">
                            Latitude: {coords.lat.toFixed(4)} | Longitude: {coords.lng.toFixed(4)}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Create Event 🚀
                    </button>
                </form>
            </div>
        </>
    )
}

export default CreateEvent