import React from "react";

const Header = (props) => {
  const { addItem } = props;

  const [value, setValue] = React.useState("");

  const _handleChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const _handleKeyUp = React.useCallback(
    (e) => {
      if (e.keyCode === 13 && value) {
        addItem(value);
      }
    },
    [value, addItem]
  );

  return (
    <div>
      <input
        type="text"
        data-test="input"
        value={value}
        onChange={_handleChange}
        onKeyUp={_handleKeyUp}
      />
    </div>
  );
};

export default Header;
