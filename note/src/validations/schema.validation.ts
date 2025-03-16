interface validationInput {
  title: string;
  content: string;
  category: string;
}

const validationSchema: {
  [K in keyof validationInput]: (value: any) => string | null;
} = {
  title: (value) =>
    typeof value === "string" && value.trim().length >= 3
      ? null
      : "Title must be at least 5 characters long",
  content: (value) =>
    typeof value === "string" && value.trim().length >= 13
      ? null
      : "Content must be at least 10 characters long",
  category: (value) =>
    typeof value === "string" && value.length === 24
      ? null
      : "Invalid category ID",
};

export default validationSchema;
