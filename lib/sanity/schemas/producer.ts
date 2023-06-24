export default {
    name: 'producer',
    title: 'Производитель',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Название',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'logo',
        title: 'Логотип',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'logo',
      },
    },
  }
  