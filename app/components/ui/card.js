// components/ui/card.js
import React from 'react';

const Card = ({ children, ...props }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden" {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, ...props }) => (
  <div className="p-6" {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, ...props }) => (
  <h3 className="text-xl font-bold" {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, ...props }) => (
  <div className="p-6 pt-0" {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardContent };
