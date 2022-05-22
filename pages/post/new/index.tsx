import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

import { IData } from "./types";
import MainLayout from "../../../components/MainLayout";
import { BaseTextField } from "../../../components/BaseTextField";
import styles from "../../../styles/NewPost.module.scss";
import { submitHandler } from "./utils";

const New: React.FC = () => {
  const form = useForm({});

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  return (
    <MainLayout>
      <form onSubmit={handleSubmit((data) => submitHandler(data))}>
        <article className={styles.container}>
          <BaseTextField
            control={control}
            name="taskAuthor"
            label="Author"
            errorText={errors.taskAuthor}
          />
          <BaseTextField
            control={control}
            name="taskTitle"
            label="Title"
            errorText={errors.taskTitle}
          />
          <BaseTextField
            control={control}
            name="taskBody"
            label="Body"
            errorText={errors.taskBody}
            multiline
            rows={10}
          />
          <Button type="submit" className={styles.submit} variant="contained">
            Submit
          </Button>
        </article>
      </form>
    </MainLayout>
  );
};

export default New;
