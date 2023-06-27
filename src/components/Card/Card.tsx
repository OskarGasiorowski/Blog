import { ElementType, ReactNode } from 'react';
import clsx from 'clsx';
import { Link as InternalLink } from './Link';
import { Title as InternalTitle } from './Title';
import { Cta as InternalCta } from './Cta';
import { Eyebrow as InternalEyebrow } from './Eyebrow';
import { Description as InternalDescription } from './Description';

interface Props {
    as?: ElementType;
    className?: string;
    children: ReactNode;
}

export function Card({ as: Comp = 'div', className, children }: Props) {
    return <Comp className={clsx(className, 'group relative flex flex-col items-start')}>{children}</Comp>;
}

export namespace Card {
    export const Link = InternalLink;
    export const Title = InternalTitle;
    export const Eyebrow = InternalEyebrow;
    export const Description = InternalDescription;
    export const Cta = InternalCta;
}
