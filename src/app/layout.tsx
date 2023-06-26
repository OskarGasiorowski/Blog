import { ReactNode } from 'react';
import './globals.css';

interface Props {
    children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html className="h-full antialiased" lang="en">
            <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
                {children}
            </body>
        </html>
    );
}
