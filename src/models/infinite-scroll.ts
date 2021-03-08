export default class InfiniteScrollProps<T> {
  propsData!: T;

  isLoadCompleted?: (isLoadCompleted: boolean) => void;
  isFetchingData?: (isFetching: boolean) => void;
}
