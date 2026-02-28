# Sketch On Backend - Deployment Guide

## 🚀 Production Deployment

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Clerk account for authentication

### Environment Variables

Create a `.env` file with the following variables:

```
PORT=4000
MONGODB_URI=mongodb+srv://[username]:[password]@[cluster].mongodb.net/sketchon?retryWrites=true&w=majority
CLERK_SECRET_KEY=your_clerk_secret_key
NODE_ENV=production
```

### Deployment Steps

#### 1. Render.com Deployment

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables in Render dashboard
6. Deploy

#### 2. Heroku Deployment

```bash
# Install Heroku CLI
heroku create sketchon-backend
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set CLERK_SECRET_KEY=your_clerk_secret_key
heroku config:set NODE_ENV=production
git push heroku main
```

#### 3. Railway Deployment

```bash
# Install Railway CLI
railway login
railway init
railway add --database mongodb
railway up
```

### Local Development

```bash
npm install
npm run dev
```

### API Endpoints

- `GET /api/diagrams` - Get all user diagrams
- `POST /api/diagrams` - Create new diagram
- `GET /api/diagrams/:id` - Get single diagram
- `PUT /api/diagrams/:id` - Update diagram
- `DELETE /api/diagrams/:id` - Delete diagram

### Frontend URLs

- Production: https://sketchon.onrender.com
- Local: http://localhost:5173

### Database Schema

The application uses MongoDB with the following collections:

- `diagrams` - Stores user whiteboard diagrams with nodes and edges

### Security

- CORS enabled for production frontend
- Clerk authentication for user management
- Environment-based configuration
- Request validation and error handling
