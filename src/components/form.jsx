import { useState } from "react";
function Form(){
    const [autore, setAutore] = useState("")
    const [libro, setLibro] = useState("")
    const [commento, setCommento] = useState("")
    const [publica, setPublica] = useState("false")

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

    return(
        <form>
            <h3>Compila il form</h3>
            <div>
                <label>Nome autore</label>
                <input type="text" value={autore} onChange={gestisciSetAutore}/>
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
                <input type="checkbox" value={publica} onChange={gestisciSetPublica}/>
            </div>
            <div>
                <button>Invia</button>
            </div>
        </form>
    );
}
export default Form