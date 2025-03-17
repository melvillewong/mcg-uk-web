import Link from "next/link";
import { Button } from "@/components/ui/button";

function Projects() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="text-5xl text-center">Projects</h1>
        <div className="grid grid-cols-10 py-20 px-8">
          <div className="col-span-4 bg-gray-400">Image</div>
          <div className="flex flex-col col-span-6 gap-8 py-16 px-32 bg-gray-300">
            <h2 className="text-3xl text-end">Name</h2>
            <p className="text-xl mb-32">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a
              repellat obcaecati expedita, ut voluptatum, recusandae
              exercitationem aliquid iure enim vel tempore omnis beatae? Eaque
              commodi suscipit voluptatem error impedit.
            </p>
            <Link href="/projects">
              <Button className="text-lg hover:cursor-pointer">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
