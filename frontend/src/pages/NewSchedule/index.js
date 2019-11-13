import React from 'react';
import { useSelector } from 'react-redux';
import AutoComplete from '~/components/AutoComplete';

import Main from '~/components/Main';
import { Wrapper } from './styles';

export default function NewPeople() {
  const listPeople = [
    {
      id: 1,
      name: 'Lívia Spiguel',
      contact: '43996320797',
      document: '000000000-01',
    },
    {
      id: 2,
      name: 'Paulo Spiguel',
      contact: '43996320797',
      document: '000000000-02',
    },
    {
      id: 3,
      name: 'Maycon Henrique',
      contact: '43996320797',
      document: '000000000-03',
    },
    {
      id: 4,
      name: 'Adriana Garcez',
      contact: '43996320797',
      document: '000000000-04',
    },
    {
      id: 5,
      name: 'Luiz Roberto',
      contact: '43996320797',
      document: '000000000-05',
    },
  ];

  const verifyInput = useSelector(state => state.schedule.filledInput);

  const content = (
    <Wrapper>
      <h3>Novo Agendamento de Serviço</h3>
      <form>
        <AutoComplete suggestions={listPeople} />
        <fieldset>
          <input
            disabled={verifyInput}
            type="text"
            name="zip_code"
            placeholder="CEP"
          />
          <div>
            <input
              disabled={verifyInput}
              type="text"
              name="street"
              placeholder="Logradouro"
            />
            <input
              disabled={verifyInput}
              type="number"
              name="number"
              placeholder="Número"
            />
          </div>
          <input
            disabled={verifyInput}
            type="text"
            name="district"
            placeholder="Bairro"
          />
          <select disabled={verifyInput} name="task">
            <option value="">Selecionar</option>
          </select>
        </fieldset>
        <textarea
          disabled={verifyInput}
          name="message"
          cols="30"
          rows="5"
          placeholder="Informações adcionais"
        />
        <button
          disabled={verifyInput}
          type="submit"
          onClick={() => {
            alert('ok');
          }}
        >
          Salvar
        </button>
      </form>
    </Wrapper>
  );

  return <Main content={content} />;
}
