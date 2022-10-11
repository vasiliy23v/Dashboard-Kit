import React, { useEffect } from "react";
import "../../App.scss";
import "./Aside.scss"
import { NAVIGATION_CONFIG, ConfigItem } from "../../configs/homePageConfig";

/* Images */
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Aside = () => {
  const [items, setItems] = useState<Array<ConfigItem>>([...NAVIGATION_CONFIG]);
  const location = useLocation()

  const activeToggler = (li: ConfigItem) => {
    const activeItems = items.map((item) =>
      item.title === li.title
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setItems(activeItems);
  };
  useEffect(() => {
    const activeItems = items.map((item) =>
      item.path === location.pathname
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setItems(activeItems);
  }, []);

  return (
    <aside className="aside">
      <nav className="aside-nav">
        <>
          <Logo />
          {items.map(
            (li) => li && <Icon key={li.iconSrc} {...{ li, activeToggler }} />
            // ClassNames - cn (function)
          )}
          {NAVIGATION_CONFIG.map((elementLi) => {
            elementLi && <li>elementLi.title</li>;
          })}</>
      </nav>
    </aside>
  );
};

export default Aside;
