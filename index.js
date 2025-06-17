const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const footerName = document.getElementById('footerName');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const prenom = document.getElementById('prenom').value;
  const sujet = document.getElementById('sujet').value;

popup.innerHTML = 🎉 Bravo ${prenom} !<br>Nous avons bien reçu votre sujet : <strong>${sujet}</strong>;

  footerName.innerHTML = prenom;

  setTimeout(() => {
    popup.style.display = 'none';
},5000);
});