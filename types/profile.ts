export interface UserProfile {
  username: string;
  displayName: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  theme?: string;
  bookingEnabled: boolean;
  sessionDurationMinutes?: number;
  links: ProfileLink[];
  socialHandles?: SocialHandles;
}

export interface ProfileLink {
  id: string;
  label: string;
  url: string;
  icon?: string;
  style?: "default" | "outlined" | "filled";
}

export interface SocialHandles {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
}