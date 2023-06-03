// Cria a interface para os itens do feedback
export interface IFeedbackItem {
  title: string;
  description: string;
  photo: string;
  name: string;
  familiarity: string;
}

// Cria a interface para o conteúdo do feedback
export interface IFeedbackContent {
  title: string;
  subtitle: string;
  feedback: IFeedbackItem[];
}

// Cria a interface para o botão
export interface IButton {
  haveButton: boolean;
  externalLink: boolean;
  link: string;
  buttonAlt: string;
  buttonTitle: string;
}

// Cria a interface para a foto
export interface IPhoto {
  src: string;
  alt: string;
}

// Cria a interface para o conteúdo introdutório
export interface IIntroductoryContent {
  title: string;
  description: string;
  button: IButton;
  photo: IPhoto;
}

// Cria a interface para os princípios
export interface IPrinciple {
  svg: string;
  title: string;
  description: string;
}

// Cria a interface para o conteúdo dos princípios
export interface IPrinciplesContent {
  title: string;
  principles: IPrinciple[];
}

// Cria a interface para as ferramentas
export interface ITool {
  imageName: string;
  alternativeText: string;
}

// Cria a interface para o conteúdo das ferramentas
export interface IToolsContent {
  title: string;
  tools: ITool[];
}

// Cria a interface para os passos
export interface IStep {
  imageName: string;
  alternativeText: string;
  title: string;
  description: string;
}

// Cria a interface para o conteúdo dos passos
export interface IStartingContent {
  title: string;
  steps: IStep[];
}

