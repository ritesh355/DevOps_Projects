# Use an official lightweight Python image
FROM python:3.10-slim

# Set working directory inside container
WORKDIR /app

# Copy only requirements first (for better caching)
COPY app/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your app files
COPY app/ .

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run your app using Gunicorn (production server)
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]

