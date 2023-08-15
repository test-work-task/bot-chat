export const sendMessage = async (message: string): Promise<string> => {
  const url = 'http://185.46.8.130/api/v1/chat/send-message';
  const requestBody = JSON.stringify({ message });
  const headers = {
    'Content-Type': 'application/json'
  };

  const response = await fetch(url, {
    method: 'POST',
    body: requestBody,
    headers
  });

  if (!response.body) {
    throw new Error('Response body is null');
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];

  const processChunks = async () => {
    let done = false;

    while (!done) {
      const { done: isDone, value } = await reader.read();
      done = isDone;

      if (value !== undefined) {
        chunks.push(value);
      }
    }
  };

  await processChunks();

  const concatenatedChunks = chunks.reduce(
    (acc, chunk) => Uint8Array.from([...acc, ...Array.from(chunk)]),
    new Uint8Array()
  );
  const decoder = new TextDecoder();
  const responseText = decoder.decode(concatenatedChunks);
  const jsonObjects = responseText.match(/({.*?})/g);

  if (jsonObjects !== null) {
    const contentChunks: string[] = [];

    jsonObjects.forEach((jsonObject) => {
      const jsonResponse = JSON.parse(jsonObject);
      const { status, value } = jsonResponse;
      if (status === 'content') {
        contentChunks.push(value);
      }
    });

    const content = contentChunks.join('');
    return content;
  } else {
    return '';
  }
};
  