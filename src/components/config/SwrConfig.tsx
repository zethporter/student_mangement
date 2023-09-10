import { SWRConfig } from "swr";
import axios from "axios";

const SwrConfig = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        provider: () => new Map(),
        fetcher: (resource, init) =>
          axios.get(resource, init).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrConfig;
