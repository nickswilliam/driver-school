"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useToast } from "@chakra-ui/react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PHONE_REGEXP } from "@/lib/utils";
import { coursesList, payWays } from "@/data/appoint-pay-courses";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string({ required_error: "Es obligatorio ingresar el nombre y apellido" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  phone: z
    .string({
      required_error: "El número de teléfono es obligatorio",
      invalid_type_error: "Debe ingresar números*",
    })
    .max(10, { message: "El número debe contener 10 caracteres como máximo*" })
    .min(10, { message: "El número debe contener 10 caracteres como mínimo*" })
    .regex(PHONE_REGEXP),
  email: z
    .string({ required_error: "El E-mail es obligatorio." })
    .email({ message: "El email ingresado es invalido." }),
  payways: z.string({ required_error: "Seleccione una opción" }),
  coursePriceList: z.string({ required_error: "Seleccione una opción" }),
  address: z
    .string({ required_error: "Es obligatorio ingresar el domicilio" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  inBetweenStreet: z
    .string({ required_error: "Debe ingresar entre calles" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  city: z
    .string({ required_error: "Debe ingresar una localidad" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
});

const AppointForm = () => {
  const toast = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      payways: undefined,
      coursePriceList: "",
      address: "",
      inBetweenStreet: "",
      city: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
    toast({
      title: "Se ha enviado la información.",
      description: "Derivamos tu información a una instructora",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const [firstSelectValue, setFirstSelectValue] = useState("");

  const handleFirstSelectValue = (e: any) => {
    setFirstSelectValue(e);
  };

  const filterCourse = coursesList.find(
    (elem) => elem.title === firstSelectValue
  );

  console.log(filterCourse);

  return (
    <div className="max-w-5xl w-full bg-violet-200 backdrop-blur-sm rounded-md shadow-xl py-8 px-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold">
                  Nombre y Apellido
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese nombre y apellido*"
                    {...field}
                    className="border-pink-600 focus-visible:shadow-sm focus-visible:shadow-pink-500 text-pink-600"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold">
                  Nro. de Teléfono:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese número de teléfono*"
                    {...field}
                    className="border-pink-600 focus-visible:shadow-sm focus-visible:shadow-pink-500 text-pink-600"
                    type="number"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel className="text-pink-600 font-semibold">
                  E-Mail
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingrese un E-mail*"
                    {...field}
                    className="border-pink-600 focus-visible:shadow-sm focus-visible:shadow-pink-500 text-pink-600"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="payways"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold">
                  Medio de Pago
                </FormLabel>
                <Select
                  onValueChange={handleFirstSelectValue}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un medio de pago" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {payWays.map((item) => (
                      <SelectItem value={item.title} key={item.id}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coursePriceList"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-pink-600 font-semibold">
                  Cursos
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un Curso" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {filterCourse?.course.typeCourse.map((item) => (
                      <SelectItem key={item.id} value={item.title}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* agregar renderizado condicional de pequeña card con logo de mp cuando seleccionas opcion de tarjeta, el cual de acuerdo a la opción elegida, te lleve a un link de cobro mediante mp al hacer click*/}          

        </form>
      </Form>
    </div>
  );
};
export default AppointForm;
