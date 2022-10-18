# Starter-App

app description

### Live Site:

https://xxx.herokuapp.com/

### Main Stack Technologies

- Javascrtipt, React.js, Redux, CSS3, Express, Sequelize, PostgreSQL

### Getting your Development Environment Up And Running

- Clone this repository (only main branch) to your local machine:
  - run: `bash git clone https://github.com/otter23/starter.git `
- Install Dependencies:
  - run: `npm install` in the root folder
- In /backend folder
  Create a '.env' file based on the 'example.emv' with proper settings for your development environment
  - Create a user in your local postgreSQL database that matches your .env
    - run: `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`
  - run the following commands in order:
    - `npx dotenv sequelize create:db`
    - `npx dotenv sequelize db:migrate`
    - `npx dotenv sequelize db:seed:all`
- Start Backend Server:
  - run: `cd backend/ && npm start`
- Start Frontend Server:
  - run: `cd frontend/ && npm start`
