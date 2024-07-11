import { useState } from "react";
import styles from "./Form.module.css"

function Form() {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState();

    function printName (event) {
        event.preventDefault();
        setUserName(name)
        console.log(`Nome: ${name}`);
    }

    return (
        <div>
            <form className={styles.form} onSubmit={printName}>
                <input autoComplete="off" autoFocus="on" name="name" type="text" placeholder="Escreve um nome ae seu porra!" onChange={(e) => setName(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
            {userName && (
                <p>Seu nome é {userName}, né...</p>
            )}
        </div>
    );
}

export default Form;