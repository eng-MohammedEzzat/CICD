# CICD Express App

This is a small Node.js and Express application that exposes a basic home route and a `/health` endpoint returning a JSON health status. The project is containerized with Docker and includes a GitHub Actions CI/CD workflow that installs dependencies, runs the test suite, builds the Docker image, and triggers deployment from the `main` branch.

## Live URL

https://cicd-ymsy.onrender.com

## Successful Pipeline Run

![Successful GitHub Actions pipeline run](docs/github-actions-success.png)

> Replace `docs/github-actions-success.png` with a screenshot or animated GIF from the GitHub Actions page after the first successful pipeline run.

## How the pipeline works

When code is pushed to `main` or a pull request targets `main`, GitHub Actions starts the CI/CD workflow. The first job checks out the repository so the runner has the latest source code. It then installs Node.js and restores npm caching to make dependency installation faster. After that, it runs `npm ci` to install dependencies from the lockfile in a repeatable way. The workflow runs the test suite with `npm test` so broken changes are caught before deployment. If the tests pass, the workflow builds the Docker image using the project Dockerfile. The deploy job waits for the test job to finish successfully because it uses `needs: test`. Deployment only runs for direct pushes to the `main` branch, so pull requests can validate the code without publishing it. The deploy step calls the Render deploy hook from a GitHub Secret, so pushing to `main` updates the live Render site without clicking a deploy button. The hook URL stays out of the repository so deployment credentials are not stored in plain text.

## What I would do next

- Add a staging environment so changes can be tested with production-like settings before going live.
- Cache Docker layers in GitHub Actions to make repeated image builds faster.
