# Lingo - Simply Learn

This is the offical repository of Lingo, it is a language learning platform with interactive quizes to make learning simple.

Website: https://lingo-pi.vercel.app <br>

![](https://raw.githubusercontent.com/toth2000/lingo/master/screenshots/all-devices-black.png)

---

# Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Install](#install)
- [Api Documentation](#api-documentation)
- [Contribution Guidelines](#contribution-guidelines)

# Features

Embark on a Multilingual Odyssey

With Lingo's innovative features, you'll find language learning to be more dynamic and rewarding than ever before.

### Dynamic Learning Experience

Lingo adapts to your language proficiency by adjusting question difficulty based on your responses, ensuring personalized and effective learning.

### Engaging Scoring System

Stay motivated and challenged with our intriguing scoring system, earning points and achieving milestones as you progress.

![](https://raw.githubusercontent.com/toth2000/lingo/master/screenshots/quiz-screen.png)

### Global Leaderboard

Compete with fellow language enthusiasts worldwide on our leaderboard, celebrating your achievements and global language skills.

![](https://raw.githubusercontent.com/toth2000/lingo/master/screenshots/leader-board.png)

### Progress Tracking

Monitor your language learning journey closely, set achievable goals, and witness your fluency levels rise steadily.

![](https://raw.githubusercontent.com/toth2000/lingo/master/screenshots/user-screen.png)

### Learn Multiple Languages

Lingo opens doors to a multitude of languages, allowing you to explore and master them with ease.

## ![](https://raw.githubusercontent.com/toth2000/lingo/master/screenshots/learning-path.png)

## Folder Structure

The `/frontend` directory contains the ReactJs frontend codebase that is hosted in the vercel.

The `/server` directory contains the NodeJs server codebase.

## Technologies Used

Lingo is built using a powerful and versatile tech stack, combining cutting-edge technologies to deliver a seamless language learning experience. Here's an overview of the technologies that power the Lingo project:

- React.js
- Express.js
- MongoDB
- Node.js
- Websockets

## Requirements

To run the website on you local device, you will only need NodeJs v18 installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/toth2000/lingo
    $ cd lingo

#### To Run the Website locally

    $ cd frontend
    $ npm install
    $ npm start

#### To Run the Backend Server locally

    $ cd server
    $ npm install
    $ npm run dev

## API documentation

For developers and enthusiasts eager to explore the Lingo project's API capabilities, we've prepared comprehensive documentation to guide you through the integration process. The API documentation covers endpoints, request methods, response formats, and authentication mechanisms, providing all the essential information for seamless integration into your applications.

**Explore the Lingo API Documentation:**
[https://documenter.getpostman.com/view/19488087/2s9YJXZ4sv](https://documenter.getpostman.com/view/19488087/2s9YJXZ4sv)

This documentation is a valuable resource for understanding the functionalities and endpoints offered by the Lingo API. Whether you're a seasoned developer or a curious learner, feel free to dive into the details and leverage the power of Lingo in your projects. If you have any questions or need further assistance, don't hesitate to reach out to our development community.

Happy coding with Lingo! 🚀

## Websocket documentation

The WebSocket integration in Lingo enables real-time communication during quizzes, enhancing the interactive and dynamic nature of the language learning experience. To connect to the WebSocket server, please refer to the [websocket documentation](./server/README.md)

## Contribution guidelines

Please refer to our [Contribution Guide](CONTRIBUTING.md) for contributing to this project. And remeber no contribution is small, every contribution matters.
