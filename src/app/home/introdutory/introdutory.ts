export interface Introdutory {
  content: {
    title: string,
    description: string,
    button: {
      haveButton: boolean,
      externalLink: boolean,
      link: string,
      buttonAlt: string,
      buttonTitle: string,
    },
    photo: {
      src: string,
      alt: string
    }
  }
}
