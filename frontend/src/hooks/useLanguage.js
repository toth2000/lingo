import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getLanguageList } from "../api/language";
import { showErrorAlert } from "../utils/api";

export const useLanguage = () => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const { setLoading } = useContext(AppContext);

  const fetchLanguageList = async () => {
    try {
      setLoading(true);
      const { data } = await getLanguageList();

      if (!data) return;

      setData(data);
      const opt = data.map((item) => ({
        id: item._id,
        label: item.lang,
        value: item.code,
      }));
      setOption(opt);
      setSelectedLanguage(data[0]);
    } catch (error) {
      console.error("Fetch Langague List error: ", error);
      showErrorAlert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (event) => {
    const selected = data.find((item) => item.code === event.target.value);
    setSelectedLanguage(selected);
  };

  useEffect(() => {
    fetchLanguageList();
  }, []);

  return { option, selectedLanguage, handleOptionChange };
};
