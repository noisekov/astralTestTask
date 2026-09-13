import { useState } from "react";
import Field from "../Field/Field";
import styles from "./EditView.module.css";
import type {
  FieldValue,
  ProfileField,
} from "../../pages/Profile/typesProfile";

interface EditViewProps {
  fields: ProfileField[];
}

const applyDependencies = (fields: ProfileField[]): ProfileField[] => {
  const values = fields.reduce<Record<string, FieldValue>>((acc, field) => {
    acc[field.name] = field.value;

    return acc;
  }, {});

  return fields.map((field) => {
    if (!field.dependency) {
      return field;
    }

    const dependencyValue = values[field.dependency.field];

    const dependencyMatches =
      String(dependencyValue) === field.dependency.value;

    if (!dependencyMatches) {
      return {
        ...field,
        hidden: false,
        disabled: false,
      };
    }

    return {
      ...field,
      hidden: field.dependency.hidden ?? false,
      disabled: field.dependency.disabled ?? false,
      value:
        field.dependency.setValue !== undefined
          ? field.dependency.setValue
          : field.value,
    };
  });
};

const EditView = ({ fields }: EditViewProps) => {
  const [formFields, setFormFields] = useState<ProfileField[]>(() =>
    applyDependencies(fields),
  );

  const updateField = (name: string, value: FieldValue) => {
    setFormFields((currentFields) => {
      const nextFields = currentFields.map((field) => {
        if (field.name !== name) {
          return field;
        }

        return {
          ...field,
          value,
        };
      });

      return applyDependencies(nextFields);
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileData = formFields.reduce<Record<string, FieldValue>>(
      (acc, field) => {
        acc[field.name] = field.value;

        return acc;
      },
      {},
    );

    console.log("Profile data:", profileData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__fields}>
        {formFields.map((field) => {
          if (field.hidden) {
            return null;
          }

          return (
            <Field key={field.name} field={field} onChange={updateField} />
          );
        })}
      </div>

      <button type="submit" className={styles.form__button}>
        Сохранить
      </button>
    </form>
  );
};

export default EditView;
