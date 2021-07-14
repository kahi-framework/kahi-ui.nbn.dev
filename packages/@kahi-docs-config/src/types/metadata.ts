export type IMetadataPrimitives = boolean | null | number | string;

export interface IMetadataProperties {
    [key: string]:
        | IMetadataPrimitives
        | IMetadataPrimitives[]
        | IMetadataProperties
        | IMetadataProperties[];
}
