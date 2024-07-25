# Next Typed Fetch

A type-safe wrapper for the Fetch API that adds TypeScript support for better type safety in requests and responses.

# Big Thanks

Thanks to [@Typed-Rocks](https://www.youtube.com/@Typed-Rocks) for providing the code used to create this package. Keep up the good work.

## Installation

You can install `next-typed-fetch` via npm:

```bash
npm install next-typed-fetch
```

## Usage

Here's how you can use the package in your app

```ts
import tFetch from "next-typed-fetch";

type Todo = { userId: string; title: string; completed: boolean };

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

tFetch<Todo>(apiUrl, {
  method: "GET", // You get predefined methods.
  headers: {
    "Content-Type": "application/json", // There are pre-defined headers
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

# API

## tFetch

`tFetch<ResponseType = any>(input: RequestInfo | URL, init?: TypedRequestInit): Promise<TypedResponse<ResponseType>>`

- input: The resource you want to fetch. This can be a URL or a Request object.
- init: An object containing any custom settings that you want to apply to the request.
- method: HTTP request method (e.g., GET, POST, PUT, DELETE).
- headers: Headers to send with the request. Supports MIME types and an authorization token.
- body: The request body. Only allowed for POST, PUT, DELETE, and UPDATE methods.

# Types

- TypedHeaders: Type-safe headers definition.
- MimeTypes: Supported MIME types.
- TypedResponse<T>: Response interface with typed json() method.

# Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

# License

MIT License
