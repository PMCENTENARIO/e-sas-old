import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Content } from './styles';

export default function AutoSuggest(props) {
  return (
    <Content>
      <Typeahead
        className="AutoSuggest"
        minLength="2"
        labelKey="name"
        options={props.data}
        placeholder="Pesquisar pessoa..."
      />
    </Content>
  );
}
