"use client";
import React, { useState, useActionState } from "react";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

import MDEditor from "@uiw/react-md-editor";

import { formSchema } from "@/lib/validation";
import { createPitch } from "@/lib/actions";
import { z } from "zod";
import { useRouter } from "next/navigation";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const router = useRouter();

  //@ts-ignore
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast.success("Your startup pitch has been created successfully");

        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

        toast.error("Please check your inputs and try again", {
          closeButton: true,
        });

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast.error("An unexpected error has occurred");

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="startup-form" role="form" aria-label="Create startup pitch form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
          aria-describedby={errors.title ? "title-error" : undefined}
          aria-invalid={errors.title ? "true" : "false"}
        />

        {errors.title && (
          <p id="title-error" className="startup-form_error" role="alert" aria-live="polite">
            {errors.title}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
          aria-describedby={errors.description ? "description-error" : undefined}
          aria-invalid={errors.description ? "true" : "false"}
        />

        {errors.description && (
          <p id="description-error" className="startup-form_error" role="alert" aria-live="polite">
            {errors.description}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
          aria-describedby={errors.category ? "category-error" : undefined}
          aria-invalid={errors.category ? "true" : "false"}
        />

        {errors.category && (
          <p id="category-error" className="startup-form_error" role="alert" aria-live="polite">
            {errors.category}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL <span className="text-red-500" aria-label="required">*</span>
        </label>
        <Input
          id="link"
          name="link"
          type="url"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
          aria-describedby={errors.link ? "link-error" : undefined}
          aria-invalid={errors.link ? "true" : "false"}
        />

        {errors.link && (
          <p id="link-error" className="startup-form_error" role="alert" aria-live="polite">
            {errors.link}
          </p>
        )}
        
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-2">
          <p>
            💡 <strong>Tip:</strong> For Google Images, right-click the image and select "Copy image address" to get the direct URL.
          </p>
          <p>
            🖼️ <strong>Recommended image hosting:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><a href="https://imgur.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Imgur</a> - Free, reliable image hosting</li>
            <li><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unsplash</a> - High-quality stock photos</li>
            <li><a href="https://pexels.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pexels</a> - Free stock photos</li>
            <li><a href="https://postimages.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PostImages</a> - Simple image hosting</li>
          </ul>
          <p className="text-xs text-gray-500">
            If your image URL doesn't work, try uploading to one of these services first.
          </p>
        </div>
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch <span className="text-red-500" aria-label="required">*</span>
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder: "Briefly describe your idea and what problem it solves",
            "aria-describedby": errors.pitch ? "pitch-error" : undefined,
            "aria-invalid": errors.pitch ? "true" : "false",
            "aria-label": "Startup pitch content in markdown format"
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && (
          <p id="pitch-error" className="startup-form_error" role="alert" aria-live="polite">
            {errors.pitch}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}
        aria-describedby="submit-help"
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="ml-2 size-6" aria-hidden="true" />
      </Button>
      
      <p id="submit-help" className="sr-only">
        Submit your startup pitch to be featured in the directory
      </p>
    </form>
  );
};

export default StartupForm;
