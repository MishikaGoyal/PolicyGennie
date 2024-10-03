import streamlit as st
import PyPDF2

# Title of the app
st.title("PDF Text Extractor using PyPDF2")

# File uploader widget
uploaded_file = st.file_uploader("Choose a PDF file", type="pdf")

if uploaded_file is not None:
    # Read the uploaded PDF file
    try:
        # Open the PDF file
        pdf_reader = PyPDF2.PdfReader(uploaded_file)

        # Initialize a variable to store the extracted text
        extracted_text = ""

        # Extract text from each page
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            extracted_text += page.extract_text()

        # Display the extracted text
        st.subheader("Extracted Text:")
        st.text_area("Text from PDF", extracted_text, height=400)

    except Exception as e:
        st.error(f"Error: {e}")