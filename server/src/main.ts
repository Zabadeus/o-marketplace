import { MikroORM } from "@mikro-orm/core";
import express from "express";
import mikroConfig from "./mikro-orm.config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import connectRedis from "connect-redis";
import session from "express-session";
import redis from "redis";
import cors from "cors";

import { COOKIE_NAME, __prod__ } from "./constants";
import { resolvers } from "./product/resolvers/resolvers";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    // await orm.em.nativeDelete(User, {});

    const app = express();

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redisClient,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: "lax", // csrf
                secure: __prod__, // cookie only works in https
            },
            saveUninitialized: false,
            secret: "13uHo24q3lkadfj2pOJSADFkad2",
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers,
            validate: false,
        }),
        context: ({ req, res }) => ({ em: orm.em, req, res }),
    });

    apolloServer.applyMiddleware({
        app,
        cors: { origin: false },
    });

    app.listen(4004, () => {
        console.log("server started on localhost:4004");
    });
};

main().catch(err => {
    console.error(err);
});
