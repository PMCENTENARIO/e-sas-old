/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

// import { Container } from './styles';

export default function AutoComplete(props) {
  const { suggestions = [] } = props;
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

  function onChange(e) {
    const { value } = e.currentTarget;

    setActiveSuggestion(0);
    setFilteredSuggestions(
      suggestions.filter(suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase() > -1)
      )
    );
    setShowSuggestions(true);
    setUserInput(value);
  }

  function onClick(e) {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
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
        <ul className="suggestions">
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
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        value={userInput}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
      {suggestionListComponent}
    </>
  );
}
