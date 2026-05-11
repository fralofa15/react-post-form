import { useState } from "react";
function Form() {

    const [autore, setAutore] = useState("");
    const [libro, setLibro] = useState("");
    const [commento, setCommento] = useState("");
    const [publica, setPublica] = useState(false);

    function gestisciSetAutore(evento) {
        setAutore(evento.target.value)
    }

    function gestisciSetLibro(evento) {
        setLibro(evento.target.value)
    }

    function gestisciSetCommento(evento) {
        setCommento(evento.target.value)
    }

    function gestisciSetPublica(evento) {
        setPublica(evento.target.checked)
    }

    function gestisciBottone(evento) {
        evento.preventDefault();

        const postData = {
            author: autore,
            title: libro,
            body: commento,
            public: publica,
        }

        console.log("post inviato");

        fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
        // Se non mettete questa proprietà le API non funzioneranno XD
        headers: {
            'Content-Type': 'application/json'  
        },
        method: 'POST',
        body: JSON.stringify(postData)
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
    
            setAutore("");
            setLibro("");
            setCommento("");
            setPublica(false);
        })
        .catch((error) => {
            console.error("Errore:", error);
        });
    }


return (
    <form onSubmit={gestisciBottone}>
        <h3>Compila il form</h3>
        <div>
            <label>Nome autore</label>
            <input type="text" value={autore} onChange={gestisciSetAutore} />
        </div>
        <div>
            <label>Titolo dell'opera</label>
            <input type="text" value={libro} onChange={gestisciSetLibro} />
        </div>
        <div>
            <label>Commento</label>
            <textarea rows={4} cols={20} value={commento} onChange={gestisciSetCommento}></textarea>
        </div>
        <div>
            <label>Publica</label>
            <input type="checkbox" checked={publica} onChange={gestisciSetPublica} />
        </div>
        <div>
            <button>Invia</button>
        </div>
    </form>
);
}
export default Form