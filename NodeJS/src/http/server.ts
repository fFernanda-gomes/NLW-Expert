import fastify from "fastify";
import { CreatePoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";

const app = fastify()

app.register(CreatePoll)
app.register(getPoll)

app.listen({ port: 3333 }).then(() => {
  console.log("rodando")
})