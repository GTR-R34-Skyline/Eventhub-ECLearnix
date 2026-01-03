# Event Listing Page

A simple, clean **Event Listing web application** built using **React and Tailwind CSS**.  
This project demonstrates core frontend concepts such as filtering, sorting, conditional rendering, and dynamic detail views using dummy data.

The app is designed to simulate a **college / hackathon / conference event portal**.

---

## Features

### Event Listing
- Displays a list of events with:
  - Event Name
  - Event Date
  - Mode (Online / Offline)
- Events are rendered using dummy data.
- Clean card-based UI.

### Filtering
- Filter events by:
  - All
  - Online
  - Offline
- Filtering is handled entirely on the client side.

### Schedule Sorting
- A **Schedule button** sorts events by date in **ascending order** (earliest first).

### Event Details View
- Clicking an event card opens a detailed view.
- Shows:
  - Event name
  - Full date
  - Mode (Online / Offline)
  - Event description
  - Agenda / schedule (dummy timeline)

### Speakers Section
- Each event has its own set of **dummy speakers**.
- Speaker cards include:
  - Name
  - Designation
  - Short bio
- Speakers displayed correspond only to the selected event.

### FAQs
- Basic FAQ section using an accordion layout.
- Example questions:
  - Who can participate?
  - Is there a registration fee?
  - Will participants receive a certificate?
  - Is the event online or offline?

---

## Tech Stack

- React
- Tailwind CSS
- JavaScript (ES6+)

---

## Project Structure (High-Level)

- Event list component
- Event detail view (conditional rendering or modal)
- Speaker cards component
- FAQ accordion component
- Client-side state management for:
  - Filtering
  - Sorting
  - Navigation

---

## Constraints

- No backend
- No authentication
- No external APIs
- Dummy data only
- Client-side logic only

---

## Use Case

This project is ideal for:
- Learning frontend UI logic
- Demonstrating filtering and sorting
- College-level assignments
- Hackathon or event portal prototypes

---

## Future Enhancements

- Search by event name
- Pagination
- Calendar view
- Backend integration
- Authentication for organizers

---

## License

This project is for educational and demonstration purposes.
