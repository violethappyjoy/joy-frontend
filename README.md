# Frontend for HappyJoy app
## Overview
Decoupled front-end for an *in-development* HappyJoy app.
A Next.js frontend, containerized for development and production.  
- **Development** uses `Dockerfile.dev` with hot-reload (`npm run dev`).  
- **Production** uses a multi-stage `Dockerfile` to build and serve optimized assets.

## Steps to deploy
### Development: using Docker
1. Build the app:
   ```
        docker build -f Dockerfile.dev -t happyjoy-frontend:dev .
   ```
2. Run the app (--rm can be used to remove the container afterwards):
   ```
        cd <PROJECT_DIR>
        docker run --rm -p 3000:3000 -v ${PWD}:/app -v /app/node_modules happyjoy-frontend:dev
   ```