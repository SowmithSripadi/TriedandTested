# TriedAndTested

TriedAndTested is a blogging platform where users can share issues they've faced and solutions that worked for them. It integrates AI-generated visuals to enhance blog content and features a credibility score system to establish user trust.

## Features

- 📝 **User Blogs**: Write, edit, and share personal experiences and solutions.
- 🎨 **AI-Generated Images**: Auto-generate blog-related images for better visualization.
- 📊 **Credibility Score**: Users earn credibility based on their contributions and social connections.
- 🔍 **Search & Filter**: Easily find relevant solutions with an advanced search system.
- 🔒 **Secure Authentication**: Login and sign-up via Clerk authentication.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux
- **Authentication**: Clerk
- **Real-Time Features**: WebSockets
- **AI Integration**: OpenAI API for image generation

## Setup Instructions

### Prerequisites

- Node.js (v16+)
- MongoDB (Local or Cloud)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/TriedAndTested.git
   cd TriedAndTested
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add required variables (e.g., MongoDB URI, Clerk API keys, OpenAI key).

4. Start the development server:
   ```sh
   npm run dev
   ```
