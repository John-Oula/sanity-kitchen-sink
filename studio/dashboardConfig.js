export default {
  widgets: [
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
                  buildHookId: '61ff87bccab90057dbf87e61',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-97zr29ss',
                  apiId: 'ac177153-72a5-4994-a3de-772d2588ebfa'
                },
                {
                  buildHookId: '61ff87bcf95e016392905416',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cazxb49c',
                  apiId: '66eb3d1e-4804-4932-a321-c5245c4e2cfb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/John-Oula/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cazxb49c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
