export default {
  name: "post",
  title: "Продукт",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Фотография",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "reference",
      to: { 
        type: "category"
      }
    },
  ],
};
