import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { OverviewBlocker } from '../src/overviewBlocker/overviewBlocker';

const waitForElementById = (id: string): Promise<HTMLElement> => {
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
};


const LiveDomInjector = ({ nodes }: { nodes: Node[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (containerRef.current) {
            nodes.forEach(node => containerRef.current?.appendChild(node));
        }
    }, [nodes]);

    return <div ref={containerRef} className="original-content-container" />;
};

const main = async () => {
    const aiOverviewBody = await waitForElementById("m-x-content"); 
    const aiOverviewRoot = aiOverviewBody?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
    
    if (!aiOverviewRoot) return;

    const originalNodes = Array.from(aiOverviewRoot.childNodes);
    let reactRoot: Root | null = null;

    window.addEventListener('disableAiToggle', (event) => {
        const eventDetails = (event as CustomEvent).detail;

        if (aiOverviewRoot && eventDetails.isBlockDisabled) {
            if (reactRoot) {
                reactRoot.unmount();
                reactRoot = null;
            }
            
            aiOverviewRoot.innerHTML = '';
            originalNodes.forEach(node => aiOverviewRoot.appendChild(node));
        }
    });

    reactRoot = createRoot(aiOverviewRoot);
    reactRoot.render(
        <OverviewBlocker>
            <LiveDomInjector nodes={originalNodes} />
        </OverviewBlocker>
    );
};

main();