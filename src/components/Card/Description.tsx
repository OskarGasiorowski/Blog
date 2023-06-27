import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function Description({ children }: Props) {
    return <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>;
}
