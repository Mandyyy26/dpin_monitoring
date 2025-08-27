# Database Setup with Docker

## 1. Start PostgreSQL Database

```bash
# Start the database
bun run db:start

# Or manually:
docker compose up -d

# Check if it's running
docker compose ps
```

## 2. Create Environment File

Create `packages/db/.env` with:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/dpin_uptime"
```

## 3. Apply Database Schema

```bash
# Using npm scripts (recommended)
bun run db:push
bun run db:generate

# Or manually:
cd packages/db
npx prisma db push
npx prisma generate
```

## 4. Optional: Seed Database

```bash
cd packages/db
npx prisma db seed
```

## 5. Verify Setup

```bash
# Open Prisma Studio to view database
bun run db:studio

# Or manually:
cd packages/db
npx prisma studio
```

## 6. Useful Commands

```bash
# Start database
bun run db:start

# Stop database
bun run db:stop

# Reset database (delete all data and recreate)
bun run db:reset

# View database in browser
bun run db:studio
```

## Database Credentials

- **Host**: localhost
- **Port**: 5432
- **Database**: dpin_uptime
- **Username**: postgres
- **Password**: postgres
