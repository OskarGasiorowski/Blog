import Image from 'next/image';
import { GitHubIcon, LinkedInIcon } from '#icons';
import { Card, IconLink } from '#components';
import client from '#tina/__generated__/client';

export default async function Home() {
    const postListResponse = await client.queries.postConnection();

    return (
        <div className="mx-auto max-w-2xl lg:max-w-5xl flex gap-10 items-center">
            <Image
                src="/avatar.png"
                alt="Avatar"
                height={200}
                width={200}
                className="object-cover overflow-hidden aspect-square h-full animate-blob self-start"
            />
            <div className="max-w-2xl">
                <div className="mt-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Senior Fullstack Developer
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ex a enim malesuada fringilla.
                        Duis nec ex vitae mauris hendrerit ultrices pulvinar vel eros. Sed odio augue, blandit et
                        dapibus in, condimentum id orci.
                    </p>
                    <div className="mt-6 flex gap-6">
                        <IconLink
                            href="https://github.com/OskarGasiorowski"
                            className="group -m-1 p-1"
                            aria-label="Follow on GitHub"
                            target="_blank"
                            icon={GitHubIcon}
                        />
                        <IconLink
                            href="https://www.linkedin.com/in/oskar-gasiorowski/"
                            className="group -m-1 p-1"
                            aria-label="Follow on LinkedIn"
                            target="_blank"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
                <div className="mt-16 max-w-xl">
                    <div className="flex flex-col gap-16">
                        {postListResponse.data.postConnection.edges?.map((edge) => (
                            <Card key={edge?.node?.title} as="article">
                                <Card.Title>
                                    <Card.Link href="/">{edge?.node?.title}</Card.Link>
                                </Card.Title>
                                <Card.Eyebrow as="time" decorate>
                                    {edge?.node?.createdAt}
                                </Card.Eyebrow>
                                <Card.Description>{edge?.node?.description}</Card.Description>
                                <Card.Cta>Read article</Card.Cta>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
