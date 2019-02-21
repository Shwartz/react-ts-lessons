import {Ifn} from '../../lib/interfaces';

export interface IScope {
    inputValue: number;
    updateValue: number;
}

class Counter {
    handlers: Array<Ifn<void>> = [];
    scope: IScope;

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

    inputChange(val: number) {
        const {updateValue} = this.scope;

        this.set({inputValue: +val, updateValue});
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

    update(handler: Ifn<void>) {
        this.handlers = [...this.handlers, handler];
        return {};
    }

    clear = () => {
        this.handlers = [];
    }
}

export const counter = (initialScope: IScope) => new Counter(initialScope);
