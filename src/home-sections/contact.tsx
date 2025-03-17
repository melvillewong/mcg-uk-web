import Link from "next/link";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <section className="bg-gray-300 py-16">
      <div className="container mx-auto flex flex-col gap-16">
        <h1 className="text-center text-5xl">Contact Us</h1>
        <p className="text-2xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam
          modi eveniet labore accusantium incidunt cum suscipit expedita dolore
          ab sunt et commodi, adipisci ipsam. Vel accusantium doloribus expedita
          nemo?
        </p>
        <Link href="/contact" className="text-center">
          <Button className="hover:cursor-pointer text-xl">Find Us</Button>
        </Link>
      </div>
    </section>
  );
}

export default Contact;
