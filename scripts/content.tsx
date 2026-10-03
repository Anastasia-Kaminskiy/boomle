import React from 'react';
import { createRoot } from 'react-dom/client';
import parse from 'html-react-parser';
import { OverviewBlocker } from '../src/overviewBlocker/overviewBlocker';

const waitForElementById = (id: string) : Promise<HTMLElement> => {
    return new Promise((resolve) => {
        const existingElement = document.getElementById(id);
        if (existingElement) {
            return resolve(existingElement);
        }

        const observer = new MutationObserver((_, obs) => {
            const targetElement = document.getElementById(id);
            if (targetElement) {
                obs.disconnect();
                resolve(targetElement);
            }
        });

        observer.observe(document.body || document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}

const main = async () => {
    const aiOverviewBody = await waitForElementById("m-x-content");

    const aiOverviewRoot = aiOverviewBody?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
    console.log(aiOverviewBody);

    if (aiOverviewRoot){
        const root = createRoot(aiOverviewRoot);
        const aiOveviewContent = parse(aiOverviewRoot.innerHTML); // html to react element
        
        root.render(<OverviewBlocker>{aiOveviewContent}</OverviewBlocker>);
    };
};

main();