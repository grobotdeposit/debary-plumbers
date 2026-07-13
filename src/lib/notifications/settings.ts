export interface NotificationSettings {
  notification_email: string | null;
  notification_phone: string | null;
}

export async function getNotificationSettings(): Promise<NotificationSettings | null> {
  const { createAdminClient } = await import("@/lib/supabase/admin");
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("settings")
    .select("notification_email, notification_phone")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Failed to fetch notification settings:", error.message);
    return null;
  }

  return data;
}
