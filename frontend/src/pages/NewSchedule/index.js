import React from 'react';
import AutoComplete from '~/components/AutoComplete';

import Main from '~/components/Main';
import { Content } from './styles';

export default function NewPeople() {
  const listPeople = ['Lívia', 'Paulo', 'Maycon', 'Adriana', 'Luiz'];
  const person = {
    name: 'Lívia Spiguel',
    contact: '43996320797',
    document: '000000000-01',
  };

  const content = (
    <Content>
      <h3>Novo Agendamento de Serviço</h3>
      <form>
        <div className="AutoComplete-Compont">
          <AutoComplete suggestions={listPeople} />
        </div>

        <fieldset>
          <input type="text" name="zip_code" placeholder="CEP" />
          <div>
            <input type="text" name="street" placeholder="Logradouro" />
            <input type="number" name="number" placeholder="Número" />
          </div>
          <input type="text" name="district" placeholder="Bairro" />
          <select name="task">
            <option value="">Selecionar</option>
          </select>
        </fieldset>
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Informações adcionais"
        />
        <button type="submit">Salvar</button>
      </form>
    </Content>
  );
  return <Main content={content} />;
}
