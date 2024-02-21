import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Lesson } from "./models/lesson.js";
import { Course } from "./models/course.js";

const env = dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    entities: [
        Course,
        Lesson
    ],
    synchronize: true,
    logging: true
});
