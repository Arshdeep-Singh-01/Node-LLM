const { OpenAI } = require('openai');

async function generateText(text) {
    const openai = new OpenAI(process.env.OPENAI_API_KEY);
    const result = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                "role": "user", 
                "content": text
            }
        ]
    });
    return {text: result.data.choices[0].text};
}

module.exports = { generateText };