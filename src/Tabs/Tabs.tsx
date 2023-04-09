import { TabsProps } from "./Tabs.types";
import classes from "./Tabs.module.less";
import React from "react";

function Tabs(props: TabsProps) {
    const [activeKey, setActiveKey] = React.useState(
        props.defaultActiveKey ?? props.items[0]?.key
    );

    const handleTabClick = (key: string) => {
        setActiveKey(key);
        props.onChange && props.onChange(key);
    };

    return (
        <div className={classes.tabContainer}>
            <div className={classes.tabContent}>
                {props.items.map((item) => (
                    <div key={item.key}>
                        {item.key === activeKey && item.content}
                    </div>
                ))}
            </div>
            <div className={classes.tabTitleView}>
                {props.items.map((item) => {
                    return (
                        <div
                            key={item.key}
                            className={
                                item.key === activeKey
                                    ? classes.activeTabTitle
                                    : classes.tabTitle
                            }
                            onClick={() => handleTabClick(item.key)}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tabs;
