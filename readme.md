# Example NATS pub sub with nodejs

## Install depencies
```bash
yarn # or
npm install
```

## Run nats server
```bash
docker-compose up -d
```

## Run publisher
```bash
node pub.js
```

## Run subscription
```bash
node sub.js
```