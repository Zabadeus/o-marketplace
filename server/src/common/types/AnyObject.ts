export declare type AnyObject<T = any> = {
    [K in keyof T]?: T[K];
};
