export default {
  name: "post",
  title: "Продукт",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
    },
    {
      name: "description",
      title: "Описание",
      type: "text",
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
      name: "price",
      title: "Цена",
      type: "number",
    },
    {
      name: "producer",
      title: "Производитель",
      type: "reference",
      to: [{ type: "producer" }]
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
      name: "category",
      title: "Категория",
      type: "reference",
      to: {
        type: "category"
      }
    },
  ],
};
