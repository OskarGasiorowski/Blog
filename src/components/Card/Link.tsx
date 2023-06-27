import { ComponentProps, ReactNode } from 'react';
import NextLink from 'next/link';

interface Props extends ComponentProps<typeof NextLink> {
    children: ReactNode;
}

export function Link({ children, ...linkProps }: Props) {
    return (
        <>
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <NextLink {...linkProps}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{children}</span>
            </NextLink>
        </>
    );
}
