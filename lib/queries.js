


export const templatesQuery = `*[_type == "template"]{
  _id,
  title,
  slug,
  category,
  description,
  rating,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  canvaLink,
  keyFeatures
}`
