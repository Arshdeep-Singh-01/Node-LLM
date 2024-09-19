const { generateText } = require('../services/LLM');

async function handleHome(req, res) {
   res.render('home');
}


async function handleLLMRequest(req, res) {
  if(!req.body.text) {
    return res.status(400).json({ error: 'You must include text in the request body' });
  }
  else{
    const text = req.body.text;
    const response = await generateText(text);
    console.log("in handleLLMRequest: ", response);
    if(response.error) {
      return res.status(500).json({ error: response.error });
    }
    else{
      return res.status(200).json({ text: response.text });
    }
  }
}

module.exports = { handleHome, handleLLMRequest };