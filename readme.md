# HOW TO RUN ecommerce

## BACKEND
1. Install dependency
`npm i`
2. Turn on your mysql database
3. Input your database link into DATABASE_URL on .env file
`mysql://<user>:<password>@localhost:3306/name-of-database`
4. run the prisma migration
`npx prisma migrate dev --name your_commit`
5. run the server
for dev `npm run dev`
for prod `npm start`