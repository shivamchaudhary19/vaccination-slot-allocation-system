# Vaccination Slot Allocation System — React Prototype

A college PBL prototype based on the supplied report and AI Unit 2/Unit 3 material.

## Product idea

There are two roles, separated by routing:
- **Find a Slot**: a normal user enters vaccine/coverage, date, preferred time and maximum distance. The system hides the search algorithms and simply returns matching vaccination-centre slots with a **Book Slot** action.
- **Register Centre**: a vaccination/healthcare centre publishes its centre details, vaccines/diseases covered, date, slot times and capacity.

No authentication is included yet, as requested. Registration is demonstration-only.

## Backend algorithm layer

1. Propositional-style rule checks: full -> unavailable; vaccine not offered -> invalid; wrong date/time/distance -> invalid.
2. CSP filter: centre/date/time/vaccine are variables; capacity, vaccine, date, time and distance are hard constraints.
3. BFS: baseline breadth-first feasibility search.
4. DFS: baseline depth-first feasibility search.
5. UCS: primary matching method; cost = centre distance in km, matching the PBL report.
6. A*: implemented with h(n)=0 because the prototype has no reliable geographic heuristic. With h=0, A* correctly reduces to UCS.
7. AO*: included as an experimental utility only; it is not forced into normal booking because the PBL report marks AO* as future/optional.

Normal users never pick an algorithm. The backend uses UCS after CSP filtering and also computes a private comparison trace for development.

## Report sample

For Vaccine A, 2026-09-15, morning, max 10 km:
- S1 removed: no capacity
- S2 candidate: 4 km, 11:00
- S3 candidate: 8 km, 09:00
- S4 removed: 15 km
- S5 removed: vaccine not offered
- S6 removed: wrong date
- UCS selects S2
- Booking reduces S2 remaining capacity from 3 to 2

## Run

Backend:
```powershell
cd backend
npm install
npm run dev
```

Frontend, second terminal:
```powershell
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

Requirements: Node.js 20+ and npm.

## Database

SQLite is used for a zero-configuration local prototype. The database is created automatically in `backend/data/vaccination.db`.

The successful booking modal always states: **Demo booking — no real vaccination slot has been booked.**
