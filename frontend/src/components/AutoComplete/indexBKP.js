import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Content } from './styles';

export default function AutoComplete(props) {
  const [isHidden, setIsHidden] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState();

  const onTextChanged = e => {
    const { value } = e.target;
    let suggestionsValue = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value.trim()}`, 'i');
      suggestionsValue = props.data.sort().filter(v => regex.test(v));
    }
    setSuggestions(suggestionsValue);
  };

  function suggestionsSelected(value) {
    setText(value);
    setSuggestions([]);
  }

  const renderSuggestions = () => {
    if (suggestions.length <= 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li key={item} onClick={() => suggestionsSelected(item)}>
            {item}
          </li>
        ))
        /* <span>Name: {props.data.name}</span>
          <span>Contato: {props.data.contact}</span>
          <span>CPF: {props.data.document}</span> */
        }
      </ul>
    );
  };

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Content>
      <input value={text} type="text" name="name" onChange={onTextChanged} />

      {/* <button
          type="button"
          onClick={() => {
            toggleIsHidden();
          }}
        >
          <FaSearch size={25} />
        </button> */}
      {!isHidden && renderSuggestions()}
    </Content>
  );
}
