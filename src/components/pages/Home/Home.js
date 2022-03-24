import styles from './Home.module.css'
import savings from '../../../img/savings.svg'
import LinkButton from '../../layout/LinkButton/LinkButton'

export default function Home(){
    return (
       <section className={styles.home_container}>
           <h1>Bem-vindo ao <span>Controle Financeiro</span></h1>
           <hr/>
           <p>Comece a gerenciar o seu orçamento e evite ficar no vermelho</p>
           <br/>
           <LinkButton to="/newBudget" text="Novo Orçamento" />
           <img src={savings} alt="Orçamento" />
       </section>
    )
}