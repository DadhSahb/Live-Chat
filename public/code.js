(function () {
  const app = document.querySelector(".app");
  const socket = io();
  var typing = false;
  var timeout = undefined;
  var typingTimeout = undefined;
  var user;
  const adduser = app.querySelector(".join-screen #join-user");
  const sendmsg = app.querySelector(".chat-screen #sendmsg");
  const exitchat = app.querySelector(".chat-screen #exitchat");

  let uname;

  adduser.addEventListener("click", function () {
    let username = app.querySelector(".join-screen #username").value;
    if (username.length == 0) {
      return;
    }
    socket.emit("newuser", username);
    uname = username;
    app.querySelector(".join-screen").classList.remove("active");
    app.querySelector(".chat-screen").classList.add("active");
  });

  sendmsg.addEventListener("click", function () {
    let message = app.querySelector(".chat-screen #message-input").value;
    if (message.length == 0) {
      return;
    }
    renderMessage("my", {
      username: uname,
      text: message,
    });
    socket.emit("chat", {
      username: uname,
      text: message,
    });
    app.querySelector(".chat-screen #message-input").value = "";
  });

  $(document).ready(function () {
    $("#message-input").keypress((e) => {
      if (e.which != 13) {
        typing = true;
        socket.emit("typing", { typing: true });
        clearTimeout(timeout);
        timeout = setTimeout(typingTimeout, 3000);
      } else {
        clearTimeout(timeout);
        typingTimeout();
        //sendMessage() function will be called once the user hits enter
        sendMessage();
      }
    });

    socket.on("display", (data) => {
      if (data.typing == true) $(".typing").text(`Someone is typing...`);
      else $(".typing").text("");
    });
  });

  exitchat.addEventListener("click", function () {
    socket.emit("exituser", uname);
    window.location.href = window.location.href;
  });

  socket.on("update", function (update) {
    renderMessage("update", update);
    console.log(update);
  });

  socket.on("chat", function (message) {
    renderMessage("other", message);
  });

  function renderMessage(type, message) {
    let messageContainer = app.querySelector(".chat-screen .messages");
    if (type == "my") {
      let el = document.createElement("div");
      el.setAttribute("class", "message my-message");
      el.innerHTML = `
                <div>
                    <div class="name">You</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
      messageContainer.appendChild(el);
    } else if (type == "other") {
      let el = document.createElement("div");
      el.setAttribute("class", "message other-messages");
      el.innerHTML = `
                <div>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
      messageContainer.appendChild(el);
    } else if (type == "update") {
      let el = document.createElement("div");
      el.setAttribute("class", "update");
      el.innerText = message;
      messageContainer.appendChild(el);
    }
    //scroll chat to end
    messageContainer.scrollTop =
      messageContainer.scrollHeight - messageContainer.clientHeight;
  }
})();
