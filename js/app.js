import { UserApp } from './api.js';

const app = new UserApp();

window.fetchUserById = function () {
  const userIdInput = document.getElementById('userIdInput');
  const userId = parseInt(userIdInput.value);

  if (isNaN(userId)) {
    window.alert('Por favor, ingrese un ID de usuario válido.');
    return;
  }

  app.fetchUserById(userId);
};