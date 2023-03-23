# EDU-CLOUD Frontend

## For dev

```bash
yarn dev
```

## For show components

```bash
yarn storybook
```

Automation list

- [ ] Build Dockerfile
- [ ] Build Docker-compose
- [ ] Make github workflow

## Step to run

### Docker

Step 1 : build image

```bash
docker build -t ce-cloud-frontend .
```

Step: 2 run

```bash
docker run --rm -d -p 3000:3000 ce-cloud-frontend:latest
```

### Docker-compose

Step 1 : build image

```bash
docker-compose build
```

Step: 2 run

```bash
docker-compose up -d
```
