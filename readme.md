Installation
// with npm
npm install socket.io

1:
![Screenshot (2)](https://user-images.githubusercontent.com/88159702/186468483-2396e9ba-de08-4b5a-b37c-2b90d8d5d3dd.png)

2:
![Screenshot (1)](https://user-images.githubusercontent.com/88159702/186468453-b593dce6-9d3c-4dde-811c-56c11a40c527.png)

3:
![Screenshot (3)](https://user-images.githubusercontent.com/88159702/186469315-4f524362-851d-4c08-8a0d-94cdda63da58.png)

// with yarn
yarn add socket.io

==> Completeness:

This web-application is made by using Socket.io and basic HTML, CSS. Our project running npm init. The first responsability we need to take care of is creating a web server that serves the HTML, CSS and JavaScript files to our clients. To do so, we'll use Node's integrated http module. We'll create a file named server.js.
Creating the chat
We have our Socket.io instance running in the server and our client (the page) connected to it.
Handling chat messages
Chat messages are handled left and right corners. For senders it shows messages in right most corner with representing "You". And for reciver it shows name of the sender. If the user typing any message then it also shows that "Someone's Typing..".
Conclusion
Socket.io is a super powerful library and we've just scratched some basic methods from its API but it contains a lot more functionalities like assigning namespaces to sockets so they have different endpoints, create rooms and, even integrate it with Redis.

==> References to sources:
https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-socket-io-node-js
https://www.tutorialspoint.com/websockets/websockets_quick_guide.htm
https://rsrohansingh10.medium.com/add-typing-in-your-chat-application-using-socket-io-421c12d8859e

==> Challenges mentioned:
Integrating Frontend with Backend:
The really challange faced when to integrate the frontend with backend, by getting username and showing messages in left and right coreners.
Getting User name:
The chat app is like a chatroom and it contains lot of users at once. By getting all of the details about users and their entry and exit messages was a challenge.

==> Design discussed
The design of the application is implemented by using simple CSS.
