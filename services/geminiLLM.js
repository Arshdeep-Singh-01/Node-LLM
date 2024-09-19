const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateText(text) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("question: ",text);
    const result = await model.generateContent(text);
    // wait for the result
    console.log("result: ",result);
    return { text: result.response.text() };
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = { generateText };