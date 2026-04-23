import { notFound } from "next/navigation";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { LinkButton } from "@/components/profile/LinkButton";
import { SocialIcons } from "@/components/profile/SocialIcons";
import { getUserProfile } from "@/lib/db";
import type { UserProfile } from "@/types/profile";

interface ProfilePageProps {
  params: Promise<{ username: string }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const resolvedParams = await params;
  const profile = await getUserProfile(resolvedParams.username);

  if (!profile) {
    notFound();
  }

  const theme = profile.theme ?? "default";

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center py-10 px-4"
      style={{ background: THEME_BACKGROUNDS[theme] }}
    >
      <ProfileHeader profile={profile} />

      <section className="w-full max-w-md mt-6 flex flex-col gap-3">
        {profile.links.map((link) => (
          <LinkButton key={link.id} link={link} theme={theme} />
        ))}
      </section>

      {profile.bookingEnabled && (
        <section className="w-full max-w-md mt-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
            Book an Appointment
          </h2>
          <BookingCalendar
            username={profile.username}
            professionalName={profile.displayName}
            sessionDurationMinutes={profile.sessionDurationMinutes ?? 30}
            theme={theme}
          />
        </section>
      )}

      {profile.socialHandles && (
        <section className="mt-8 mb-4">
          <SocialIcons handles={profile.socialHandles} />
        </section>
      )}
    </main>
  );
}

function ProfileHeader({ profile }: { profile: UserProfile }) {
  return (
    <header className="flex flex-col items-center text-center gap-3">
      <div className="relative w-24 h-24 rounded-full ring-4 ring-white/20 overflow-hidden shadow-xl bg-black/20 flex items-center justify-center">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={`${profile.displayName}'s avatar`}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-2xl">👤</span>
        )}
      </div>
      <h1 className="text-2xl font-bold text-white mt-1">
        {profile.displayName}
      </h1>
      {profile.title && (
        <span className="text-xs font-medium bg-white/10 text-white/80 px-3 py-1 rounded-full">
          {profile.title}
        </span>
      )}
      {profile.bio && (
        <p className="text-sm text-white/70 max-w-xs leading-relaxed">
          {profile.bio}
        </p>
      )}
    </header>
  );
}

const THEME_BACKGROUNDS: Record<string, string> = {
  default:  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  rose:     "linear-gradient(135deg, #2d1b2e 0%, #4a1942 50%, #7b2d5e 100%)",
  emerald:  "linear-gradient(135deg, #0a2e1a 0%, #0d4a2a 50%, #1a7a45 100%)",
  amber:    "linear-gradient(135deg, #2e1a00 0%, #4a2e00 50%, #7a5000 100%)",
  slate:    "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
};