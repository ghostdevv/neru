import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Neru',
    description:
        'Neru is a small and lightweight file router for your favourite backends',

    head: [['link', { rel: 'icon', href: '/logo.svg' }]],

    themeConfig: {
        repo: 'ghostdevv/neru',
        docsDir: 'docs',
        docsBranch: 'main',
        logo: '/logo.svg',

        footer: {
            message: 'MIT Licensed',
            copyright: 'Copyright © 2021-present Willow (GHOST) & Contributors',
        },

        editLinks: true,
        editLinkText: 'Suggest changes to this page',

        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Config', link: '/config/' },
            { text: 'Adapters', link: '/adapters/' },
        ],

        sidebar: {
            '/adapters': [
                {
                    items: [
                        {
                            text: 'Home',
                            link: '/adapters/',
                        },
                    ],
                },
                {
                    text: 'Official Adapters',
                    items: [
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

            '/config': [
                {
                    text: 'Configuring Neru',
                    items: [
                        {
                            text: 'Config',
                            link: '/config/',
                        },
                    ],
                },
            ],

            '/': [
                {
                    text: 'Guide',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/guide/',
                        },
                        {
                            text: 'Routes',
                            link: '/guide/routes',
                        },
                        {
                            text: 'Configure Neru',
                            link: '/guide/config',
                        },
                    ],
                },
            ],
        },
    },
});
