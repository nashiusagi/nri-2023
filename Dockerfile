FROM node:18-alpine

WORKDIR /var/www

COPY ./ /var/www

RUN yarn install
RUN yarn build

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["node", ".output/server/index.mjs"]