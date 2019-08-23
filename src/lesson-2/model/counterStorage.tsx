export interface IScope {
    inputValue: number;
    totalValue: number;
}

type TCallback = (scope: IScope) => void;

export class Counter {
    private listeners: TCallback[] = [];
    private scope: IScope;

    constructor(initialScope: IScope) {
        this.scope = initialScope;
    }

    add() {
        const {inputValue, totalValue} = this.scope;
        const result = inputValue + totalValue;
        this.set({inputValue, totalValue: result});
    }

    remove() {
        const {inputValue, totalValue} = this.scope;
        const result = totalValue - inputValue;
        this.set({inputValue, totalValue: result});
    }

    inputChange(inputValue: number) {
        const {totalValue} = this.scope;
        this.set({inputValue, totalValue});
    }

    set(scope: IScope) {
        this.scope = scope;
        this.listeners.forEach((listener: TCallback) => {
            listener(scope);
        });
    }

    get() {
        return this.scope;
    }

    once(listener: TCallback) {
        const {remove} = this.subscribe((_) => {
            listener(_);
            remove();
        });
    }

    subscribe(listener: TCallback) {
        this.listeners = [...this.listeners, listener];
        const remove = () => this.listeners.filter((_) => _ !== listener);
        return {
            remove
        };
    }

    clear() {
        this.listeners = [];
    }
}

export const counterStorage = (initialScope: IScope) => new Counter(initialScope);
