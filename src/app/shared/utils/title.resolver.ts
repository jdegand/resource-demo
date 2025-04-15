import { ResolveFn } from "@angular/router";

export const titleResolver: ResolveFn<string> = (route) => {
    const word = route.paramMap.get('word') ?? 'Missing';
    return `Definitions for ${word}`;
};
