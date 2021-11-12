import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";
import Search from "./Search";
import Multiline from "./Multiline";
import Dropdown from "./Dropdown";
import searchIcon from "../../assets/icons/searchGrey.svg";
import cancelIcon from "../../assets/icons/cancel.svg";
import chevronDown from "../../assets/icons/chevronDown.svg";

const handleToggleShow = (e, id) => {
  const toggler = e.target;
  const field = document.querySelector(`#${id}`);

  if (field.type === "password") {
    field.type = "text";
    toggler.innerText = "Hide";
  } else {
    field.type = "password";
    toggler.innerText = "Show";
  }
};

const FormGroup = ({
  className,
  fieldStyle,
  inputType,
  name,
  placeholder,
  required = true,
  list = [],
  defaultValue,
  disabled,
  readOnly,
}) => {
  const [showLabel, setShowLabel] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [listOpen, setListOpen] = useState(false);

  const toggleLabel = (e) => {
    if (e.target.value) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };

  const handleBlur = (e) => {
    toggleLabel(e);
    e.target.value?.length
      ? document.querySelector(`#${name}`).classList.add("contentFilled")
      : document.querySelector(`#${name}`).classList.remove("contentFilled");

    // !searchVal.length &&
    //   listOpen &&
    //   document.querySelector(`#${name}`).classList.remove("isOpen");
  };

  const toggleList = (open) => {
    if (readOnly) return;

    if (open) {
      setListOpen(true);
      document.querySelector(`#${name}`).classList.add("isOpen");
    } else {
      setListOpen(false);
      document.querySelector(`#${name}`).classList.remove("isOpen");
    }
  };

  const handleSelect = (e, l) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchVal(l);
    toggleList(false);
    setShowLabel(true);
    document.querySelector(`#${name}`).classList.add("contentFilled");
  };

  useEffect(() => {
    if (defaultValue?.length) {
      setShowLabel(true);
    }
  }, [defaultValue]);

  return (
    <>
      {fieldStyle === "shortText" && (
        <TextField
          id={name}
          className={className}
          fieldStyle={fieldStyle}
          disabled={disabled}
        >
          <input
            className="textSmall"
            type={inputType}
            id={name}
            name={name}
            placeholder={placeholder}
            onBlur={handleBlur}
            onChange={toggleLabel}
            required={required || false}
            defaultValue={defaultValue}
            disabled={disabled}
            readOnly={readOnly}
          />
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
          {inputType === "password" && (
            <span
              className="toggleShowText"
              onClick={(e) => handleToggleShow(e, name)}
            >
              Show
            </span>
          )}
        </TextField>
      )}
      {fieldStyle === "multiline" && (
        <Multiline
          id={name}
          className={className}
          fieldStyle={fieldStyle}
          disabled={disabled}
        >
          <>
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              required={required || false}
              defaultValue={defaultValue}
              onBlur={handleBlur}
              onChange={toggleLabel}
              disabled={disabled}
              readOnly={readOnly}
            />
            {showLabel && <label htmlFor={name}>{placeholder}</label>}
          </>
        </Multiline>
      )}
      {fieldStyle === "search" && (
        <Search
          id={name}
          className={className}
          fieldStyle={fieldStyle}
          disabled={disabled}
        >
          <div className="header">
            <img src={searchIcon} alt="icon" className="icon left" />
            <input
              type="text"
              id={name}
              name={name}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onBlur={handleBlur}
              className="searchInput"
              placeholder={placeholder}
              onFocus={() => toggleList(true)}
              readOnly={readOnly}
            />
            {listOpen && (
              <img
                src={cancelIcon}
                alt="down"
                className="icon right"
                onClick={() => toggleList()}
              />
            )}
          </div>
          <div className="list">
            {!!list?.length &&
              list
                .filter((item) => item.toLowerCase().match(searchVal))
                .map((item) => (
                  <button
                    key={item}
                    className="listItem"
                    onClick={(e) => handleSelect(e, item)}
                  >
                    {item}
                  </button>
                ))}
          </div>
        </Search>
      )}

      {fieldStyle === "dropdown" && (
        <Dropdown
          id={name}
          className={className}
          fieldStyle={fieldStyle}
          disabled={disabled}
        >
          <div
            className="header"
            onClick={() =>
              document.querySelector(`#${name}`).classList.toggle("isOpen")
            }
          >
            <input
              type="text"
              id={name}
              name={name}
              value={searchVal}
              placeholder={placeholder}
              readOnly
            />
            <img src={chevronDown} alt="down" className="icon right toggle" />
          </div>
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
          <div className="list">
            {!!list?.length &&
              list.map((item) => (
                <button
                  key={item}
                  className="listItem"
                  onClick={(e) => handleSelect(e, item)}
                >
                  {item}
                </button>
              ))}
          </div>
        </Dropdown>
      )}
    </>
  );
};

FormGroup.propTypes = {
  className: PropTypes.string,
  fieldStyle: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.array,
  disabled: PropTypes.bool,
};

export default FormGroup;
