import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(info){
    setValue(
      info.target.getAttribute("name"),
      info.target.value
    );
    
  }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();

          setCategorias([
            ...categorias,
            values.nome
          ]);

          setValues(valoresIniciais);
        }}>

          <FormField 
            label="Digite a Categoria:"
            type="text"
            name="nome"
            value={values.nome} 
            onChange={handleChange}
          />

          <FormField 
            label="Descrição:"
            type=""
            value={values.descricao} 
            onChange={handleChange}
          />

          <FormField 
            label="Coloque uma cor:"
            type="color"
            value={values.cor} 
            onChange={handleChange}
          />
          
          
          

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categorias, indice) => {
            return(
              <li key={`${categorias}${indice}`}>
                {categorias}
              </li>
            )
          })}
        </ul>

        <Link to="/">
           Ir para o Home
        </Link>
      </PageDefault>
    )
  };

export default CadastroCategoria;