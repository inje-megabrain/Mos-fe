import client from "./client";

const downloadFile = async (url: string) => {
  try {
    const response = await client.get(url, {
      responseType: "stream",
    });
    return response;
    // Do something with the response
  } catch (err) {
    // Handling errors
  }
};

export default downloadFile;
