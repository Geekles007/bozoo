export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const nestLayout = (
    parent: (...page: any) => void,
    child: (...page: any) => void
) => (page: any) => parent(child(page));
