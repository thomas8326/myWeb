interface ReduxAction<T> {
  type: string;
  payload: T[];
  object: T;
}

export default ReduxAction;
