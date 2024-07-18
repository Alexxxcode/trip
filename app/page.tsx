"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeContainer from "@/components/Home/HomeContainer";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContainer />
    </QueryClientProvider>
  );
};

export default Home;
