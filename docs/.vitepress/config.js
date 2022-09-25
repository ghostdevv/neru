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

        algolia: {
            indexName: 'neru',
            appId: 'C6K7BB34V4',
            apiKey: '025910a10a4517b52d56fab6f5117437',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/ghostdevv/neru' },
            { icon: 'discord', link: 'https://discord.gg/2Vd4wAjJnm' },
        ],

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
                    text: 'Home',
                    items: [
                        {
                            text: 'List of Adapters',
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
                    text: 'Get Started',
                    items: [
                        {
                            text: 'Quick Start',
                            link: '/guide/',
                        },
                        {
                            text: 'Add to existing project',
                            link: '/guide/existing-project',
                        },
                    ],
                },
                {
                    text: 'Routes',
                    items: [
                        {
                            text: 'Route Files',
                            link: '/guide/routes/files',
                        },
                        {
                            text: 'Route Parameters',
                            link: '/guide/routes/parameters',
                        },
                        {
                            text: 'Handlers',
                            link: '/guide/routes/handlers',
                        },
                    ],
                },
            ],
        },
    },
});
