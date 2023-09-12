import React from "react";
import "./EventCard.css";

export default function EventCard() {
    let event_data = {
        img: "event picture",
        title: "Event Title",
        date: "Day, Month Date @ 2:00 pm",
        organization: "Arts Organization Name",
        format: "Event Format",
        services: "Services",
    }
    return (
        <div className="event-card">
            <div className="event-picture">{event_data.img}</div>
            <p className="event-title">{event_data.title}</p>
            <p className="event-date">{event_data.date}</p>
            <p className="event-organization">{event_data.organization}</p>
            <p className="event-format">{event_data.format}</p>
            <p className="event-services">{event_data.services}</p>
        </div>
    );
}