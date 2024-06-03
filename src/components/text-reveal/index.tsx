import { TextRevealCard } from "@/components/ui/text-reveal-card";

type TextRevealerProps = {
  mainText: string;
  revealText: string;
};

export function TextRevealer({ mainText, revealText }: TextRevealerProps) {
  return (
    <div className="h-[10rem] w-full flex items-center justify-center">
      <TextRevealCard text={mainText} revealText={revealText}></TextRevealCard>
    </div>
  );
}
