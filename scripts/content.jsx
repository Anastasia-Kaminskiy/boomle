import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Test = () => {
    useEffect(() => {console.log("test is complete!!!!")});
};

const root = createRoot(document.getElementById('m-x-content'));
root.render(<Test />);