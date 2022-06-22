import fetch from "node-fetch";

export const RequestFromServer = async (body: string): Promise<any> => {
  const serverUrl = "http://localhost:8080/v1/graphql";
  console.log("body :" + body);
  const result = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body,
  });
  const data = await result.json();
  console.log("data:" + JSON.stringify(data));
  //if return error from graphql server
  if (data?.errors) {
    throw new Error(data.errors);
  }
  return data;
};
