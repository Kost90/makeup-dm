"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import styles from "./ContactForm.module.css";

type Inputs = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const contactSchema = {
  name: string().trim().required().min(3).max(40),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./),
  phone: string().matches(phoneNumberRegex, "Is not a number"),
  message: string().trim().required().min(3),
};

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(contactSchema)),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (form.current) {
      emailjs.sendForm(
        "makeup_dm",
        "contact_form",
        form.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      );
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
      className={styles.form_wrapper}
    >
      <input
        type={"text"}
        placeholder={"name"}
        {...register("name")}
        required={true}
      />

      <input
        type={"email"}
        placeholder={"email"}
        {...register("email")}
        required={true}
      />

      <input
        type={"text"}
        placeholder={"phone number"}
        {...register("phone")}
        required={true}
      />
      <label className="text-Medium md:text-Large lg:text-Xlarge text-dark">
        Message:
      </label>
      <textarea
        placeholder="Message"
        {...register("message", { required: true })}
      />
      <button type={"submit"}>SEND</button>
    </form>
  );
}

export default ContactForm;
