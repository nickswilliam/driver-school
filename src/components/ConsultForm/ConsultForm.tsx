import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z, { string } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type IdOfCourse = {
  id: number;
};

const formSchema = z.object({
  name: z
    .string({ required_error: "Es obligatorio ingresar el nombre y apellido" })
    .min(4, { message: "Debe ingresar al menos 4 caracteres" }),
  phone: z
    .number()
    .max(10, { message: "El número debe contener 10 caracteres como máximo*" })
    .min(10, { message: "El número debe contener 10 caracteres como mínimo*" }),
  email: z.string().email({ message: "El email ingresado es invalido." }),
  courseNumber: z.string(),
});

export const ConsultForm = ({ id }: IdOfCourse) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      email: "",
      courseNumber: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 gap-x-8 gap-y-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-violet-500 font-semibold">
                Nombre y Apellido
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingrese Nombre y Apellido*" {...field} />
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
              <FormLabel className="text-violet-500 font-semibold">
                Número de teléfono:
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingrese número de teléfono*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-violet-500 font-semibold">Email:</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese dirección de E-mail*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-violet-500 font-semibold">Curso:</FormLabel>
              <FormControl>
                <Input {...field} disabled value={id === 1 ? 'Plan Básico $58000' : id === 2 ? 'Plan Medio $74000': id === 3 ? "Plan Avanzado $94000" : "Plan Pro $130000" }/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="">Enviar</Button>

        <Button type="reset" className="bg-violet-400 hover:bg-violet-300">Limpiar formulario</Button>
      </form>
    </Form>
  );
};
