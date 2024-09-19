const openAIGenerator = require('./openaiLLM');
const googleGenerativeAI = require('./geminiLLM');

async function generateText(text) {
    // console.log(process.env.LLM_SERVICE);
    if(process.env.LLM_SERVICE === 'openai') {
        const response = await openAIGenerator.generateText(text);
        return response;
    }
    if(process.env.LLM_SERVICE === 'gemini') {
        const response = await googleGenerativeAI.generateText(text);
        console.log(response);
        return response;
    }
    return {error: 'No LLM service selected\nRefer to the README for instructions on how to set up the LLM service'};
}

module.exports = { generateText };