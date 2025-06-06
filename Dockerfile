FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

COPY . .

EXPOSE 3001

CMD ["pnpm", "run", "dev", "-p", "3001"]
