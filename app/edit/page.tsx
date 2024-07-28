"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import EditContent from "@/components/Edit/EditContent";

const queryClient = new QueryClient();

const EditTrip = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EditContent />
    </QueryClientProvider>
  );
};

export default EditTrip;
