import { type NextPage } from "next";
import Head from "next/head";
import TodoHeader from "~/components/TodoHeader";
import TodoList from "~/components/TodoList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My T3 Todo App</title>
        <meta name="description" content="My T3 Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Do These Things
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <TodoHeader />
            <TodoList />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
