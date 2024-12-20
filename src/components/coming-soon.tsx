import { CountdownTimer } from "./countdown-timer";
import { NewsletterForm } from "./newsletter-form";
// import { SocialLinks } from "./social-links";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-1000">
            Something Amazing
            <br />
            is Coming Soon
          </h1>
          <p className="text-neutral-500 text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 dark:text-neutral-400">
            We&apos;re crafting a unique blogging experience just for you.
          </p>
        </div>

        <CountdownTimer />
        <NewsletterForm />
        {/* <SocialLinks /> */}
      </div>

      <div className="fixed bottom-4 text-center text-sm text-neutral-500 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 dark:text-neutral-400">
        © {new Date().getFullYear()} Your Blog Name. All rights reserved.
      </div>
    </div>
  );
}
