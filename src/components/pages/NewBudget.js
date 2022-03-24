import ProjectForm from '../Projects/ProjectForm'
import styles from './NewBudget/NewBudget.module.css'

export default function NewBudget(){
    return (
        <div className={styles.newBudget_container}>
            <h1>Criar Orçamento</h1>
            <hr/>
            <p>Crie seu orçamento para depois adicionar as categorias de despesas</p>
            <ProjectForm />
        </div>
    )
}