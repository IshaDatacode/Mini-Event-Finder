import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById } from "../operations/Operations";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../operations/redux/store";
import CustomLoader from "../components/CustomLoader";

const SingleEvent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { CurrentEvent, loading, error } = useSelector(
        (state: RootState) => state.EventSlice
    );

    useEffect(() => {
        getEventById(dispatch, id)
    }, [])

    if (loading) return <CustomLoader />
    if (error)
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-600 font-semibold">Error: {error}</p>
            </div>
        );

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 md:p-10">
                <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
                        <h1 className="text-3xl font-bold mb-2">{CurrentEvent?.title}</h1>
                        <p className="text-white/90">{CurrentEvent?.description}</p>
                    </div>

                    <div className="p-6 space-y-4">
                        <p className="text-gray-800">
                            📅 <strong>Date:</strong> {CurrentEvent?.date
                                ? new Date(CurrentEvent?.date).toLocaleDateString()
                                : "Not available"}
                        </p>
                        <p className="text-gray-800">
                            👥 <strong>Participants:</strong> {CurrentEvent?.currentParticipants}/{CurrentEvent?.maxParticipants}
                        </p>
                        <p className="text-gray-800">
                            📍 <strong>Location:</strong>{" "}
                            {CurrentEvent?.location?.coordinates
                                ? `${CurrentEvent?.location.coordinates[1]}, ${CurrentEvent?.location.coordinates[0]}`
                                : "Not available"}
                        </p>

                        <iframe
                            className="w-full h-64 rounded-lg mt-4"
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps?q=${CurrentEvent?.location?.coordinates[1]},${CurrentEvent?.location?.coordinates[0]}&z=15&output=embed`}
                        ></iframe>

                        <button
                            onClick={() => navigate("/events")}
                            className="mt-6 w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
                        >
                            ← Back to Events
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleEvent;