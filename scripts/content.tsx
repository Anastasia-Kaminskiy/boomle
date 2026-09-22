import React from 'react';
import { createRoot } from 'react-dom/client';
import parse from 'html-react-parser';
import { OverviewBlocker } from '../src/overviewBlocker/overviewBlocker';

const setGlobalCss = () => {
    const cssRules = `
        .container::-webkit-scrollbar { 
            display: none;
        };
    `;

    const style = document.createElement('style');

    style.textContent = cssRules;
    style.id = "nastia-was-here";

    document.head.append(style);
};

const aiOverviewBody = document.getElementById("m-x-content");
const aiOverviewRoot = aiOverviewBody?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;

if (aiOverviewRoot){
    setGlobalCss();

    const root = createRoot(aiOverviewRoot);
    root.render(<OverviewBlocker>{parse(aiOverviewRoot.innerHTML)}</OverviewBlocker>);
};