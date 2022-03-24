import styles from './Container/Container.module.css'

function Rotas (props){
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}


export default Rotas;