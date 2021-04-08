
export interface ISectionsState {
    allSections: Array<string>;
    currentSection: string;
}

export const initialSectionsState: ISectionsState = {
    allSections: [
        'home',
        'opinion',
        'world',
        'national',
        'politics',
        'business',
        'technology',
        'science',
        'health',
        'sports',
        'arts',
        'books',
        'movies',
        'theater',
        'fashion',
        'food',
        'travel',
        'magazine',
        'realestate',
        'automobiles'
    ],
    currentSection: 'home'
}