import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Neru',
    description:
        'Neru is a small and lightweight file router for your favourite backends',

    themeConfig: {
        repo: 'ghostdevv/neru',
        docsDir: 'docs',
        docsBranch: 'main',
        logo: './placeholder-cheese.png',

        editLinks: true,
        editLinkText: 'Suggest changes to this page',

        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Adapters', link: '/adapters/' },
        ],

        sidebar: {
            '/adapters': 'auto',

            '/': [
                {
                    text: 'Guide',
                    children: [
                        {
                            text: 'Getting Started',
                            link: '/guide/',
                        },
                        {
                            text: 'Routes',
                            link: '/guide/routes',
                        },
                    ],
                },
            ],
        },
    },
});
