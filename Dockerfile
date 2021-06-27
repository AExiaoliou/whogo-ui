FROM node:12 as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]