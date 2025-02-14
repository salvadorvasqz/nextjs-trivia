export const apiGet = async <IResponse = unknown, IError = unknown>({
  endpoint,
  init,
}: {
  endpoint: string;
  init?: RequestInit;
}) => {
  const request: {
    response: IResponse | null;
    error: IError | null;
  } = {
    response: null,
    error: null,
  };
  await fetch(endpoint, init)
    .then((response) => response.json())
    .then((data) => {
      request.response = data;
    })
    .catch((error) => {
      request.error = error;
    });

  return request;
};
