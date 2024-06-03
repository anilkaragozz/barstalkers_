import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type InfoCardProps = {
  title?: string;
  description?: string;
  imageLink?: string;
};

export function InfoCard({ title, description, imageLink }: InfoCardProps) {
  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] min-h-[20rem] rounded-xl p-4 border">
          {imageLink ? (
            <CardItem translateZ="100" className="mt-4">
              <Image
                src={imageLink}
                height="1000"
                width="1000"
                className="h-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          ) : (
            <>
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600"
              >
                {title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2"
              >
                {description}
              </CardItem>
            </>
          )}
        </CardBody>
      </CardContainer>
    </>
  );
}
