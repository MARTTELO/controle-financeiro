import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useState, useEffect } from 'react';



export default function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: 'GET',
        headers: {
            'Content-Type': 'applicatiom/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <form className={styles.form}>
            <div>
                <Input type="text" text="Mês de referência" name="name" placeholder="Informe o  mês" />
            </div>
            <div>
                <Input type="number" text="Orçamento Total" name="budget" placeholder="Informe o  valor total do orçamento para o mês" />
            </div>
            <div>
                <Select name="category_id" text="Selecione a Categoria" options={categories} />
            </div>
            <br />
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}