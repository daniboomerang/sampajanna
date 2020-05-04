type Colors = Record<string, string>;
type TextColors = Record<string, string>;

enum Size {
  sm = 'SM',
  md = 'MD',
  lg = 'LG',
}

type Image = {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fluid: any;
};

type Tag = {
  name: string;
};

type Location = {
  pathname: string;
};

interface Icon {
  color?: string;
  colorHover?: string;
  strokeColor?: string;
  strokeColorHover?: string;
  height?: number;
  width?: number;
  className?: string;
}

type ContentNode = {
  childMarkdownRemark: {
    html: string;
  };
};

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  seoMetaTags: string;
  coverImage: Image;
  date: string;
  contentNode: ContentNode;
  tags: Array<Tag>;
}

interface SeoMetaTags {
  tags: {
    tagName: string;
    content: string;
    attributes: {
      property: string;
      content: string;
      name: string;
    };
  };
}

export { Colors, ContentNode, Icon, Image, Location, Post, SeoMetaTags, Size, Tag, TextColors };
