set shell := ["bash", "-eu", "-o", "pipefail", "-c"]

default:
    @just --list

# Run the local development server.
r:
    npm run dev

# Canonical formatting pass for this repo currently means applying ESLint auto-fixes.
f:
    npm run lint -- --fix

lint:
    npm run lint

test:
    npm test

build:
    npm run build

start:
    npm run start

verify:
    just lint
    just test
    just build
