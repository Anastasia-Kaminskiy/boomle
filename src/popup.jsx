import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const ExtenstionPopup = () => {

    useEffect(() => {
        const fireBlockWrapper = async () => {
            
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            if (!tab || tab.url?.startsWith("chrome://")){
                return;
            }

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["dist/scripts/content.js"]
            });
        };

        fireBlockWrapper();
    },[]);

    return (<h1>shajdhjdhjkashdjkaskhjdhjkas</h1>)
};

const root = createRoot(document.getElementById('root'));
root.render(<ExtenstionPopup />);