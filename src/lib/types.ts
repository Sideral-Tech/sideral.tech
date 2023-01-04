export interface Subsystem {
    name: string;
    categories: string[];
    description: string;
    url: string;
    modules: Module[];
}

export interface Module {
    name: string;
    logo: string;
    url: string;
}