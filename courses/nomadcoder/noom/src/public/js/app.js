const messageList = document.querySelector('ul');
const messageForm = document.querySelector('#message');
const nicknameForm = document.querySelector('#nickname');

const socket = new WebSocket(`ws://${window.location.host}`);

function sendMessage(type, payload) {
  const message = { type, payload };
  socket.send(JSON.stringify(message));
}

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = messageForm.querySelector('input');

  sendMessage('message', input.value);

  input.value = '';
});

nicknameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const currentNickname = document.querySelector('h3');
  const input = nicknameForm.querySelector('input');

  sendMessage('nickname', input.value);

  currentNickname.innerText = input.value;
  input.value = '';
});

socket.addEventListener('message', (message) => {
  const li = document.createElement('li');
  li.innerText = message.data;
  messageList.appendChild(li);
});