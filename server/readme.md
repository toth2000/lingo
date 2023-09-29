# API Documentation

For developers and enthusiasts eager to explore the Lingo project's API capabilities, we've prepared comprehensive documentation to guide you through the integration process. The API documentation covers endpoints, request methods, response formats, and authentication mechanisms, providing all the essential information for seamless integration into your applications.

**Explore the Lingo API Documentation:**
[https://documenter.getpostman.com/view/19488087/2s9YJXZ4sv](https://documenter.getpostman.com/view/19488087/2s9YJXZ4sv)

# WebSocket Documentation for Quiz

The WebSocket integration in Lingo enables real-time communication during quizzes, enhancing the interactive and dynamic nature of the language learning experience. To connect to the WebSocket server, use the following details:

**WebSocket URL:**

```
wss://lingo-6mpr.onrender.com
```

## Connection Parameters:

### 1. **Level (Query Parameter)**

- **Description:** Proficiency level of the quiz.
- **Example:** `?level=1`

### 2. **Lang (Query Parameter)**

- **Description:** Language code for the quiz.
- **Example:** `?lang=en`

### 3. **Token (Query Parameter)**

- **Description:** Access token for authentication and authorization.
- **Example:** `?token=your-access-token`

## Connection Example:

```javascript
const socket = new WebSocket(
  "wss://lingo-6mpr.onrender.com?level=Intermediate&lang=en-US&token=your-access-token"
);

socket.addEventListener("open", (event) => {
  // Connection is established
  console.log("WebSocket Connection Opened:", event);
});

socket.addEventListener("message", (event) => {
  // Handle incoming messages during the quiz
  console.log("WebSocket Message Received:", event.data);
});

socket.addEventListener("close", (event) => {
  // Connection is closed
  console.log("WebSocket Connection Closed:", event);
});

socket.addEventListener("error", (event) => {
  // Handle errors
  console.error("WebSocket Error:", event);
});
```

## WebSocket Events:

1. **`quiz-start` Event:**

   - **Description:** Triggered when the quiz starts.
   - **Example:**
     ```json
     {
       "type": "start",
       "id": "650fcbbd460b509b4bc10de0",
       "diff": 1,
       "ques": "Choose the correct verb form: 'She _____ the door open.'",
       "opt": ["Hold", "Holding", "Holds", "Held"],
       "score": 0
     }
     ```

2. **`question` Event:**

   - **Description:** Triggered when a new question is presented.
   - **Example:**
     ```json
     {
       "type": "ques",
       "id": "650fcbbd460b509b4bc10dcd",
       "diff": 0,
       "ques": "What part of speech is the word 'quickly'?",
       "opt": ["Noun", "Verb", "Adjective", "Adverb"],
       "score": -5
     }
     ```

3. **`error` Event:**

   - **Description:** Triggered when an error is occured.
   - **Example:**
     ```json
     {
       "type": "error",
       "accessTokenExpired": true,
       "message": "An error occured, Please Try again",
       "error": "Access Token Expired"
     }
     ```

4. **`quiz-end` Event:**

   - **Description:** Triggered when the quiz concludes.
   - **Example:**

     ```json
     {
       "type": "end",
       "message": "Quiz Complete",
       "score": -50,
       "bonus": 14
     }
     ```

5. **`Send Answer` socket.send:**
   - **Description:** When user submits the quiz answer. Send it to the socket in the following format.
   - **Example:**
     ```json
     { "id": "650fcbbd460b509b4bc10de0", "ans": "3" }
     <!-- id : questionId -->
     ```

## Usage Guidelines:

- Ensure that the WebSocket connection is established before attempting to interact with the quiz events.
- The access token provided in the query parameters should be valid for authentication.

## Getting Started:

Integrate the WebSocket connection into your application to provide users with a real-time and engaging language learning quiz experience. If you have any questions or need assistance, connect with our development community.

Happy coding with Lingo WebSocket! 🌐🎉
