export interface Principles {
  content: {
    title: string;
    principles: Principle[];
  }
}

export interface Principle {
  svg: string;
  title: string;
  description: string;
}
