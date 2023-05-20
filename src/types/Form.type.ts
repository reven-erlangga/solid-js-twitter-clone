export type GliderInputEvent = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

export type Form = { [key: string]: string };

export type AuthForm = {
  email: string;
  password: string;
} & Form;

export type RegisterForm = {
  fullName: string;
  nickName: string;
  email: string;
  avatar: string;
  password: string;
  passwordConfirmation: string;
};

export type SubmitCallback<T extends Form> = (f: T) => void;
