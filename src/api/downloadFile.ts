import client from "./client";

const downloadFile = async (url: string) => {
  try {
    const response = await client.get<Blob>("/downloadFile?file=" + url, {
      responseType: "blob",
    });
    return response.data;
    // Do something with the response
  } catch (err) {
    // Handling errors
  }
};

export default downloadFile;
