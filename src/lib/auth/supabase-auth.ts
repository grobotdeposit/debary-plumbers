import type { AuthUser } from "@supabase/supabase-js";

// Workaround: @supabase/auth-js v2.110 ships without GoTrueClient .d.ts,
// so SupabaseAuthClient appears to lack auth methods in TypeScript.

interface AuthErrorLike {
  message: string;
}

interface AuthPasswordSignIn {
  signInWithPassword(credentials: {
    email: string;
    password: string;
  }): Promise<{ error: AuthErrorLike | null }>;
}

interface AuthSignOut {
  signOut(): Promise<{ error: AuthErrorLike | null }>;
}

interface AuthGetUser {
  getUser(): Promise<{ data: { user: AuthUser | null } }>;
}

export function asAuthPasswordSignIn(auth: unknown): AuthPasswordSignIn {
  return auth as AuthPasswordSignIn;
}

export function asAuthSignOut(auth: unknown): AuthSignOut {
  return auth as AuthSignOut;
}

export function asAuthGetUser(auth: unknown): AuthGetUser {
  return auth as AuthGetUser;
}
