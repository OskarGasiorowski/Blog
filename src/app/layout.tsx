import { ReactNode } from 'react';
import './globals.css';
import Link from 'next/link';

interface Props {
    children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html className="h-full antialiased" lang="en">
            <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
                <div className="fixed inset-0 flex justify-center sm:px-8">
                    <div className="flex w-full max-w-7xl lg:px-8">
                        <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                    </div>
                </div>
                <div className="relative">
                    <header className="pointer-events-none relative z-50 flex flex-col mt-10">
                        <div className="flex flex-1 justify-end md:justify-center">
                            <nav>
                                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                    <li>
                                        <Link
                                            href="/about"
                                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    {children}
                </div>
            </body>
        </html>
    );
}
