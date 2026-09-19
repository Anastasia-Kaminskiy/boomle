import React from 'react';
import { createRoot } from 'react-dom/client';

const Test = () => <h1>ron is ginger!</h1>

const root = createRoot(document.getElementById('root'));
root.render(<Test />);