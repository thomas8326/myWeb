/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const InfiniteContainer = styled.div`
  position: relative;
`;

const Sensor = styled.span`
  position: absolute;
  width: 100%;
  height: 1px;
  visibility: hidden;
`;

export default function InfiniteScroll<T>(
  WrappedComponent: React.ComponentType<T>,
  callback: (isIntersecting: boolean) => void,
) {
  return class extends React.PureComponent<T, { isLoadCompleted: boolean; isFetchingData: boolean }> {
    constructor(props: T) {
      super(props);

      this.state = {
        isLoadCompleted: false,
        isFetchingData: false,
      };
    }

    componentDidMount() {
      const sensor = document.querySelector('#sensor');
      if (sensor) {
        new IntersectionObserver(
          ([entry]) => {
            const { isLoadCompleted, isFetchingData } = this.state;
            callback(entry.isIntersecting && !isLoadCompleted && !isFetchingData);
          },
          { root: null, rootMargin: '0px', threshold: 0.5 },
        ).observe(sensor);
      }
    }

    render() {
      return (
        <InfiniteContainer>
          <WrappedComponent
            isLoadCompleted={(isLoadCompleted: boolean) => this.setState({ isLoadCompleted })}
            isFetchingData={(isFetchingData: boolean) => this.setState({ isFetchingData })}
            {...this.props}
          />
          <Sensor id="sensor" />
        </InfiniteContainer>
      );
    }
  };
}
