import styles from "./Field.module.css";
import type {
  FieldValue,
  ProfileField,
} from "../../pages/Profile/typesProfile";
import { memo } from "react";

interface FieldProps {
  field: ProfileField;
  onChange: (name: string, value: FieldValue) => void;
}

const Field = ({ field, onChange }: FieldProps) => {
  const handleCheckboxGroupChange = (optionValue: string) => {
    const currentValue = Array.isArray(field.value) ? field.value : [];

    const nextValue = currentValue.includes(optionValue)
      ? currentValue.filter((value) => value !== optionValue)
      : [...currentValue, optionValue];

    onChange(field.name, nextValue);
  };

  switch (field.type) {
    case "text":
      return (
        <div className={styles.field}>
          <label htmlFor={field.name} className={styles.field__label}>
            {field.label}
          </label>

          <input
            id={field.name}
            name={field.name}
            className={styles.field__input}
            type="text"
            value={String(field.value)}
            disabled={field.disabled}
            required={field.required}
            onChange={(event) => onChange(field.name, event.target.value)}
          />
        </div>
      );

    case "number":
      return (
        <div className={styles.field}>
          <label htmlFor={field.name} className={styles.field__label}>
            {field.label}
          </label>

          <input
            id={field.name}
            name={field.name}
            className={styles.field__input}
            type="number"
            value={field.value === "" ? "" : String(field.value)}
            disabled={field.disabled}
            required={field.required}
            onChange={(event) =>
              onChange(
                field.name,
                event.target.value === "" ? "" : Number(event.target.value),
              )
            }
          />
        </div>
      );

    case "textarea":
      return (
        <div className={styles.field}>
          <label htmlFor={field.name} className={styles.field__label}>
            {field.label}
          </label>

          <textarea
            id={field.name}
            name={field.name}
            className={styles.field__textarea}
            value={String(field.value)}
            disabled={field.disabled}
            required={field.required}
            onChange={(event) => onChange(field.name, event.target.value)}
          />
        </div>
      );

    case "date":
      return (
        <div className={styles.field}>
          <label htmlFor={field.name} className={styles.field__label}>
            {field.label}
          </label>

          <input
            id={field.name}
            name={field.name}
            className={styles.field__input}
            type="date"
            value={String(field.value)}
            disabled={field.disabled}
            required={field.required}
            onChange={(event) => onChange(field.name, event.target.value)}
          />
        </div>
      );

    case "select":
      return (
        <div className={styles.field}>
          <label htmlFor={field.name} className={styles.field__label}>
            {field.label}
          </label>

          <select
            id={field.name}
            name={field.name}
            className={styles.field__input}
            value={String(field.value)}
            disabled={field.disabled}
            required={field.required}
            onChange={(event) => onChange(field.name, event.target.value)}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );

    case "checkbox":
      if (field.options) {
        const values = Array.isArray(field.value) ? field.value : [];

        return (
          <div className={styles.field}>
            <span className={styles.field__label}>{field.label}</span>

            <div className={styles.field__group}>
              {field.options.map((option) => (
                <label key={option.value} className={styles.field__option}>
                  <input
                    className={styles.field__checkbox}
                    type="checkbox"
                    name={field.name}
                    value={option.value}
                    checked={values.includes(option.value)}
                    disabled={field.disabled}
                    onChange={() => handleCheckboxGroupChange(option.value)}
                  />

                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        );
      }

      return (
        <div className={styles.field}>
          <label className={styles.field__option}>
            <input
              className={styles.field__checkbox}
              type="checkbox"
              name={field.name}
              checked={Boolean(field.value)}
              disabled={field.disabled}
              onChange={(event) => onChange(field.name, event.target.checked)}
            />

            <span>{field.label}</span>
          </label>
        </div>
      );

    case "radio":
      return (
        <div className={styles.field}>
          <span className={styles.field__label}>{field.label}</span>

          <div className={styles.field__group}>
            {field.options?.map((option) => (
              <label key={option.value} className={styles.field__option}>
                <input
                  className={styles.field__checkbox}
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={String(field.value) === option.value}
                  disabled={field.disabled}
                  onChange={(event) => onChange(field.name, event.target.value)}
                />

                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default memo(Field);
