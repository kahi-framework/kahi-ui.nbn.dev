export type ISearchIndex = readonly ISearchRecord[];

export interface ISearchRecord {
    readonly identifier: string;

    readonly text: string;

    readonly title: string;
}
