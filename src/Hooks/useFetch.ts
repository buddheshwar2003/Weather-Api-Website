import { useEffect, useState } from "react";

const useFetch = (url:string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network Response is not good");
        const json = await res.json();
        setData(json);
        setErrorMessage(null);
      } catch (error: any) {
        setErrorMessage(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[url]);
  return {data,loading,errorMessage};
};

export default useFetch;
