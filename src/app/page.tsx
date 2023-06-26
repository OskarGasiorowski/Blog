import Image from 'next/image';

export default function Home() {
    return (
        <div className="sm:px-8 mt-9">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl flex gap-10 items-center">
                        <Image
                            src="/avatar.png"
                            alt="Avatar"
                            height={200}
                            width={200}
                            className="object-cover overflow-hidden h-40 w-40 animate-blob"
                        />
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                Senior Fullstack Developer
                            </h1>
                            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc ac ex a enim malesuada
                                fringilla. Duis nec ex vitae mauris hendrerit
                                ultrices pulvinar vel eros. Sed odio augue,
                                blandit et dapibus in, condimentum id orci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
