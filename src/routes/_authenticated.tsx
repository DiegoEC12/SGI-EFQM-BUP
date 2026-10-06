import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    const email = data.session?.user.email?.trim().toLowerCase();
    if (!data.session || !email?.endsWith("@bup.edu.pe")) {
      if (data.session) await supabase.auth.signOut();
      throw redirect({ to: "/auth" });
    }
  },
  component: () => <Outlet />,
});
