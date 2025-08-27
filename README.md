# 🌐 Decentralized Uptime Monitoring System

A decentralized uptime monitoring system where validators across the globe check website health and report status to a central hub for **real-time tracking, analytics, and reliability monitoring**.

---

## 📖 Overview

This project provides a distributed network of validators that continuously monitor websites' availability and performance.

- **Hub**: Orchestrates tasks, assigns websites to validators, and records results in the database.
- **Validators**: Independent nodes that fetch and validate website responses, sign results, and send them back to the Hub.
- **API**: REST API for CRUD operations on monitored websites and retrieving uptime status.
- **Frontend**: Real-time dashboard for visualizing website health.

---

## 🏗️ Architecture

````text
                ┌─────────────┐
                │   Frontend  │
                └──────┬──────┘
                       │ REST
                       ▼
                ┌─────────────┐
                │     API     │
                └──────┬──────┘
                       │ Prisma/Postgres
                       ▼
                ┌─────────────┐
                │    Hub      │
                └──────┬──────┘
             WebSocket │
       ┌───────────────┴───────────────┐
       ▼                               ▼
┌─────────────┐                 ┌─────────────┐
│  Validator  │ ...             │  Validator  │
└─────────────┘                 └─────────────┘


## Monorepo Structure

apps/
 ├── api         # Express API for CRUD + queries
 ├── frontend    # React/Next.js dashboard
 ├── hub         # WebSocket hub server
 └── validator   # Independent node client
packages/
 ├── common      # Shared types/interfaces
 ├── db          # Prisma schema + client
 ├── eslint-config / typescript-config
 └── ui          # Shared UI components


## ⚡ Features

- Add/remove websites via REST API.
- Distributed validation from multiple validators worldwide.
- Cryptographic signatures to ensure validator authenticity.
- Database-backed history of uptime ticks.
- Real-time health visualization via frontend.
- Support for payouts / incentives to validators (tracked in DB).

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) or Node.js
- Docker + Docker Compose (for Postgres)
- Prisma CLI

### 1. Clone and install
```bash
git clone https://github.com/your-org/dpin-uptime.git
cd dpin-uptime
bun install

### 2. Start Postgres
```bash
docker-compose up -d

### 3. Run migrations
```bash
cd packages/db
bunx prisma migrate dev

### 4. Start services
In separate terminals (or via pm2/tmux):
```bash
bun --cwd apps/api run index.ts
bun --cwd apps/hub run index.ts
bun --cwd apps/validator run index.ts
bun --cwd apps/frontend dev


## 🔑 Environment Variables

| Service   | Variable       | Description                              |
|-----------|---------------|------------------------------------------|
| API       | `DATABASE_URL` | Connection string for Postgres           |
| Validator | `PRIVATE_KEY`  | JSON array of validator secret key bytes |
| Validator | `HUB_WSS_URL`  | WebSocket endpoint for Hub               |

---

## 🛠️ Example Usage

### Add a Website
```bash
curl -X POST http://localhost:8001/api/v1/website \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'

  ### Get Status
```bash
curl "http://localhost:8001/api/v1/website/status?websiteId=<id>" \
  -H "Authorization: Bearer <token>"

  ## 📊 Database Schema (simplified)

- **User** → owns websites.
- **Website** → monitored target.
- **Validator** → registered node.
- **WebsiteTick** → individual result from a validator.

---

## 🌍 Running Your Own Validator

Anyone can join the network by running a validator node.

### Run via Docker
```bash
docker run -d --restart=always \
  -e HUB_WSS_URL=wss://hub.yourdomain.com/ws \
  -e PRIVATE_KEY='[11,22,...,64bytes]' \
  -e VALIDATOR_TAGS='aws,ap-south-1' \
  ghcr.io/your-org/dpin-validator:latest

### From source
```bash
bun --cwd apps/validator run index.ts

## 🌍 Scaling Plan

- Validators run worldwide via Docker/Kubernetes.
- Hub runs behind TLS (WSS) with Redis for coordination.
- Consistent hashing used for task assignment.
- Aggregated uptime metrics stored with retention policies.

---

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feat/my-feature`).
3. Commit your changes (`git commit -m "feat: add X"`).
4. Push and open a Pull Request.
````
