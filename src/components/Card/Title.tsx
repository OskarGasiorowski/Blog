import { ElementType, ReactNode } from 'react';

interface Props {
    as?: ElementType;
    children: ReactNode;
}

export function Title({ as: Comp = 'h2', children }: Props) {
    return <Comp className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{children}</Comp>;
}
