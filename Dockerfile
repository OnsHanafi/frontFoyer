FROM node:18.20.4 as build

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm ci
RUN npm install -g @angular/cli

COPY . .


RUN npm run build --configuration=production

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/front-foyer/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]