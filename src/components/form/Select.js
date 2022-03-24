import styles from './Select.module.css'


export default function Select({text, name, option, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
            <option value={name}>Selecione uma opção: </option>
            </select>
        </div>
    )
}