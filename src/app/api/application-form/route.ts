import { Resend } from "resend";

const usermail = process.env.MARKNAD_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, mail, message, phone, file } = await req.json();

  const messageBody = `
    <div style="background-color: #f9f9f9; padding: 20px;">
      <p>Meddelande från: ${name}</p>
      <h3>Email: ${mail}</h3>
      <p>tel: ${phone}</p>
      <p>Meddelande: ${message}</p>
     
    </div>
  `;
  try {
    const { data, error } = await resend.emails.send({
      from: "Notifikation: Rekrytering Form <onboarding@resend.dev>",
      to: [`${usermail}`],
      subject: `Notifikation: Customer ${name}`,
      html: messageBody,
      attachments: [
        {
          content: file,
          filename: "CV/annat.pdf",
        },
      ],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
