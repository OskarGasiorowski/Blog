import Image from 'next/image';
import { GitHubIcon, LinkedInIcon } from '#icons';
import { IconLink } from '#components';

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
                    </div>
                    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                        <div className="flex flex-col gap-16">
                            {articles.map((article) => (
                                <Article key={article.slug} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function Article({ article }: any) {
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.slug}`}>
                {article.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={article.date} decorate>
                {formatDate(article.date)}
            </Card.Eyebrow>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    )
}
