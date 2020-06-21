FROM node:12.8.0

MAINTAINER Joonho Jeon <jeon9435@gmail.com>

RUN mkdir -p /app
WORKDIR /app
ADD ./backend /app
RUN npm install

ENV NODE_ENV development

EXPOSE 3000 80

CMD ["npm", "start"]