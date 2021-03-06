export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: {
    //     source: "title",
    //   },
    // },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
