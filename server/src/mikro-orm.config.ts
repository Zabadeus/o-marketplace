import { MikroORM } from "@mikro-orm/core";

import { __prod__ } from "./constants";

export default {
    entities: ["dist/**/entities/*.js"],
    dbName: "O-DB",
    clientUrl: "mongodb://localhost:27017/O-DB",
    type: "mongo",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
