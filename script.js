'use strict';

(() => {
  const form = document.getElementById('checkForm');
  const address = document.getElementById('enderecoInput');

  if (!form || !address) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const place = address.value.trim().replace(/\s+/g, ' ');

    if (!place) {
      address.setCustomValidity('Informe um bairro, rua ou cidade.');
      address.reportValidity();
      return;
    }

    address.setCustomValidity('');
    const message = `Olá! Estou vindo da landing page da MCD Telecom e gostaria de verificar a disponibilidade de internet no seguinte local: ${place}`;
    window.location.assign(`https://wa.me/5508006430664?text=${encodeURIComponent(message)}`);
  });

  address.addEventListener('input', () => address.setCustomValidity(''));
})();
