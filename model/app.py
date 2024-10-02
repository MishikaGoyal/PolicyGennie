from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
api_key = os.getenv("api_key")
genai.configure(api_key=api_key)

app.config['UPLOAD_FOLDER'] = 'uploads/'

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Function to handle file upload to gemini and generate content
def gemini_pro_response_with_file(file_path, prompt_header):
    gemini_pro_model = genai.GenerativeModel("gemini-pro")

    with open(file_path, 'rb') as file:
        pdf_content = file.read()

    # Assuming Gemini supports file input for context or content generation
    # This is a placeholder logic for uploading a PDF file. The actual logic may depend on the API's documentation
    response = gemini_pro_model.generate_content(
        prompt=prompt_header,
        context=pdf_content  # If API supports file context, otherwise use document text extraction before this step
    )
    
    return response.text

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Save the file
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    # Prompt header for simplifying explanations
    prompt_header = '''I want you to act as a financial guide for someone who is not familiar with finance, insurance, or complicated legal terms. 
                    Your job is to explain difficult terms and concepts in a way that anyone can understand. 
                    When you see complex words or jargon, break them down and use easy-to-understand language. 
                    Avoid using any technical terms without explaining them. 
                    For example, when talking about 'premiums,' you can say 'the amount you pay every month for your insurance.' 
                    Also, if the person is reading a long document, summarize the main points in simple sentences so they can quickly understand the key takeaways. 
                    Be clear, concise, and friendly in your explanations.'''

    # Generate response by uploading the PDF file and using it in the prompt
    guidance_message = gemini_pro_response_with_file(filepath, prompt_header)

    return jsonify({"message": guidance_message})

if __name__ == '__main__':
    app.run(debug=True)
