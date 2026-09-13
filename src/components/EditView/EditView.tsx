import { useCallback, useState } from "react";
import Field from "../Field/Field";
import Button from "../Button/Button";
import styles from "./EditView.module.css";
import type {
  FieldValue,
  ProfileField,
} from "../../pages/Profile/typesProfile";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Modal from "../Modal/Modal";

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

    const hidden = dependencyMatches
      ? (field.dependency.hidden ?? false)
      : false;

    const disabled = dependencyMatches
      ? (field.dependency.disabled ?? false)
      : false;

    const value =
      dependencyMatches && field.dependency.setValue !== undefined
        ? field.dependency.setValue
        : field.value;

    if (
      field.hidden === hidden &&
      field.disabled === disabled &&
      field.value === value
    ) {
      return field;
    }

    return {
      ...field,
      hidden,
      disabled,
      value,
    };
  });
};

const EditView = ({ fields }: EditViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const savedProfile = useAppSelector((state) => state.profile.data);

  const [formFields, setFormFields] = useState<ProfileField[]>(() => {
    const fieldsWithSavedValues = fields.map((field) => {
      const savedValue = savedProfile[field.name];

      if (savedValue === undefined) {
        return field;
      }

      return {
        ...field,
        value: savedValue,
      };
    });

    return applyDependencies(fieldsWithSavedValues);
  });

  const updateField = useCallback((name: string, value: FieldValue) => {
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
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileData = formFields.reduce<Record<string, FieldValue>>(
      (acc, field) => {
        acc[field.name] = field.value;

        return acc;
      },
      {},
    );

    dispatch({
      type: "profile/update",
      payload: profileData,
    });
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 500);
  };

  return (
    <>
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

        <Button type="submit" className={styles.form__button}>
          Сохранить
        </Button>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Сохранено</p>
      </Modal>
    </>
  );
};

export default EditView;
