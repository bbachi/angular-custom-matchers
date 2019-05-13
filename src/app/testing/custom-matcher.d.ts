// tslint:disable-next-line:no-namespace
declare namespace jasmine {
    interface Matchers<T> {
        toBeOlderThan(expected: any, expectationFailOutput?: any): boolean;
    }
}
