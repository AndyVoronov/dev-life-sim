# DevLife Simulator — UI/UX Design Document
## Версия: 1.0 | Создано: 2026-03-16

---

## 🎨 ДИЗАЙН-СИСТЕМА

### Цветовая палитра:

```
Primary Colors:
├── Primary: #6366F1 (Indigo) — основной акцент
├── Secondary: #10B981 (Emerald) — успех, рост
├── Warning: #F59E0B (Amber) — предупреждения
├── Danger: #EF4444 (Red) — ошибки, убытки
└── Info: #3B82F6 (Blue) — информация

Background Colors:
├── Light Mode:
│   ├── BG Primary: #FFFFFF
│   ├── BG Secondary: #F9FAFB
│   ├── BG Tertiary: #F3F4F6
│   └── Surface: #FFFFFF (cards)
│
└── Dark Mode:
    ├── BG Primary: #111827
    ├── BG Secondary: #1F2937
    ├── BG Tertiary: #374151
    └── Surface: #1F2937 (cards)

Text Colors:
├── Primary Text: #111827 (light) / #F9FAFB (dark)
├── Secondary Text: #6B7280
├── Disabled Text: #9CA3AF
└── Link Text: #6366F1
```

### Типографика:

```
Font Family:
├── Primary: Inter (UI)
├── Monospace: JetBrains Mono (code)
└── Display: Poppins (headings)

Font Sizes:
├── Display: 48px (hero)
├── H1: 32px (page title)
├── H2: 24px (section)
├── H3: 20px (card title)
├── Body: 16px (text)
├── Small: 14px (captions)
└── Tiny: 12px (labels)

Font Weights:
├── Regular: 400
├── Medium: 500
├── Semibold: 600
└── Bold: 700
```

### Spacing System:

```
Spacing Scale (8px base):
├── xs: 4px
├── sm: 8px
├── md: 16px
├── lg: 24px
├── xl: 32px
├── 2xl: 48px
└── 3xl: 64px

Layout Grid:
├── Mobile: 4 columns, 16px margins
├── Tablet: 8 columns, 24px margins
├── Desktop: 12 columns, 32px margins
└── Max width: 1440px
```

### Components:

```
Buttons:
├── Primary: Filled, indigo bg
├── Secondary: Outlined
├── Ghost: Transparent
├── Danger: Red filled
└── Sizes: sm, md, lg

Cards:
├── Elevation: 0-3 levels
├── Radius: 8px (sm), 12px (md), 16px (lg)
├── Padding: 16px (mobile), 24px (desktop)
└── Hover: subtle lift + shadow

Inputs:
├── Text: border, focus ring
├── Select: dropdown
├── Checkbox: custom styled
├── Radio: custom styled
└── Range: slider
```

---

## 📱 MAIN SCREENS

### 1. Main Menu (Hub)

```
┌─────────────────────────────────────────┐
│  [Avatar]  Player Name         [⚙️]     │
│  Level 42 | $1,234,567                   │
├─────────────────────────────────────────┤
│                                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ 🏢      │ │ 💼      │ │ 📊      │   │
│  │ Company │ │ Career  │ │ Market  │   │
│  │         │ │         │ │         │   │
│  │ $50K/mo │ │ Senior  │ │ #12     │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ 👥      │ │ 🎓      │ │ 🏠      │   │
│  │ Network │ │ Skills  │ │ Home    │   │
│  │         │ │         │ │         │   │
│  │ 247     │ │ 12/20   │ │ Upgrade │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 📰 NEWS                         │   │
│  │ • TechCorp acquired by GiantCo  │   │
│  │ • New AI regulation announced   │   │
│  └─────────────────────────────────┘   │
│                                          │
│  [🏠 City]  [💼 Work]  [📊 Stats]  [👤]  │
└─────────────────────────────────────────┘
```

**Features:**
- Quick stats (level, money)
- Main navigation cards
- News feed
- Bottom tab bar (mobile)

### 2. City Map Screen

```
┌─────────────────────────────────────────┐
│  [←] City Map              [🔍] [🗺️]   │
├─────────────────────────────────────────┤
│                                          │
│      ┌─────┐  ┌─────┐  ┌─────┐         │
│      │ 🏢  │  │ ☕  │  │ 🏪  │         │
│      │Office│  │Cafe │  │Shop │         │
│      └──┬──┘  └──┬──┘  └──┬──┘         │
│         │        │        │              │
│    ─────┴────────┴────────┴─────        │
│         │        │        │              │
│      ┌──┴──┐  ┌──┴──┐  ┌──┴──┐         │
│      │ 🏦  │  │ 🏫  │  │ 🏥  │         │
│      │Bank │  │Uni  │  │Hosp │         │
│      └─────┘  └─────┘  └─────┘         │
│                                          │
│  [👤] Your location                      │
│  [👥] 3 other players nearby            │
│                                          │
│  [🏠 Home] [💼 Office] [☕ Cafe]         │
└─────────────────────────────────────────┘
```

**Interactions:**
- Tap building → Enter building
- Pinch to zoom
- Drag to pan
- Player avatars visible
- Location markers

### 3. Work Screen (Coding)

```
┌─────────────────────────────────────────┐
│  [←] Project Alpha          [⏸️] [✓]   │
│  Progress: 67% ███████░░░                │
├─────────────────────────────────────────┤
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ CODE EDITOR                     │   │
│  │ ─────────────────────────────   │   │
│  │ function calculate() {          │   │
│  │   const data = fetchData();     │   │
│  │   return process(data);         │   │
│  │ }                               │   │
│  │                                 │   │
│  │ // TODO: Add validation         │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │ ▶️  │ │ 🔍  │ │ 💾  │ │ 🐛  │      │
│  │ Run │ │Find │ │Save │ │Debug│      │
│  └─────┘ └─────┘ └─────┘ └─────┘      │
│                                          │
│  Status: ⚡ Focused (+20% speed)        │
│  Energy: ████████░░ 80%                 │
│  Time remaining: 2h 34m                 │
└─────────────────────────────────────────┘
```

**Mini-game mechanics:**
- Code completion challenges
- Bug fixing puzzles
- Optimization tasks
- Review assignments

### 4. Company Dashboard

```
┌─────────────────────────────────────────┐
│  [←] TechStartup Inc.        [📊] [⚙️] │
│  Valuation: $12.5M | Employees: 47      │
├─────────────────────────────────────────┤
│                                          │
│  REVENUE                           MRR   │
│  $125,000 ━━━━━━━━━━░░░ +15%     $125K  │
│                                          │
│  ┌────────┐ ┌────────┐ ┌────────┐      │
│  │ Users  │ │ Churn  │ │ NPS    │      │
│  │ 12,450 │ │ 2.3%   │ │ +67    │      │
│  │ ↑ +8%  │ │ ↓ -0.5 │ │ ↑ +5   │      │
│  └────────┘ └────────┘ └────────┘      │
│                                          │
│  TEAM                                    │
│  ┌─────────────────────────────────┐   │
│  │ 👤 Alex (CTO) - Online          │   │
│  │ 👤 Maria (Designer) - Working   │   │
│  │ 👤 James (Backend) - Meeting    │   │
│  │ + 44 more                [View] │   │
│  └─────────────────────────────────┘   │
│                                          │
│  [💼 Hire] [📊 Analytics] [💰 Finance]  │
└─────────────────────────────────────────┘
```

### 5. Marketplace

```
┌─────────────────────────────────────────┐
│  [←] Job Market             [🔍] [➕]  │
├─────────────────────────────────────────┤
│  [All] [Remote] [Full-time] [Contract] │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 🏢 TechGiant Inc.               │   │
│  │ Senior Frontend Developer       │   │
│  │ 💰 $8,000/mo | 📍 Remote        │   │
│  │ Skills: React, TypeScript       │   │
│  │ Posted: 2h ago | 12 applicants  │   │
│  │                    [Apply] [💬] │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 🏢 StartupXYZ                   │   │
│  │ Full-Stack Developer            │   │
│  │ 💰 $5,000/mo | 📍 Hybrid        │   │
│  │ Skills: Node.js, React, SQL     │   │
│  │ Posted: 5h ago | 8 applicants   │   │
│  │                    [Apply] [💬] │   │
│  └─────────────────────────────────┘   │
│                                          │
└─────────────────────────────────────────┘
```

---

## 💬 DIALOGUE SYSTEM

### Conversation UI:

```
┌─────────────────────────────────────────┐
│  [←] Chat with Alex (CTO)               │
├─────────────────────────────────────────┤
│                                          │
│  Alex: Hey! Got a minute?               │
│        10:30 AM                          │
│                                          │
│  You: Sure, what's up?                  │
│       10:31 AM                           │
│                                          │
│  Alex: The deployment failed again...   │
│        Can you check the logs?          │
│        10:32 AM                          │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ Choose your response:           │   │
│  │                                 │   │
│  │ [😅] "On it! Checking now"      │   │
│  │ [🤔] "What's the error?"        │   │
│  │ [😤] "Again?! This is bad"      │   │
│  │ [💡] "Let's pair debug"         │   │
│  └─────────────────────────────────┘   │
│                                          │
│  [⌨️ Type...]                  [📎] [😊]│
└─────────────────────────────────────────┘
```

**Response Options:**
- Emotion-based choices
- Each choice affects relationship
- Context-aware suggestions
- Quick replies

---

## 📊 SKILL TREE UI

### Skills Overview:

```
┌─────────────────────────────────────────┐
│  [←] Skills                    [📊]     │
├─────────────────────────────────────────┤
│                                          │
│  PROGRAMMING                      78/100 │
│  ╠═ Frontend ────────────────── 82      │
│  ║  ├─ HTML/CSS ────────────── 95       │
│  ║  ├─ JavaScript ──────────── 85       │
│  ║  └─ React ───────────────── 75       │
│  ║                                       │
│  ╠═ Backend ─────────────────── 71      │
│  ║  ├─ Node.js ─────────────── 80       │
│  ║  ├─ Python ──────────────── 65       │
│  ║  └─ Databases ───────────── 70       │
│  ║                                       │
│  ╚═ DevOps ─────────────────── 45       │
│     ├─ Docker ──────────────── 55       │
│     └─ CI/CD ───────────────── 40       │
│                                          │
│  [📚 Learn] [🎯 Practice] [📖 Courses]  │
└─────────────────────────────────────────┘
```

### Learning UI:

```
┌─────────────────────────────────────────┐
│  [←] Learn React                 [❌]   │
├─────────────────────────────────────────┤
│                                          │
│  Module 3: State Management             │
│  Progress: 45% █████░░░░░               │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 📖 LESSON                       │   │
│  │                                 │   │
│  │ useState is a Hook that lets   │   │
│  │ you add state to functional    │   │
│  │ components.                     │   │
│  │                                 │   │
│  │ Example:                        │   │
│  │ const [count, setCount] =       │   │
│  │   useState(0);                  │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ⏱️ Time: 15 min | 💡 XP: +50           │
│                                          │
│  [← Previous]          [Next →]         │
└─────────────────────────────────────────┘
```

---

## 🏢 COMPANY CREATION FLOW

### Step 1: Choose Type:

```
┌─────────────────────────────────────────┐
│  [←] Create Company            Step 1/5 │
├─────────────────────────────────────────┤
│                                          │
│  What type of company?                  │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 💻 SOFTWARE                     │   │
│  │ SaaS, Apps, Tools               │   │
│  │ Examples: Slack, Notion         │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 🛒 E-COMMERCE                   │   │
│  │ Marketplace, Retail             │   │
│  │ Examples: Amazon, Shopify       │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 💳 FINTECH                      │   │
│  │ Payments, Banking               │   │
│  │ Examples: Stripe, Revolut       │   │
│  └─────────────────────────────────┘   │
│                                          │
│  [More options...]                       │
└─────────────────────────────────────────┘
```

### Step 2: Name & Brand:

```
┌─────────────────────────────────────────┐
│  [←] Create Company            Step 2/5 │
├─────────────────────────────────────────┤
│                                          │
│  Company Name                            │
│  ┌─────────────────────────────────┐   │
│  │ TechStartup Inc.                │   │
│  └─────────────────────────────────┘   │
│  ✓ Available!                           │
│                                          │
│  Tagline                                 │
│  ┌─────────────────────────────────┐   │
│  │ Building the future of work     │   │
│  └─────────────────────────────────┘   │
│                                          │
│  Logo                                    │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │ 🚀  │ │ ⚡  │ │ 💡  │ │ 🔷  │      │
│  └─────┘ └─────┘ └─────┘ └─────┘      │
│  [Upload custom]                         │
│                                          │
│                    [Back]    [Next →]    │
└─────────────────────────────────────────┘
```

---

## 💰 FINANCE SCREEN

### Overview:

```
┌─────────────────────────────────────────┐
│  [←] Finances                  [📊]     │
├─────────────────────────────────────────┤
│                                          │
│  TOTAL BALANCE                   $1.2M  │
│  +$45,230 (+3.8%) this month            │
│                                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ Income  │ │ Expenses│ │ Profit  │   │
│  │ $125K   │ │ $80K    │ │ $45K    │   │
│  │ ↑ 12%   │ │ ↑ 5%    │ │ ↑ 25%   │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                          │
│  EXPENSE BREAKDOWN                       │
│  ├─ Salaries: $50K (62%)                │
│  ├─ Marketing: $15K (19%)               │
│  ├─ Tools: $8K (10%)                    │
│  └─ Other: $7K (9%)                     │
│                                          │
│  [📈 Investments] [🏦 Bank] [💳 Cards]  │
└─────────────────────────────────────────┘
```

---

## 👥 NETWORK SCREEN

### Connections:

```
┌─────────────────────────────────────────┐
│  [←] Network                   [🔍]     │
├─────────────────────────────────────────┤
│                                          │
│  Connections: 247 | Following: 89        │
│                                          │
│  RECENT                                  │
│  ┌─────────────────────────────────┐   │
│  │ 👤 Alex Chen                    │   │
│  │ CTO at TechCorp                 │   │
│  │ 🤝 Connected 2 days ago         │   │
│  │             [Message] [View]    │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 👤 Maria Garcia                 │   │
│  │ Founder at StartupXYZ           │   │
│  │ 🤝 Connected 1 week ago         │   │
│  │             [Message] [View]    │   │
│  └─────────────────────────────────┘   │
│                                          │
│  [👥 All] [⭐ Favorites] [💼 Partners]  │
└─────────────────────────────────────────┘
```

---

## 🎯 QUEST SCREEN

### Active Quests:

```
┌─────────────────────────────────────────┐
│  [←] Quests                    [✓]      │
├─────────────────────────────────────────┤
│                                          │
│  ACTIVE (3)                              │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 🎯 Complete Feature X           │   │
│  │ ████████░░ 80%                  │   │
│  │ Reward: +500 XP, $1,000         │   │
│  │ Time: 2 days remaining          │   │
│  └─────────────────────────────────┘   │
│                                          │
│  ┌─────────────────────────────────┐   │
│  │ 💼 Hire 5 employees             │   │
│  │ ███░░░░░░░ 30%                  │   │
│  │ Reward: +1000 XP, Rare Item     │   │
│  │ Time: 1 week remaining          │   │
│  └─────────────────────────────────┘   │
│                                          │
│  [📜 Available] [✅ Completed] [🏆 Rare] │
└─────────────────────────────────────────┘
```

---

## ⚙️ SETTINGS SCREEN

### Settings Menu:

```
┌─────────────────────────────────────────┐
│  [←] Settings                            │
├─────────────────────────────────────────┤
│                                          │
│  ACCOUNT                                 │
│  ├─ Profile                       [→]   │
│  ├─ Linked Accounts              [→]   │
│  └─ Privacy                       [→]   │
│                                          │
│  GAMEPLAY                                │
│  ├─ Notifications                 [→]   │
│  ├─ Sound                         [→]   │
│  ├─ Language                      [→]   │
│  └─ Difficulty                    [→]   │
│                                          │
│  VISUAL                                  │
│  ├─ Theme                         [→]   │
│  ├─ Dark Mode                 [🔘]     │
│  └─ Animations               [🔘]      │
│                                          │
│  SUPPORT                                 │
│  ├─ Help Center                   [→]   │
│  ├─ Report Bug                    [→]   │
│  └─ Contact Us                    [→]   │
│                                          │
│  [🚪 Log Out]                           │
└─────────────────────────────────────────┘
```

---

## 📱 PLATFORM-SPECIFIC UI

### Telegram Mini App:

```
Compact Mode:
├── Bottom sheet navigation
├── Telegram-style buttons
├── Quick actions
├── Inline keyboards
└── Compact cards (200px max)

Restrictions:
├── No custom fonts
├── Limited animations
├── 5MB initial load
└── Telegram design language
```

### Mobile App:

```
Touch Optimizations:
├── 44px minimum tap targets
├── Swipe gestures
├── Pull to refresh
├── Haptic feedback
└── Bottom navigation

Safe Areas:
├── iPhone notch
├── Android gesture bar
└── Landscape orientation
```

### Desktop:

```
Keyboard Shortcuts:
├── Ctrl+N: New project
├── Ctrl+S: Save
├── Ctrl+Tab: Switch screen
├── Esc: Close modal
└── F11: Fullscreen

Mouse Interactions:
├── Right-click context menus
├── Drag and drop
├── Scroll zoom
└── Hover tooltips
```

---

## 🎭 ANIMATIONS

### Transitions:

```
Screen Transitions:
├── Fade: 200ms ease
├── Slide: 300ms ease-out
├── Scale: 250ms ease
└── Shared elements: 400ms

Micro-interactions:
├── Button press: 100ms scale(0.95)
├── Card hover: 200ms lift
├── Loading: pulse animation
└── Success: confetti burst
```

### Loading States:

```
Skeleton Screens:
├── Content placeholders
├── Shimmer effect
├── Progressive loading
└── Optimistic UI

Error States:
├── Retry button
├── Offline indicator
├── Error illustrations
└── Helpful messages
```

---

## ♿ ACCESSIBILITY

### WCAG 2.1 AA Compliance:

```
Visual:
├── Color contrast 4.5:1 minimum
├── Focus indicators
├── Text scaling support
└── High contrast mode

Motor:
├── Keyboard navigation
├── Large tap targets
├── Voice control support
└── Reduced motion option

Cognitive:
├── Clear language
├── Consistent navigation
├── Error prevention
└── Helpful error messages

Screen Readers:
├── ARIA labels
├── Semantic HTML
├── Alt text for images
└── Live regions
```

---

## 🌐 RESPONSIVE BREAKPOINTS

```
Breakpoints:
├── Mobile: 0-767px
├── Tablet: 768-1023px
├── Desktop: 1024-1439px
└── Large Desktop: 1440px+

Adaptations:
├── Mobile: Single column, bottom nav
├── Tablet: Two columns, side nav
├── Desktop: Full layout, sidebar
└── Large: Centered, max-width 1440px
```

---

## 📝 WIREFRAME LIBRARY

### Common Patterns:

**1. List Item:**
```
┌─────────────────────────────────────────┐
│ [Avatar] Title                          │
│          Subtitle           [Action]    │
└─────────────────────────────────────────┘
```

**2. Card:**
```
┌─────────────────────────────────────────┐
│ [Image/Icon]                            │
│ Title                                   │
│ Description                             │
│ [Action Button]                         │
└─────────────────────────────────────────┘
```

**3. Form Field:**
```
┌─────────────────────────────────────────┐
│ Label                                   │
│ ┌─────────────────────────────────────┐ │
│ │ Input                               │ │
│ └─────────────────────────────────────┘ │
│ Helper text / Error                    │
└─────────────────────────────────────────┘
```

**4. Modal:**
```
┌─────────────────────────────────────────┐
│ Title                           [×]     │
├─────────────────────────────────────────┤
│ Content                                 │
│                                          │
│ [Cancel]                    [Confirm]   │
└─────────────────────────────────────────┘
```

---

## 📊 INFORMATION ARCHITECTURE

### Navigation Hierarchy:

```
Home
├── Dashboard
│   ├── Company Overview
│   ├── Personal Stats
│   └── News Feed
│
├── City
│   ├── Map View
│   ├── Buildings
│   │   ├── Office
│   │   ├── Cafe
│   │   ├── Bank
│   │   └── ...
│   └── Players
│
├── Work
│   ├── Current Project
│   ├── Tasks
│   ├── Code Editor
│   └── Team
│
├── Market
│   ├── Jobs
│   ├── Investments
│   ├── Trading
│   └── Companies
│
├── Network
│   ├── Connections
│   ├── Messages
│   ├── Groups
│   └── Events
│
├── Skills
│   ├── Overview
│   ├── Learning
│   ├── Practice
│   └── Certifications
│
└── Settings
    ├── Account
    ├── Preferences
    └── Support
```

---

## 🎨 ICON LIBRARY

### Custom Icons Needed:

```
Actions:
├── work (💼)
├── code (💻)
├── meeting (👥)
├── hire (➕)
└── invest (💰)

Buildings:
├── office (🏢)
├── cafe (☕)
├── bank (🏦)
├── university (🏫)
└── hospital (🏥)

Skills:
├── frontend (🎨)
├── backend (⚙️)
├── devops (🚀)
├── mobile (📱)
└── ai (🤖)

Status:
├── online (🟢)
├── busy (🔴)
├── away (🟡)
└── offline (⚫)
```

---

## 📝 ИСТОРИЯ ИЗМЕНЕНИЙ

### v1.0 (2026-03-16) — Initial UI/UX Document

**Created:**
- 🎨 Design System (colors, typography, spacing)
- 📱 Main Screens (8 core screens)
- 💬 Dialogue System
- 📊 Skill Tree UI
- 🏢 Company Creation Flow
- 💰 Finance Screen
- 👥 Network Screen
- 🎯 Quest Screen
- ⚙️ Settings Screen
- 📱 Platform-specific adaptations
- 🎭 Animations
- ♿ Accessibility
- 📐 Responsive design
- 🗂️ Information Architecture
- 🎨 Icon Library

---

*UI/UX Design Document v1.0*
*Ready for implementation*
