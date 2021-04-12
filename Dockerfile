#stage 1#
FROM node:14 as node 
ARG PORT
WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build --prod


EXPOSE 5000

EXPOSE $PORT

RUN echo $PORT

FROM nginx:alpine

COPY --from=node /app/dist/news-app /usr/share/nginx/html

#uncomment the below lines while deploying to heroku. As port binding to 0.0.0.:80 is not allowed#
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'