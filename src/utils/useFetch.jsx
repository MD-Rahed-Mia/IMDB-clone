import React, { useState, useEffect } from "react";
import API_Call from "./Api";
import { useDispatch } from "react-redux";
import { getApiConfig } from "../store/slice/apiSlice";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCall = await API_Call(url);
        setLoading(false);

        dispatch(getApiConfig(apiCall));
        setData(apiCall);
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}
