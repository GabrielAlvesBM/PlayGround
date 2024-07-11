import styles from "./Pessoa.module.css"
import PropsType from "prop-types"

function Pessoa ({foto, nome, idade, profissao}) {
    return (
        <>
            <img className={styles.foto} src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </>
    );
}

Pessoa.propsType = {
    foto: PropsType.object,
    nome: PropsType.string.isRequired,
    idade: PropsType.number,
    profissao: PropsType.string,
}

export default Pessoa;