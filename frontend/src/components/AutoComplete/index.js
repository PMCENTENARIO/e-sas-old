/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Content, BoxInfo } from './styles';
import { verifyFilled } from '~/store/modules/schedule/actions';

export default function AutoComplete(props) {
  const { suggestions = [] } = props;
  const dispatch = useDispatch();

  const [isHidden, setIsHidden] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [personInput, setPersonInput] = useState({});

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  function onChange(e) {
    const { value } = e.target;

    const suggestionListName = suggestions.map(
      suggestion => `${suggestion.name} | CPF: ${suggestion.document}`
    );

    const filteredSuggestion = suggestionListName.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    // console.tron.log(filteredSuggestion);
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestion);
    setShowSuggestions(true);
    setUserInput(value);
  }

  function onClick(e) {
    let valueInput = e.target.innerText;

    if (userInput.length > 0) {
      [valueInput] = valueInput.split('|', 1);
      valueInput = valueInput.trim();

      setActiveSuggestion(0);
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setUserInput(valueInput);

      suggestions.map(suggestion => {
        if (suggestion.name === valueInput) {
          setPersonInput(suggestion);
        }
      });
      toggleIsHidden();
      dispatch(verifyFilled());
    }
  }

  function onKeyDown(e) {
    // e.preventDefault();
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(setFilteredSuggestions([activeSuggestion]));
      e.preventDefault();
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  }

  let suggestionListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionListComponent = (
        <ul>
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestion) {
              className = 'suggestion-active';
            }
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionListComponent = (
        <div className="no-suggestions">
          <em>Nenhuma pessoa encontrada!</em>
          <Link to="/newpeople">
            <button type="button">Inserir nova pessoa</button>
          </Link>
        </div>
      );
    }
  }
  return (
    <Content>
      <input
        type="text"
        onChange={onChange}
        value={userInput}
        onClick={onClick}
        onKeyDown={onKeyDown}
        placeholder="Buscar pessoa..."
      />
      {suggestionListComponent}
      {isHidden && (
        <BoxInfo>
          {console.tron.log(personInput.id)}
          <span>Name: {personInput.name}</span>
          <span>Contato: {personInput.contact}</span>
          <span>CPF: {personInput.document}</span>
        </BoxInfo>
      )}
    </Content>
  );
}

AutoComplete.propTypes = {
  suggestions: PropTypes.element.isRequired,
};
