export interface IScope {
    inputValue: number;
    updateValue: number;
}

type TCallback = (scope: IScope) => void;

class Counter {
    private handlers: TCallback[] = [];
    private scope: IScope;

    constructor(initialScope: IScope) {
        this.scope = initialScope;
    }

    add() {
        const {inputValue, updateValue} = this.scope;
        const result = inputValue + updateValue;
        this.set({inputValue, updateValue: result});
    }

    remove() {
        const {inputValue, updateValue} = this.scope;
        const result = updateValue - inputValue;
        this.set({inputValue, updateValue: result});
    }

    inputChange(value: number) {
        const {updateValue} = this.scope;
        this.set({inputValue: value, updateValue});
    }

    set(scope: IScope) {
        this.scope = scope;
        this.handlers.forEach((handler) => {
            handler(scope);
        });
    }

    get() {
        return this.scope;
    }

    update(handler: TCallback) {
        this.handlers = [...this.handlers, handler];
    }

    clear() {
        this.handlers = [];
    }
}

export const counter = (initialScope: IScope) => new Counter(initialScope);
