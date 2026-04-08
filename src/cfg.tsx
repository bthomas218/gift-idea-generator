import dotenv from "dotenv";

dotenv.config();

type Config = {
  port: number;
  hostname: string;
};

const config: Config = {
  port: parseInt(process.env.PORT_NUMBER || "3000", 10),
  hostname: process.env.HOSTNAME || "localhost",
};

export default config;
