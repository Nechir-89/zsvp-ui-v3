"use server";

import { post } from "@/utils/services/contactus";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(3).max(15),
  lastName: z.string().min(3).max(15),
  email: z.string().email(),
  message: z.string().min(20).max(250),
});

export type FormState =
  | {
      errors?: {
        username?: string[];
        // email?: string[]
        passcode?: string[];
      };
      message?: string;
      response?: {
        state?: boolean;
        message?: string;
      };
    }
  | undefined;

export async function submitContactUs(
  prevState: FormState,
  formData: FormData
) {
  // 1: mutate data
  // 2: revalidate cache

  const parsed = schema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      response: {
        state: false,
        message: "Failed to send your message, please check your inputs",
      },
    };
  }

  try {
    await post(parsed.data);
    return {
      response: {
        state: true,
        message: "Your message has been successfully sent",
      },
    };
  } catch (error) {
    console.log(error);
    return {
      response: {
        state: false,
        message: "Failed to send your message!",
      },
    };
  }
}
