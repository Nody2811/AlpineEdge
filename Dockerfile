FROM node:12-alpine as builder

WORKDIR /app

COPY ./package*json ./
RUN npm ci

COPY . .

RUN npm run build

RUN rm -f .env


FROM nginx as final

COPY --from=builder /app/build /usr/share/nginx/html