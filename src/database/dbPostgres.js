import "dotenv/config";
import postgres from 'postgres'; 

const postgresSql = postgres({
    host: process.env.POSTGRES_HOST ?? process.env.PGHOST_DEPLOY,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE ?? process.env.PGDATABASE_DEPLOY,
    username: process.env.POSTGRES_USER ?? process.env.PGUSER_DEPLOY,
    password: process.env.POSTGRES_PASSWORD ?? process.env.PGPASSWORD_DEPLOY,
    connection: {
        options: `project=${process.env.PGENDPOINT_ID_DEPLOY}`
    },
    ssl: "require"
});

async function getPostgresVersion() {

    const result = await postgresSql `select version()`;
    console.log(result);
}
  
getPostgresVersion();

export default postgresSql;
