## Docker Deployment

This application can be run in a Docker container for consistent development and deployment environments.

### Prerequisites
- Docker and Docker Compose installed on your system

### Running with Docker Compose

1. **Build and start the container:**
   ```bash
   docker compose -f docker-composer.yaml up
   ```
   This builds the Docker image if needed and starts the container. The app will be available at http://localhost:3000.

2. **Run in detached mode (background):**
   ```bash
   docker compose -f docker-composer.yaml up -d
   ```

3. **Stop the container:**
   ```bash
   docker compose -f docker-composer.yaml down
   ```

4. **Rebuild and restart (after Dockerfile or dependency changes):**
   ```bash
   docker compose -f docker-composer.yaml down
   docker compose -f docker-composer.yaml up --build
   ```

### Development with Docker
The Docker setup includes volume mapping for live code reloading:
- Local code changes will automatically be reflected in the running container
- Next.js hot module replacement (HMR) works as expected
- No need to rebuild the container when modifying code

This makes for a seamless development experience while ensuring environment consistency.