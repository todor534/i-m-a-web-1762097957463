export type ImageMeta = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description?: string;
  image: ImageMeta;
  tags?: string[];
  link?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type FieldErrors<T> = Partial<Record<keyof T, string>>;

export type ApiSuccess<T> = {
  ok: true;
  status: number;
  data: T;
};

export type ApiFailure = {
  ok: false;
  status: number;
  error: string;
  errors?: Record<string, string>;
};

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export type ContactResponse = {
  received: boolean;
  message: string;
};

export type FormState = {
  loading: boolean;
  success?: boolean;
  error?: string;
  fieldErrors?: FieldErrors<ContactPayload>;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SectionId = 'home' | 'work' | 'contact';