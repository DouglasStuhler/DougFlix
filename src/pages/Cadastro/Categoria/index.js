/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonCad from '../../../components/components/Button/ButtonCad';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    desc: '',
    cor: '#000000',
  };

  // useState: dois parametros, um o dado (normalmente array) e o segundo uma funçao para mudar o dado
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  // Passa dois parametros, um oq vai acontecer, e o segundo quando vai acontecer (array)
  useEffect(() => {

    const urlTop = 'http://localhost:8080/categorias';
    fetch(urlTop).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
        ]);
    });
    
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       desc: 'Categorai 1',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       desc: 'Categorai 2',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, [
    // value.nome, (ex de evento, quando o value.nome mudar, ativa o useEffects)
  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Digite a Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="desc"
          value={values.desc}
          onChange={handleChange}
        />

        <FormField
          label="Coloque uma cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <ButtonCad>
          Cadastrar
        </ButtonCad>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categorias, indice) => (
          <li key={`${categorias}${indice}`}>
            {categorias.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para o Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
