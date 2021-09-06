// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere alla pagina un’immagine, presa anch’essa da un data

var app = new Vue(
    {
        el: "#root",
        data: {
            message: "hello word",
    
            image: "https://codicicolori.com/images/sampledata2/4K/foto-4k.jpg"
        }
    }
);