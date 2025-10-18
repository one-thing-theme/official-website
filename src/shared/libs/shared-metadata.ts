type GeneratedMetadataInput = {
  title: string;
  description: string;
  image?: string;
};

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: "Apps, Software, Product, Teams, Indie Hacker, Indie Maker",
    },
    { name: "creator", content: "moono" },
    { name: "publisher", content: "moono" },
    { name: "application-name", content: "Moono" },
    { name: "google-site-verification", content: "" },
    { name: "category", content: "Websites" },
    { name: "generator", content: "React Router" },
    { name: "pinterest-rich-pin", content: "true" },

    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1732187828243/cc1d78a8-387f-457e-841e-20f9528588e9.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "nyomansunima" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1732187828243/cc1d78a8-387f-457e-841e-20f9528588e9.png",
    },
  ];
}
