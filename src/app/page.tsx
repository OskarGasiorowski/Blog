import Image from 'next/image';
import Link from 'next/link';
import { GitHubIcon, LinkedInIcon } from '#icons';

export default function Home() {
    return (
        <main className="sm:px-8 mt-9">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl flex gap-10 items-center">
                        <Image
                            src="/avatar.png"
                            alt="Avatar"
                            height={200}
                            width={200}
                            className="object-cover overflow-hidden aspect-square h-full animate-blob"
                        />
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                Senior Fullstack Developer
                            </h1>
                            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ex a enim malesuada
                                fringilla. Duis nec ex vitae mauris hendrerit ultrices pulvinar vel eros. Sed odio
                                augue, blandit et dapibus in, condimentum id orci.
                            </p>
                            <div className="mt-6 flex gap-6">
                                <Link
                                    href="https://github.com/OskarGasiorowski"
                                    className="group -m-1 p-1"
                                    aria-label="Follow on GitHub"
                                    target="_blank"
                                >
                                    <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/oskar-gasiorowski/"
                                    className="group -m-1 p-1"
                                    aria-label="Follow on LinkedIn"
                                    target="_blank"
                                >
                                    <LinkedInIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
