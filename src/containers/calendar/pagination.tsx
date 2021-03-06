import classNames from 'classnames';
import React from 'react';

export default function Pagination(props: {
  goLast: () => {};
  goNext: () => {};
  weekRange: string;
  lastWeekButtonClass: string;
}) {
  const { goLast, goNext, weekRange, lastWeekButtonClass } = props;

  return (
    <div className="pagination">
      <div className="pagination-buttonGroup">
        <button
          type="button"
          className={classNames('pureButton', 'fontSize-s', lastWeekButtonClass)}
          onClick={() => goLast()}
        >
          {'<'}
        </button>
        <button type="button" className="pureButton fontSize-s" onClick={() => goNext()}>
          {'>'}
        </button>
      </div>
      <div className="pagination-hint fontSize-l">{weekRange}</div>
    </div>
  );
}
