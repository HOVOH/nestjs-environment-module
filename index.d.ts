declare class EnvironmentModule {
}

declare class EnvironmentService<T> {
    private _env;
    constructor();
    load(): void;
    get env(): T;
}

export { EnvironmentModule, EnvironmentService };
