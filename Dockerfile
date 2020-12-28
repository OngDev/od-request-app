# build stage
FROM node:lts-alpine as build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# copy 'package.json'
COPY package.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/jvjr-entrypoint.sh /
COPY --from=build-stage /app/jvjr-env.json /
RUN chmod +x /jvjr-entrypoint.sh
EXPOSE 80
ENTRYPOINT [ "/jvjr-entrypoint.sh", "/usr/share/nginx/html/js", "app" ]
CMD ["nginx", "-g", "daemon off;"]