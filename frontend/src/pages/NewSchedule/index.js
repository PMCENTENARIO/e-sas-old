import React from 'react';
import { FaSearch } from 'react-icons/fa';

import Main from '~/components/Main';
import { Content } from './styles';

export default function NewPeople() {
  const content = (
    <Content>
      <h3>Novo Agendamento de Serviço</h3>
      <form>
        <div className="searchPerson">
          <div>
            <input type="text" name="name" />
            <button type="button">
              <FaSearch size={25} />
            </button>
          </div>
          <div>
            <span>Name: Lívia Spiguel</span>
            <span>Contacto: (43) 996320797</span>
            <span>CPF: ****0000-01</span>
          </div>
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
