import { useEffect, useState } from "react";

export const useOrderData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // TODO: Implement your data fetching logic
    setLoading(false);
  }, []);

  return { data, loading, error };
};
