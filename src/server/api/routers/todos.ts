import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({
  checkTodo: publicProcedure
    .input(z.object({ checked: z.boolean(), id: z.string() }))
    .mutation(async ({ ctx, input: { id, checked } }) => {
      await ctx.prisma.todos.update({
        where: { id },
        data: { checked, completedAt: checked ? new Date() : null },
      });
    }),
  addTodo: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.todos.create({ data: { text: input.text } });
    }),
  deleteTodo: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.todos.delete({ where: { id: input.id } });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todos.findMany();
  }),
});
