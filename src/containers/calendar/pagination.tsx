// import classNames from 'classnames';
import React from 'react';
import styled, { css } from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationButton = styled.div`
  box-sizing: border-box;
  padding: 7px 18px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  cursor: pointer;

  ${(props: { disabled?: boolean }) =>
    props.disabled &&
    css`
      color: #c0c4cc;
      background-color: #fff;
      background-image: none;
      border-color: #ebeef5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export default function Pagination(props: {
  goLast: () => void;
  goNext: () => void;
  disabledPrev: boolean;
  weekRange: string;
}) {
  // const { goLast, goNext, weekRange, lastWeekButtonClass } = props;
  const { weekRange, disabledPrev, goLast, goNext } = props;

  return (
    <PaginationContainer>
      <PaginationButton disabled={disabledPrev} onClick={() => goLast()}>
        {'<'}
      </PaginationButton>
      <PaginationButton onClick={() => goNext()}>{'>'}</PaginationButton>
      <div className="L-margin-m">{weekRange}</div>
    </PaginationContainer>
  );
}
