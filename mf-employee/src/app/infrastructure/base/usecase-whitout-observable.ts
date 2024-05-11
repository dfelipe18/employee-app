export interface UseCaseWhitoutObservable<S, T> {
  execute(params: S): T;
}
