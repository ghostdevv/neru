import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Neru',
    description:
        'Neru is a small and lightweight file router for your favourite backends',

    themeConfig: {
        repo: 'ghostdevv/neru',
        docsDir: 'docs',
        docsBranch: 'main',

        editLinks: true,
        editLinkText: 'Suggest changes to this page',

        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Adapters', link: '/adapters/' },
        ],

        sidebar: {
            '/guide/': 'auto',
            '/adapters': 'auto',
        },
    },
});
