import type { ProfileField } from "../pages/Profile/typesProfile";

export const profileFields: ProfileField[] = [
  {
    name: "firstName",
    label: "Имя",
    type: "text",
    value: "Владимир",
    required: true,
  },

  {
    name: "lastName",
    label: "Фамилия",
    type: "text",
    value: "Шумяков",
    required: true,
  },

  {
    name: "age",
    label: "Возраст",
    type: "number",
    value: 27,
    required: true,
  },

  {
    name: "bio",
    label: "О себе",
    type: "textarea",
    value: "",
  },

  {
    name: "birthDate",
    label: "Дата рождения",
    type: "date",
    value: "1999-07-17",
  },

  {
    name: "city",
    label: "Город",
    type: "select",
    value: "amsterdam",
    options: [
      {
        label: "Санкт-Петербург",
        value: "spb",
      },
      {
        label: "Москва",
        value: "moscow",
      },
      {
        label: "Калуга",
        value: "kaluga",
      },
      {
        label: "Воронеж",
        value: "voronezh",
      },
    ],
  },

  {
    name: "employmentType",
    label: "Тип занятости",
    type: "select",
    value: "full-time",
    options: [
      {
        label: "Full-time",
        value: "full-time",
      },
      {
        label: "Part-time",
        value: "part-time",
      },
      {
        label: "Студент",
        value: "student",
      },
      {
        label: "Фриланс",
        value: "freelance",
      },
    ],
  },

  {
    name: "company",
    label: "Компания",
    type: "text",
    value: "ITGLOBAL",
    dependency: {
      field: "employmentType",
      value: "student",
      hidden: true,
    },
  },

  {
    name: "position",
    label: "Должность",
    type: "text",
    value: "Frontend Developer",
    dependency: {
      field: "employmentType",
      value: "student",
      disabled: true,
      setValue: "Студент",
    },
  },

  {
    name: "salary",
    label: "Желаемая зарплата",
    type: "number",
    value: 0,
  },

  {
    name: "phone",
    label: "Телефон",
    type: "text",
    value: "",
  },

  {
    name: "email",
    label: "Email",
    type: "text",
    value: "",
    required: true,
  },

  {
    name: "website",
    label: "Сайт",
    type: "text",
    value: "",
  },

  {
    name: "newsletter",
    label: "Получать новости",
    type: "checkbox",
    value: false,
  },
  {
    name: "skills",
    label: "Навыки",
    type: "checkbox",
    value: ["javascript", "typescript"],
    options: [
      {
        label: "JavaScript",
        value: "javascript",
      },
      {
        label: "TypeScript",
        value: "typescript",
      },
      {
        label: "React",
        value: "react",
      },
      {
        label: "Vue",
        value: "vue",
      },
      {
        label: "Node.js",
        value: "node",
      },
    ],
  },
  {
    name: "experience",
    label: "Опыт работы",
    type: "radio",
    value: "middle",
    options: [
      {
        label: "Нет опыта",
        value: "no-experience",
      },
      {
        label: "Junior",
        value: "junior",
      },
      {
        label: "Middle",
        value: "middle",
      },
      {
        label: "Senior",
        value: "senior",
      },
    ],
  },

  {
    name: "education",
    label: "Образование",
    type: "select",
    value: "higher",
    options: [
      {
        label: "Среднее",
        value: "school",
      },
      {
        label: "Среднее специальное",
        value: "college",
      },
      {
        label: "Высшее",
        value: "higher",
      },
    ],
  },

  {
    name: "telegram",
    label: "Telegram",
    type: "text",
    value: "",
  },

  {
    name: "aboutProject",
    label: "Описание текущего проекта",
    type: "textarea",
    value: "",
  },

  {
    name: "portfolio",
    label: "Количество проектов",
    type: "number",
    value: 99,
  },
];
