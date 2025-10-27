# Express.js RESTful API

A RESTful API built with Express.js featuring authentication, logging, and CRUD operations for products.

## Features

- 🔐 API Key Authentication
- 📝 Request Logging
- ✨ CRUD Operations for Products
- 🔍 Search Functionality
- 📄 Pagination Support
- ⚡ Error Handling
- 🔧 Environment Configuration

## Prerequisites

- Node.js v18 or higher
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:

```env
MONGO_URI=your_mongodb_connection_string
API_KEY=your_api_key
PORT=3000
NODE_ENV=development
```

## API Endpoints

### Products

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products | Yes |
| GET | `/api/products/:id` | Get single product | Yes |
| POST | `/api/products` | Create product | Yes |
| PUT | `/api/products/:id` | Update product | Yes |
| DELETE | `/api/products/:id` | Delete product | Yes |

### Query Parameters

- `search`: Filter products by name
- `page`: Page number for pagination (default: 1)
- `limit`: Items per page (default: 10)

## Authentication

Include the API key in request headers:

```
x-api-key: your_api_key
```

## Example Requests

### Get All Products

```bash
curl -X GET \
  'http://localhost:3000/api/products?page=1&limit=10' \
  -H 'x-api-key: your_api_key'
```

### Create Product

```bash
curl -X POST \
  'http://localhost:3000/api/products' \
  -H 'x-api-key: your_api_key' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Product Name",
    "price": 99.99,
    "description": "Product description"
}'
```

## Response Format

### Success Response

```json
{
  "id": "1234567890",
  "name": "Product Name",
  "price": 99.99,
  "description": "Product description",
  "createdAt": "2025-10-27T12:00:00.000Z"
}
```

### Error Response

```json
{
  "error": {
    "message": "Error message",
    "status": 400,
    "timestamp": "2025-10-27T12:00:00.000Z"
  }
}
```

## Project Structure

```
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── logger.js
├── routes/
│   └── products.js
├── .env
├── .env.example
├── server.js
└── README.md
```

## Error Handling

The API implements comprehensive error handling:
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

## Development

Start the server in development mode:

```bash
npm run dev
```

Start the server in production mode:

```bash
npm start
```

## Environment Variables

- `PORT`: Server port (default: 3000)
- `API_KEY`: Authentication key for API access
- `MONGO_URI`: MongoDB connection string
- `NODE_ENV`: Environment (development/production)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.