import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Mini Event Finder
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-10 text-white/90">
        Discover exciting local events happening around you — concerts, meetups, workshops, and more.
      </p>

      <div className="flex gap-4 flex-col md:flex-row">
        <button
          onClick={() => navigate("/events")}
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          🔍 Explore Events
        </button>

        <button
          onClick={() => navigate("/create-event")}
          className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
        >
          ➕ Create Event
        </button>
      </div>

      <div className="absolute bottom-10 text-white/80 text-sm">
        © 2025 Mini-Event-Finder — Find, Create & Connect 🌍
      </div>
    </div>
        </>
    )
}

export default Home;