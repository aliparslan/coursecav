import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  // const { data: notes } = await supabase.from("notes").select();
  const { data: test_users } = await supabase.from("test_users").select();

  return (
    <div>
      {/* <pre>{JSON.stringify(notes, null, 2)}</pre> */}
      <pre>{JSON.stringify(test_users, null, 2)}</pre>
    </div>
  )
}