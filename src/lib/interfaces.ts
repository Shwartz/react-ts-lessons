type Ifn<A> = (...args: any[]) => A;

type IfnNoArg<A> = () => A;
type IfnOneArg<A, B> = (a: A) => B;
type IfntwoArgs<A, B, C> = (a: A, b: B) => C;

interface IMethods<A> {
    bool: boolean;
    left?: Ifn<A>;
}

interface IMethodsPromise<A> {
    bool?: () => Promise<boolean>;
    left?: Ifn<A>;
}

interface Ilens<A, B> {
    get(obj: A): B;

    set(value: B, obj: A): A;
}

// @ts-ignore
export {Ifn, IfnNoArg, IfnOneArg, IfntwoArgs, IMethods, IMethodsPromise, Ilens};
