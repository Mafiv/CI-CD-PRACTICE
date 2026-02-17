# Use Nginx to serve static files
FROM nginx:alpine

# Copy frontend files to Nginx html directory
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
