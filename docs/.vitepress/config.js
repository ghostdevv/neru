import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Neru',
    description:
        'Neru is a small and lightweight file router for your favourite backends',

    head: [['link', { rel: 'icon', href: '/placeholder-cheese.png' }]],

    themeConfig: {
        repo: 'ghostdevv/neru',
        docsDir: 'docs',
        docsBranch: 'main',
        logo: '/placeholder-cheese.png',

        editLinks: true,
        editLinkText: 'Suggest changes to this page',

        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Adapters', link: '/adapters/' },
        ],

        sidebar: {
            '/adapters': [
                {
                    text: 'Home',
                    link: '/adapters/',
                },
                {
                    text: 'Official Adapters',
                    children: [
                        {
                            text: 'Express',
                            link: '/adapters/express',
                        },
                        {
                            text: 'Hapi',
                            link: '/adapters/hapi',
                        },
                    ],
                },
            ],

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
