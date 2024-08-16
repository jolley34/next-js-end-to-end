"use client";
import { AddNewEvent } from "@/src/actions/Events";
import { EventFormData } from "@/src/app/api/validation/validation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  event?: EventFormData;
}

export default function EventForm({}: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>();

  const onSubmit = async (formData: EventFormData) => {
    await AddNewEvent(formData);
    window.location.reload();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImagePreview(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "2rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {/* Title Input */}
      <label style={{ color: "white" }} htmlFor="title">
        Title
      </label>
      <input
        id="title"
        type="text"
        {...register("title", { required: "Title is required" })}
        style={{
          width: "100%",
          padding: "0.5rem",
          borderColor: errors.title ? "red" : "#ccc",
        }}
      />
      {errors.title && (
        <span style={{ color: "red" }}>{errors.title.message}</span>
      )}

      {/* Description Input */}
      <label style={{ color: "white" }} htmlFor="description">
        Description
      </label>
      <input
        id="description"
        type="text"
        {...register("description", { required: "Description is required" })}
        style={{
          width: "100%",
          padding: "0.5rem",
          borderColor: errors.description ? "red" : "#ccc",
        }}
      />
      {errors.description && (
        <span style={{ color: "red" }}>{errors.description.message}</span>
      )}

      {/* Image URL Input */}
      <label htmlFor="image" style={{ color: "white" }}>
        Image URL
      </label>
      <input
        id="image"
        type="url"
        {...register("image", { required: "Image URL is required" })}
        onChange={handleImageChange}
        style={{
          width: "100%",
          padding: "0.5rem",
          borderColor: errors.image ? "red" : "#ccc",
        }}
      />
      {errors.image && (
        <span style={{ color: "red" }}>{errors.image.message}</span>
      )}

      {/* Video URL Input */}
      <label style={{ color: "white" }} htmlFor="video">
        Video URL
      </label>
      <input
        id="video"
        type="url"
        {...register("video")}
        style={{
          width: "100%",
          padding: "0.5rem",
          borderColor: errors.video ? "red" : "#ccc",
        }}
      />
      {errors.video && (
        <span style={{ color: "red" }}>{errors.video.message}</span>
      )}

      {/* Submit Button */}
      <button type="submit">Create Event</button>

      {/* Image Preview */}
      {imagePreview && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      )}
    </form>
  );
}
