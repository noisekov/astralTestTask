export type FieldValue = string | number | boolean | string[];

export type ProfileFieldType =
  | "text"
  | "number"
  | "textarea"
  | "date"
  | "select"
  | "checkbox"
  | "radio";

export interface SelectOption {
  label: string;
  value: string;
}

export interface ProfileField {
  name: string;
  label: string;
  type: ProfileFieldType;
  value: FieldValue;
  required?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  options?: SelectOption[];
  dependency?: {
    field: string;
    value: string;
    hidden?: boolean;
    disabled?: boolean;
    setValue?: FieldValue;
  };
}
