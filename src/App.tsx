import classes from "./App.module.less";
import { Tabs } from "./Tabs";

function App() {
    const mockTabList = [
        {
            key: "tab1",
            title: "Tab 1",
            content: "Tab 1 Content",
        },
        {
            key: "tab2",
            title: "Tab 2",
            content: "Tab 2 Content",
        },
        {
            key: "tab3",
            title: "Tab 3",
            content: "Tab 3 Content",
        },
    ];

    return (
        <div className={classes.App}>
            <Tabs
                items={mockTabList}
                defaultActiveKey={mockTabList[1].key}
                onChange={() => {}}
            />
        </div>
    );
}

export default App;
