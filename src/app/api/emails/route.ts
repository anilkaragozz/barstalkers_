import Email from "@/emails";
import { Resend } from "resend";

const resend = new Resend("re_JowNMUdJ_742PT9Hkr1K8E7EXGfifBCoD");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName } = body;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Barstalkers Newsletter",
      react: Email({ firstName: firstName }), 
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
