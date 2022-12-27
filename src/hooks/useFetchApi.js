import { useEffect } from "react";
import { httpClient } from "../config/httpClient";

export function useFetchApi({ url, options = {} }) {
  const [apiResponse, setApiResponse] = useState({
    loading: true,
    data: {},
    error: null,
  });

  useEffect(() => {
    (async function () {
      try {
        const res = await httpClient.get(url, options);
        setApiResponse({ data: res.data, error: null, loading: false });
      } catch (err) {
        setApiResponse({ data: {}, error: err, loading: false });
      }
    })();
  }, []);

  return [apiResponse.loading, apiResponse.data, apiResponse.error];
}
