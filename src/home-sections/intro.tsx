import { Button } from "@/components/ui/button";
import Link from "next/link";

function Intro() {
  return (
    <section className="bg-gray-500 text-white">
      <div className="container grid grid-cols-2 mx-auto py-16 px-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl mb-16">Headline</h2>
          <p className="text-2xl mb-64 mr-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            illum maxime assumenda molestias, consequatur ab veritatis sed
            cupiditate fuga obcaecati, aliquid alias ad tenetur ex provident
            expedita atque rem quod!
          </p>
          <div className="flex gap-8">
            <Link href="/contact">
              <Button className="text-xl hover:cursor-pointer pt-1">
                Contact Us
              </Button>
            </Link>
            <Button
              className="text-xl hover:cursor-pointer pt-1"
              variant="link"
            >
              Try it out
            </Button>
          </div>
        </div>

        <div className="ml-2">2</div>
      </div>
    </section>
  );
}

export default Intro;
