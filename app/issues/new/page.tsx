"use client";

import { TextField, Button } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "@/app/components/spinner";
import { useState } from "react";

interface IssueInterface {
  title: string;
  description: string;
}
const NewIssue = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueInterface>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <form
      className="max-w-xl space-y-5"
      onSubmit={handleSubmit(async (data) => {
        try {
          setIsSubmitting(true);
          await axios.post("/api/issues", data);
          router.push("/issues");
        } catch (error) {
            setIsSubmitting(false);
            console.log(error)
        }
      })}
    >
      <TextField.Root placeholder="Enter title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button disabled={isSubmitting}>
        Submit New Issue{ isSubmitting && <Spinner />}{" "}
      </Button>
    </form>
  );
};

export default NewIssue;
