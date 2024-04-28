// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
var Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    variant: {
      type: "enum",
      options: ["painting", "tilling", "miscellaneous"],
      default: "miscellaneous"
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the project"
    },
    date: {
      type: "date",
      description: "The date the project was published",
      required: true
    },
    categories: {
      type: "list",
      of: Category,
      description: "The categories of the project"
    },
    thumbnailImg: {
      type: "string",
      description: "Project thumbnail image"
    },
    thumbnailImgAlt: {
      type: "string",
      description: "Alt text for the project thumbnail image"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var PrivacyPolicy = defineDocumentType(() => ({
  name: "PrivacyPolicy",
  filePathPattern: "privacy-policy/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the privacy policy",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Project, PrivacyPolicy],
  mdx: {
    rehypePlugins: [
      rehypeSlug
    ]
  }
});
export {
  Category,
  PrivacyPolicy,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3FZSTY5A.mjs.map
