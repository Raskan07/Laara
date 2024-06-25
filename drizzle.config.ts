import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://Laara%20DB_owner:u6trzgZvsJd4@ep-polished-wildflower-a571xjl7.us-east-2.aws.neon.tech/Laara%20DB?sslmode=require",
  },
  verbose: true,
  strict: true,
})
