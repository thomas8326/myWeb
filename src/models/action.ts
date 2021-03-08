interface ReduxAction<T, R = any> {
  type: string;
  payload: T[];
  object?: R;
}

export default ReduxAction;
