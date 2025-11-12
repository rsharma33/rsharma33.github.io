.PHONY: help build up down start clean logs shell restart

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build Docker image
	docker compose build

up: ## Start container in foreground
	docker compose up

start: ## Start container in background
	docker compose up -d

rebuild: ## Rebuild and start container
	docker compose up --build -d

down: ## Stop and remove containers
	docker compose down

clean: ## Remove all containers, images, and volumes
	docker compose down -v --rmi all

logs: ## View logs (follow mode)
	docker compose logs -f

shell: ## Access shell in container
	docker compose exec web sh

restart: ## Restart container
	docker compose restart

ps: ## Show running containers
	docker compose ps

stop: ## Stop containers without removing
	docker compose stop
