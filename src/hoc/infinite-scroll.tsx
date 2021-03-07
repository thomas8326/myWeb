/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function InfiniteScroll<T>(
  WrappedComponent: React.ComponentType<T>,
  callback: (isIntersecting: boolean) => void,
) {
  return class extends React.Component<T> {
    constructor(props: T) {
      super(props);
    }

    componentDidMount() {
      const sensor = document.querySelector('#sensor');
      console.log('in', sensor);
      if (sensor) {
        new IntersectionObserver(
          ([entry]) => {
            console.log(entry.isIntersecting);
            // callback(entry.isIntersecting);
          },
          { root: null, rootMargin: '0px', threshold: 0.5 },
        ).observe(sensor);
      }
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          <span id="sensor" className="sensor" />
        </div>
      );
    }
  };
}
