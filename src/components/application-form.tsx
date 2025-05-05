"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Namn krävs"),
  mail: z.string().email("Ogiltig e-post"),
  phone: z.string().min(1, "Telefon krävs"),
  message: z.string().min(1, "Meddelande krävs"),
  file: z.string().optional(),
});

export function ApplicationForm({ settings }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      phone: "",
      message: "",
      file: "",
    },
  });

  const [fileName, setFileName] = useState("Välj fil");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString().split(",")[1] ?? "";
        form.setValue("file", base64String);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("Välj fil");
      form.setValue("file", "");
    }
  };

  // Submit function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/application-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        form.reset();
        toast("Tack för ditt meddelande, vi återkommer snarast!");
      }
    } catch (error) {
      console.error("Error sending message.", error);
      toast("Tyvärr gick något snett!");
    }
  }

  return (
    <div className="container-section mx-auto">
      <Toaster closeButton={true} />
      <h3 className="tracking-[6px] text-center uppercase font-light mt-20 text-[20px]">
        {settings?.content?.form_title || "Kontakta oss"}
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 my-14 mx-auto lg:max-w-[45%]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-post</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <div className="border-b-[1px] border-b-black text-black">
              <label className="flex flex-col gap-2 cursor-pointer">
                <span>Bifoga CV, PM, Övriga filer</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <div className="w-auto">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none max-w-full "
                  >
                    {fileName}
                  </button>
                </div>
              </label>
            </div>
            <span>Max. filstorlek: 50 MB</span>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meddelande</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Berätta lite kort om dig själv"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="lg:w-[20%] mx-auto">
            Skicka
          </Button>
        </form>
      </Form>
    </div>
  );
}
