export interface TabsProps {
    items: TabItem[];
    defaultActiveKey?: string;
    onChange: (key: string) => void;
}

export interface TabItem {
    key: string;
    title: string;
    content: React.ReactNode;
}
