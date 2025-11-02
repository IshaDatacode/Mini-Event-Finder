import Event from "../models/Events.model.js"

const createEvent = async (req, res) => {
    try {
        const { title, description, location, date, maxParticipants, currentParticipants } = req.body;
        const newlyCreatedEvent = await Event.create({
            title,
            description,
            location,
            date,
            maxParticipants,
            currentParticipants
        })

        if (!newlyCreatedEvent) {
            return res.status(400).json({
                success: false,
                message: "Failed to create Event"
            })
        }
        res.status(201).json(
            {
                success: true,
                message: "Event created Successfully",
                Event: newlyCreatedEvent
            }
        )

    }
    catch (err) {
        console.log("Error creating event: ", err.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const getAllEvents = async (req, res) => {
  try {
    const { search, date, maxParticipants } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (date) {
      query.date = { $gte: new Date(date) };
    }

    if (maxParticipants) {
      query.maxParticipants = { $lte: Number(maxParticipants) };
    }

    const events = await Event.find(query);

    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      Events: events,
    });
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getEventById = async (req, res) => {
    try {
        const id = req.params.id;
        const selectedEvent = await Event.findById(id)
        if (!selectedEvent) {
            res.status(404).json({
                success: false,
                message: "Event not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Event fetched successfully",
            Event: selectedEvent
        })

    }
    catch (err) {
        console.error("Error fetching event by ID:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export { createEvent, getAllEvents, getEventById }