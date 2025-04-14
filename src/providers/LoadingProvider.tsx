import { ReactNode, useMemo, useState } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      isLoading,
      setLoading: setIsLoading,
    }),
    [isLoading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
