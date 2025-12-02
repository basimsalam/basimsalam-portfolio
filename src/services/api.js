export async function askBot(question) {
  const response = await fetch(
    "https://basimsalam-chatbot-me.hf.space/ask",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: question })
    }
  );

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();
  return data.answer;
}
