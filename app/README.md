## Verification

- Production build completed successfully using npm run build.

# BarCast Research Milestone

## Project Overview

This is my individual React research prototype for BarCast,
a bar-discovery app.

My assigned research focuses on:
- Navigation between Live, Explore, Bar Details, My Plan,
  Profile, and Report the Vibe.
- A venue-manager form for editing bar information.

## Technologies Used

- React: builds the interface using reusable components.
- JavaScript and JSX: provide application logic and interface markup.
- CSS: styles the interface and supports smaller screens.
- Vite: provides the development server and production build.
- npm: installs dependencies and runs project scripts.
- localStorage: saves sample bar information in the browser.

## Implemented Features

- Six navigation buttons that switch the displayed content.
- Bar Details showing saved bar information.
- An Explore button that opens Bar Details.
- A manager form under Profile.
- Editable bar name, hours, cover fee, event, and DJ/music.
- Required fields and nonnegative cover-fee validation.
- Saved information that remains after refreshing.
- Responsive styling and visible keyboard focus indicators.

## How to Run

Install Node.js and npm, then open a terminal in the
repository folder.

Run:

    cd app
    npm install
    npm run dev

Open the local URL displayed in the terminal.

To create a production build:

    npm run build

To preview that build locally:

    npm run preview

## Package Manager

This project uses npm.

- package.json lists dependencies and available scripts.
- package-lock.json records dependency versions and should
  be committed to Git.
- npm install installs the project's dependencies.
- npm run dev starts the development server.
- npm run build creates the production build.
- node_modules contains installed packages and should
  not be committed.

## Technology Tradeoffs

### React

Advantages:
- Components can be reused as the app grows.
- State supports interactive forms and immediate screen updates.
- The web interface can run in a browser.

Limitations:
- React alone does not provide a database or manager authentication.
- Additional tools may be needed for URL-based navigation
  and shared server data.

### Vite

Advantages:
- Provides a straightforward development setup.
- Includes commands for development and production builds.

Limitations:
- Deployment to a hosting service is a separate step.
- The development server is not a production hosting service.

### Browser Storage

Advantages:
- Simple to use for a small prototype.
- Keeps saved information after a page refresh.

Limitations:
- Information is limited to this browser and site origin.
- Users on other devices cannot see these updates.
- Users can clear or modify the stored information.
- It cannot enforce manager permissions.

## Current Limitations

- The manager form edits one sample bar; adding multiple bars
  is not implemented.
- Navigation uses React state rather than separate page URLs.
- Live, My Plan, and Report the Vibe contain placeholders.
- There is no backend, shared database, or authentication.
- The manager form is a demonstration accessible to anyone
  using this prototype.

## Potential Team Project Improvements

- Add authentication and server-enforced manager permissions.
- Use a shared database for bar information.
- Support adding and editing multiple bars.
- Add URL-based routing.
- Implement crowd reports, wait times, and saved plans.