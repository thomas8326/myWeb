import React from 'react';

function DetailHeader(props: { onBackClick: () => void; title: string }) {
  const { onBackClick, title } = props;
  return (
    <div className="flex-row flex-align-center padding-m">
      <div onClick={() => onBackClick()}>Outline</div>
      <span className="margin-center title-3">{title}</span>
    </div>
  );
}

export default DetailHeader;
