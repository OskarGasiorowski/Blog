import client from '#tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default async function Post({ params }: { params: { slug: string } }) {
    const { data } = await client.queries.post({
        relativePath: params.slug + '.md',
    });

    return <TinaMarkdown content={data.post.body} />;
}
