# DevLife Simulator - Web Client

Next.js 14 web application for DevLife Simulator.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Data Fetching:** TanStack Query
- **Real-time:** Socket.io Client
- **Animations:** Framer Motion

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx      # Home page
│   ├── skills/       # Skills page
│   ├── company/      # Company page
│   ├── city/         # City map page
│   ├── work/         # Work page
│   ├── social/       # Social page
│   └── profile/      # Profile page
├── components/
│   ├── ui/           # Base UI components
│   ├── game/         # Game-specific components
│   └── layout/       # Layout components
├── lib/              # Utilities and API
├── hooks/            # Custom React hooks
├── stores/           # Zustand stores
└── types/            # TypeScript types
```

## Features

### Implemented
- ✅ Home page with main menu
- ✅ Skills page with skill tree
- ✅ Company creation
- ✅ Work mini-game (coding tasks)
- ✅ City map
- ✅ Social (connections)
- ✅ Player profile
- ✅ Bottom navigation
- ✅ Dark mode

### Coming Soon
- ⏳ Real-time multiplayer
- ⏳ Marketplace
- ⏳ Investments
- ⏳ Guild system
- ⏳ Tournaments

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
