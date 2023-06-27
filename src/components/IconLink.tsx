import { GitHubIcon } from '#icons';
import Link from 'next/link';
import { ComponentProps, ComponentType, SVGProps } from 'react';

interface Props extends ComponentProps<typeof Link> {
    icon: ComponentType<SVGProps<any>>;
}

export function IconLink({ icon: Icon, ...linkProps }: Props) {
    return (
        <Link {...linkProps}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
}
