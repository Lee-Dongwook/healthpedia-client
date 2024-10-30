export interface ContentItem {
  text: string;
  color: string;
}

export interface ContentLine {
  firstLine: ContentItem[];
  secondLine: ContentItem[];
  thirdLine: ContentItem[];
}

export interface Content {
  firstContent: ContentLine;
  secondContent: ContentLine;
  thirdContent: ContentLine;
}
