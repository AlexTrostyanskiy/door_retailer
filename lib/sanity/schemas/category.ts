export default {
  name: "category",
  title: "Категория",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Подкатегория',
      name: 'subcategory',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
