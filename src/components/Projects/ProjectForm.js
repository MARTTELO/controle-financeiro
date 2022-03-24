
export default function ProjectForm () {
    return (
       <form>
           <div>
           <input type="text" placeholder="Informe o mês " />
           </div>
           <div>
           <input type="number" placeholder="Informe o orçamento total para o mês " />
           </div>
          <div>
          <select name="category_id">
               <option disabled>Selecione a Categoria</option>
           </select>
          </div>
          <div>
              <input type="submit" value="Criar orçamento" />
          </div>
       </form>
    )
}