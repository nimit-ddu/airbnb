# AI Prompt Sequence & Development Log

**Project**: Airbnb Listing Clone ("Romantic Jacuzzi 1BHK | Candolim - Goa")  
**Assignment**: Playpower Labs Frontend Engineering Take-Home Assessment  
**Tech Stack**: React 18, Vite, JavaScript, Tailwind CSS  
**Target Platform**: Desktop Browser Application  

---

## Overview

This document records the exact sequence of prompts and AI-assisted engineering steps used during the design, implementation, component structuring, state management, accessibility compliance, and verification of the Airbnb Listing Clone application.

---

## Chronological Prompt Sequence

### 1. Requirements Analysis & Technical Specification
- **Prompt**:
  > "Analyze the Playpower Labs Airbnb-Clone assignment specifications and reference desktop web app (https://airbnb-clone-umber-two.vercel.app). Define the application architecture, component structure, state management flow, and gallery modal hierarchy for 'Romantic Jacuzzi 1BHK | Candolim - Goa'."
- **AI Action & Deliverable**:
  - Analyzed visual design, header navigation, photo preview grid, sticky booking card, amenities section, reviews breakdown, and photo gallery overlays.
  - Formulated state breakdown for photo view states (`grid` -> `photo_tour` -> `lightbox`), calendar dates, guest count, and review modal.

---

### 2. Project Setup & Data Modeling
- **Prompt**:
  > "Set up the React + Vite codebase with Tailwind CSS configuration. Create a comprehensive, realistic mock listing dataset in `src/data/listingData.js` including categorized photos (Bedroom, Jacuzzi, Bathroom, Exterior, Kitchen), host metadata, ratings breakdown, amenities list with icons, and pricing rules."
- **AI Action & Deliverable**:
  - Initialized React project structure with Vite.
  - Created `listingData.js` containing 15+ high-res images with alt text, room categories, review metrics (4.92 rating across 58 reviews), host status (Superhost, 5 years hosting), and booking rates.

---

### 3. Header & Listing Title Components
- **Prompt**:
  > "Implement the desktop header navigation bar with search bar and user menu, plus the Listing Title component (`src/components/listing/ListingHeader.jsx`) featuring title, rating summary, superhost badge, location link, and Share/Save action buttons."
- **AI Action & Deliverable**:
  - Created persistent top navbar and listing title section adhering strictly to Airbnb visual design and typography.
  - Implemented share/save toggle buttons with state persistence.

---

### 4. Photo Preview Grid & Gallery Overlays
- **Prompt**:
  > "Implement the 5-photo grid preview layout (`src/components/gallery/PhotoGrid.jsx`) with 1 main hero photo on the left and 4 smaller grid photos on the right, including a 'Show all photos' button trigger. Create the full-screen Photo Tour overlay (`src/components/gallery/PhotoTour.jsx`) with room category filtering and the single-photo Lightbox modal (`src/components/gallery/Lightbox.jsx`). Ensure full keyboard navigation (Escape key to close, Left/Right Arrow keys to switch photos) and ARIA attributes."
- **AI Action & Deliverable**:
  - Built `PhotoGrid` component with smooth hover scale effects and rounded corner borders.
  - Created `PhotoTour` overlay displaying all listing photos organized by category (Living Area, Bedroom, Jacuzzi, Bathroom, Outdoor).
  - Built `Lightbox` view with image counter, prev/next controls, and full keyboard listener binding (`keydown` for `Escape`, `ArrowLeft`, `ArrowRight`).

---

### 5. Listing Details & Sticky Booking Card
- **Prompt**:
  > "Build the main content section (`src/components/listing/MainContent.jsx`), including host summary banner, highlight features (Superhost, Jacuzzi, Dedicated Workspace), description text with expansion toggle, bed arrangement cards, and amenities preview grid (`src/components/listing/Amenities.jsx`). Implement the sticky booking widget (`src/components/booking/BookingCard.jsx`) with dynamic price calculations, date selector, guest count dropdown, and reserve call-to-action."
- **AI Action & Deliverable**:
  - Implemented responsive main grid: left 65% for property details, right 35% for sticky booking card.
  - Configured sticky position behavior (`sticky top-28`) for the reservation box.
  - Added dynamic subtotal calculation (nights * price per night + cleaning fee + service fee).

---

### 6. Calendar, Reviews & Location Map Components
- **Prompt**:
  > "Implement the interactive date picker section (`src/components/booking/CalendarSection.jsx`), detailed reviews section (`src/components/reviews/ReviewsSection.jsx`) with rating category progress bars (Cleanliness, Accuracy, Communication, Location, Value) and search/filter input, and the location section (`src/components/location/LocationSection.jsx`) with neighborhood details."
- **AI Action & Deliverable**:
  - Created dual-month calendar view with check-in / check-out selection feedback.
  - Built 5-star category rating bars and review list with reviewer avatars and dates.
  - Implemented neighborhood summary and location map placeholder.

---

### 7. Accessibility, QA & Build Verification
- **Prompt**:
  > "Perform an accessibility audit across all components: check color contrast, focus rings (`focus-visible`), ARIA dialog roles (`role='dialog'`, `aria-modal='true'`), keyboard tab order, and screen reader labels. Run `npm run build` to verify a clean production build with zero errors."
- **AI Action & Deliverable**:
  - Audited modal overlays and added focus management and `aria-label` attributes to image buttons.
  - Verified compilation via `npm run build` with clean build bundle generation.

---

## Summary of AI Prompts Mapped to Created Artifacts

| Phase | Target Component / File | Primary Prompt Objective |
| :--- | :--- | :--- |
| **Phase 1** | `docs/ARCHITECTURE.md` | Architecture plan & gallery state machine design |
| **Phase 2** | `src/data/listingData.js` | Realistic listing dataset creation |
| **Phase 3** | `src/components/listing/ListingHeader.jsx` | Header bar, title, rating & save/share actions |
| **Phase 4** | `src/components/gallery/PhotoGrid.jsx`<br>`src/components/gallery/PhotoTour.jsx`<br>`src/components/gallery/Lightbox.jsx` | 5-photo grid, full-screen photo tour, keyboard-navigable Lightbox |
| **Phase 5** | `src/components/booking/BookingCard.jsx`<br>`src/components/listing/Amenities.jsx` | Sticky booking box & amenities layout |
| **Phase 6** | `src/components/reviews/ReviewsSection.jsx`<br>`src/components/booking/CalendarSection.jsx` | Ratings breakdown, review filters, interactive calendar |
| **Phase 7** | `dist/`, `docs/AI_PROMPTS.md` | Accessibility compliance, production build verification |

---

*Document prepared as Part 2 of the Playpower Labs assessment deliverables.*
