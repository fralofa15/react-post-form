function Form(){
    return(
        <form>
            <h3>Compila il form</h3>
            <div>
                <label>Nome autore</label>
                <input type="text" />
            </div>
            <div>
                <label>Titolo dell'opera</label>
                <input type="text" />
            </div>
            <div>
                <label>Commento</label>
                <textarea rows={4} cols={20}></textarea>
            </div>
            <div>
                <label>Publica</label>
                <input type="checkbox" />
            </div>
            <div>
                <button>Invia</button>
            </div>
        </form>
    );
}
export default Form