import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
    branch,
    clientId: 'ab53adba-562b-49a8-9d06-32a03b2d6a84', // Get this from tina.io
    token: process.env.TINA_TOKEN || '', // Get this from tina.io

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: '',
            publicFolder: 'public',
        },
    },
    schema: {
        collections: [
            {
                name: 'post',
                label: 'Posts',
                path: 'content/posts',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                        required: true,
                    },
                    {
                        type: 'datetime',
                        name: 'createdAt',
                        label: 'Created at',
                        required: true,
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                    },
                ],
            },
        ],
    },
});
