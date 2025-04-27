import { DataSource } from "typeorm";
import { Blog } from "./entities/Blog"; // Make sure it's correctly imported

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
    type: "postgres",
    ...(isProduction ? {
      url: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    } : {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "5432"),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }),
    synchronize: !isProduction, // production me false, local me true
    logging: true,
    entities: [Blog],
  });

// export const AppDataSource = new DataSource({
//   type: "postgres", // Replace with your DB type
//   url: process.env.DATABASE_URL,
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT || "5432"),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   ssl: {
//     rejectUnauthorized: false, // Render ya Neon ke liye important
//   },
//   synchronize: false, // Set to false in production
//   logging: true,
//   entities: [Blog], // Add the Blog entity here
// });
