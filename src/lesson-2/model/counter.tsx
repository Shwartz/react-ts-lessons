export interface IScope {
    inputValue: number;
    totalValue: number;
}

type TCallback = (scope: IScope) => void;

class Counter {
    private listener: TCallback[] = [];
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

    inputChange(value: number) {
        const {totalValue} = this.scope;
        this.set({inputValue: value, totalValue});
    }

    set(scope: IScope) {
        this.scope = scope;
        this.listener.forEach((handler) => {
            handler(scope);
        });
    }

    get() {
        return this.scope;
    }

    update(handler: TCallback) {
        this.listener = [...this.listener, handler];
    }

    clear() {
        this.listener = [];
    }
}

export const counter = (initialScope: IScope) => new Counter(initialScope);
