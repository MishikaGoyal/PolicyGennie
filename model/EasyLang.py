import os
import google.generativeai as genai
from dotenv import load_dotenv
load_dotenv()
api_key= os.getenv("api_key")
genai.configure(api_key=api_key)
prompt_header = '''I want you to act as a financial guide for someone who is not familiar with finance, insurance, or complicated legal terms. 
Your job is to explain difficult terms and concepts in a way that anyone can understand. 
When you see complex words or jargon, break them down and use easy-to-understand language. 
Avoid using any technical terms without explaining them. 
For example, when talking about 'premiums,' you can say 'the amount you pay every month for your insurance.' 
Also, if the person is reading a long document, summarize the main points in simple sentences so they can quickly understand the key takeaways. 
Be clear, concise, and friendly in your explanations.'''

def gemini_pro_response(user_prompt):
    gemini_pro_model = genai.GenerativeModel("gemini-pro")
    response = gemini_pro_model.generate_content(user_prompt)
    return (response.text)

#write the user input format here
prompt = prompt_header
print(gemini_pro_response(prompt))