import { useEffect, useState } from "react";
import { fetchAPI } from "../api";

const useFetchAPI = ({ date }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (date !== typeof "string") {
    setError("date must be a string");
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchAPI(date);
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, []);
  return {
    data,
    error,
    loading,
  };
};

export default useFetchAPI;
