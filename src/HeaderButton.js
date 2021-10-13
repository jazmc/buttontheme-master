import React from 'react';

function HeaderButton(props) {
  console.log(props.theme);
  return (
    <div>
      <button
        style={{ color: props.theme.color, backgroundColor: props.theme.backgroundColor }}
      >Press me</button>
    </div>
  );
}

export default HeaderButton;
