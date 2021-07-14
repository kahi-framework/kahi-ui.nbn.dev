export type IFrontmatterFence = [string, string];

export type IFrontmatterParser = (text: string) => IFrontmatterProperties;

export type IFrontmatterPrimitives = boolean | null | number | string;

export interface IFrontmatterProperties {
    [key: string]:
        | IFrontmatterPrimitives
        | IFrontmatterPrimitives[]
        | IFrontmatterProperties
        | IFrontmatterProperties[];
}
