import {z} from "zod";
import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";

export const testRouter = createTRPCRouter({  
    gettingStarted: publicProcedure.query(() => 
        `Just started developing APIs with tRPC`
    ),
    hello: publicProcedure.query(() => 
        `Hello World`
    ),
});
