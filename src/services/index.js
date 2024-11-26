import axios from "axios";
const API_URL = "service/api/api";
const API_KEY = "011ba11bdcad4fa396660c2ec447ef14";

export const osGetGoodList = async () => {
  try {
    const response = await axios.post(
      API_URL,
      {
        ApiKey: API_KEY,
        MethodName: "OSGetGoodList",
      }
    );

    if (response.data && response.data.result === 0) {
      console.log("Успешный ответ:", response.data);
      return response.data.data;
    } else {
      throw new Error(response.data?.resultdescription || "Неизвестная ошибка");
    }
  } catch (error) {
    console.error("[osGetGoodList] Ошибка:", error.message);
    throw error;
  }
};

export const osSale = async (saleData) => {
  try {
    const response = await axios.post(API_URL, {
      ApiKey: API_KEY,
      MethodName: "OSSale",
      ...saleData,
    });

    if (response.data.result === 0) {
      console.log(response.data)
      return response.data.data;
    } else {
      throw new Error(response.data.resultdescription);
    }
  } catch (error) {
    console.error("Ошибка при оформлении заказа:", error);
    throw error;
  }
};
