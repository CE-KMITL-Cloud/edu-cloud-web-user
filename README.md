# EDU-CLOUD Frontend

Automation list
- [x] Build Dockerfile
- [x] Build Docker-compose
- [ ] Make github workflow

### Docker
Step 1 : build image
```
docker build -t ce-cloud-frontend .
```

Step: 2 run
```
docker run --rm -d -p 3000:3000 ce-cloud-frontend:latest
```

### Docker-compose
Step 1 : build image
```
docker-compose build 
```

Step: 2 run
```
docker-compose up -d
```
