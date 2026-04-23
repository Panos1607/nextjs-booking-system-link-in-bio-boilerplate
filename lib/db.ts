import type { UserProfile } from "@/types/profile";
import type { Booking } from "@/types/booking";

export async function getUserProfile(
  username: string
): Promise<UserProfile | null> {
  const MOCK_PROFILES: Record<string, UserProfile> = {
    demo: {
      username: "demo",
      displayName: "Alexandra Chen",
      title: "Business & Life Coach",
      bio: "Helping ambitious professionals unlock their full potential. Book a free discovery call.",
      avatarUrl: "https://i.pravatar.cc/150?u=alexandra",
      theme: "default",
      bookingEnabled: true,
      sessionDurationMinutes: 30,
      links: [
        { id: "l1", label: "Free Discovery Call Guide", url: "#", icon: "🎯" },
        { id: "l2", label: "My Latest Workshop", url: "#", icon: "🚀" },
        { id: "l3", label: "Client Success Stories", url: "#", icon: "⭐" },
      ],
      socialHandles: {
        instagram: "alexandrachen",
        linkedin: "alexandra-chen",
        twitter: "alexandrachen",
      },
    },
  };

  return MOCK_PROFILES[username] ?? null;
}

export async function createBooking(
  booking: Omit<Booking, "id" | "createdAt" | "status">
): Promise<Booking> {
  return {
    ...booking,
    id: `booking_${Date.now()}`,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };
}