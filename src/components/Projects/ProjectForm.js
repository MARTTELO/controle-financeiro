import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

export default function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <div>
                <Input type="text" text="Mês de referência" name="name" placeholder="Informe o mês" />
            </div>
            <div>
                <Input type="number" text="Orçamento Total" name="budget" placeholder="Informe o  valor total do orçamento para o mês" />
            </div>
            <div>
                <Select name="categoryId" text="Selecione a Categoria"></Select>
            </div>
            <br/>
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}