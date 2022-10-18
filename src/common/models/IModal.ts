export interface IModal {
    visible: boolean;
    children: JSX.Element;
    title: string;
    size: "small" | "medium" | "large" | "full"
}
