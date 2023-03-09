import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({
  checkTodo: publicProcedure
    .input(z.object({ checked: z.boolean(), id: z.string().uuid() }))
    .mutate(({ ctx, input }) => {
      ctx.prisma.todos.update({ where: { id }, data: { checked } });
    }),
  addTodo: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutate(({ ctx, input }) => {
      ctx.prisma.todos.create({ data: { text: input.text } });
    }),
  deleteTodo: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutate(({ ctx, input }) => {
      ctx.prisma.todos.delete({ where: { id } });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todos.findMany();
  }),
});
