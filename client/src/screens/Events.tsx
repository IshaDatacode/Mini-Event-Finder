"use client"
import { useEffect } from "react"
import { getAllEvents } from "../operations/Operations"
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../operations/redux/store";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";

const Events = () => {
    const navigate = useNavigate()
    const events = useSelector((state: RootState) => state.EventSlice.Events)
    const { loading, error } = useSelector((state: RootState) => state.EventSlice)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        getAllEvents(dispatch);
    }, [])

    if (loading) return <CustomLoader />
    if (error)
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-600 font-semibold">Error: {error}</p>
            </div>
        );

    return (

        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
                🌍 Discover Events Near You
            </h2>

            {events.length === 0 ? (
                <div className="text-center">
                    <p className="text-center text-gray-600">No events available yet...</p>
                    <button
                        onClick={() => navigate("/create-event")}
                        className="mt-10 border border-white bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
                    >
                        ➕ Create Event
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event._id}
                            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
                            onClick={() => navigate(`/events/${event._id}`)}
                        >
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white font-semibold text-lg">
                                {event.title}
                            </div>
                            <div className="p-5">
                                <p className="text-gray-700 mb-2">
                                    📅 <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 mb-2">
                                    👥 <strong>Participants:</strong> {event.currentParticipants}/{event.maxParticipants}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {event.description.substring(0, 100)}...
                                </p>
                                <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Events