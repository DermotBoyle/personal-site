import GitHubLogo from "@/app/common/components/GitHubLogo";
import Image from "next/image";

const TalkTarotPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <section className="min-w-[70vw] md:pt-14 pt-24 font-semibold">
        <h1 className="text-2xl">Talk Tarot</h1>
        <div className="my-6 w-[75vw] h-0.5 border-t-0 bg-charcoal/10" />
      </section>

      <section className="flex flex-col md:flex-row w-[70vw] pt-6">
        <div className="w-[95%] md:w-[50%] mb-8 md:mb-24">
          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-24">
              <h3 className="text-xl font-bold">Tech</h3>
            </div>
            <div className="hidden md:block mt-1">
              <p>React Native</p>
              <p>Expo</p>
              <p>TypeScript</p>
              <p>Claude AI</p>
              <p>Deepgram</p>
              <p>OpenAI TTS</p>
              <p>Supabase</p>
              <p>Reanimated</p>
            </div>
            <p className="md:hidden">
              React Native, Expo, TypeScript, Claude AI, Deepgram, OpenAI TTS,
              Supabase, Reanimated
            </p>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-24">
              <h3 className="text-xl font-bold">Year</h3>
            </div>
            <div className="flex flex-col md:flex-row">
              <p className="md:self-end">2026</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-24">
              <h3 className="text-xl font-bold">Status</h3>
            </div>
            <div className="flex">
              <p className="self-end">In progress</p>
            </div>
          </div>
        </div>

        <div className="w-[70vw] md:w-[60vw]">
          <h3 className="text-xl font-bold">Description</h3>
          <p className="md:mt-4">
            Talk Tarot is an AI-powered conversational tarot reading app for iOS
            and Android. Users draw three tarot cards, then engage in a
            voice-based conversation with an AI tarot reader who interprets each
            card, asks reflective questions, and ties the reading together with a
            closing summary.
          </p>
          <p className="mt-4">
            The app supports three spread types: Past-Present-Future,
            Situation-Action-Outcome, and Mind-Body-Spirit. Each reading flows
            through card selection, interpretation, and a natural back-and-forth
            voice conversation.
          </p>
          <p className="mt-4">
            Voice input is handled by Deepgram&apos;s Nova-2 speech-to-text
            model, card interpretation runs on Claude Haiku, and responses are
            spoken aloud using OpenAI&apos;s TTS API. The backend is built
            entirely with Supabase Edge Functions.
          </p>
        </div>
      </section>

      <div className="w-[70vw] mt-8 md:mt-0 pb-6">
        <h3 className="text-xl font-bold">Previews</h3>
      </div>
      <section className="w-[95vw] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 sm:px-2 md:w-[70vw]">
        <div className="aspect-9/16 border-2 border-charcoal/10 rounded-md border-solid relative overflow-hidden">
          <Image
            src="/images/talk-tarot/talk-tarot-spread-selection.png"
            alt="Talk Tarot spread selection screen"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-9/16 border-2 border-charcoal/10 rounded-md border-solid relative overflow-hidden">
          <Image
            src="/images/talk-tarot/talk-tarot-card-draw.png"
            alt="Talk Tarot card draw screen"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-9/16 border-2 border-charcoal/10 rounded-md border-solid relative overflow-hidden">
          <Image
            src="/images/talk-tarot/talk-tarot-card-reveal.png"
            alt="Talk Tarot card reveal - The High Priestess"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-9/16 border-2 border-charcoal/10 rounded-md border-solid relative overflow-hidden">
          <Image
            src="/images/talk-tarot/talk-tarot-ai-reading.png"
            alt="Talk Tarot AI reading conversation"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-[70vw] md:pt-6 pt-14">
        <h3 className="text-xl font-bold mb-2">Design</h3>
        <p>
          The app follows an Art Nouveau-inspired aesthetic with a dark, mystical
          theme. Deep purples, muted golds, and jewel tones create an
          atmospheric reading experience. Card animations use React Native
          Reanimated for smooth flip and reveal effects.
        </p>
      </section>

      <section className="w-[70vw] md:pt-6 pt-14">
        <h3 className="text-xl font-bold mb-2">Extra info</h3>
        <p>
          The conversation engine maintains full context across all three cards
          in a reading, allowing the AI to weave earlier interpretations into
          later ones. A hold-to-talk interface with pulsing animations keeps the
          voice interaction feeling natural and intuitive.
        </p>
      </section>

      <section className="w-[70vw] md:pt-6 pt-14 pb-8">
        <h3 className="text-xl font-bold mb-2">Links</h3>
        <div>
          <p className="hover:font-bold hover:underline">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/DermotBoyle"
            >
              <GitHubLogo />
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default TalkTarotPage;
