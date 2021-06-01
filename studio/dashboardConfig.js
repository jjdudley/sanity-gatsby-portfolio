export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b6b6981a416200b844690e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xbtvyzx9',
                  apiId: '5779fd34-c04d-4df5-a2dd-25af3d6c4946'
                },
                {
                  buildHookId: '60b6b698029327009ae18243',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-c9s6wjen',
                  apiId: '77079a70-bf61-483a-a891-2f1a0b522826'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jjdudley/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-c9s6wjen.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
