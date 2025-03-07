const host = window.location.hostname;
const script = document.createElement('script');
script.type = 'module';
script.src = `http://${host}:4000/lovelace-floors-card.js`;
document.head.appendChild(script);