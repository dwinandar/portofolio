import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const serviceId = "service_4y9pkfh";
    const templateId = "template_plbe62d";
    const publicKey = "thR5yqhfau69Vj1qf";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Protofolio Ade",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email send Successfully", response);
        setEmail("");
        setName("");
        setMessage("");
        setLoading(false);
        toast.success("Email send Successfully");
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error sending Email", err);
        toast.error("Error sending Email");
      });
  }

  return (
    <div className='pb-5'>
      <div className='flex flex-col justify-center max-w-2xl gap-4 mx-auto font-medium p-7 rounded-3xl lg:flex-row glassmorph'>
        <div className='flex flex-col text-center min-w-max gap-14'>
          <div>
            <h1 className='text-3xl font-bold'>Contact</h1>
            <h2>Get in touch with me</h2>
          </div>
          <div className='flex flex-col gap-2 pb-3 mx-auto text-lg'>
            <div className='flex items-center gap-3'>
              <a
                href='https://wa.me/085956149946'
                target='_blank'
                rel='noreferrer'
                className='flex gap-3 no-underline link hover:underline'
              >
                <IoLogoWhatsapp size={30} />
                0859-5614-9946
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <a
                href='https://www.linkedin.com/in/adedwinandar/'
                target='_blank'
                rel='noreferrer'
                className='flex gap-3 no-underline link hover:underline'
              >
                <FaLinkedin size={30} />
                Ade Dwinandar Ritonga
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <a
                href='https://www.instagram.com/adedwinandarritonga/'
                target='_blank'
                rel='noreferrer'
                className='flex gap-3 no-underline link hover:underline'
              >
                <FaInstagram size={30} />
                adedwinandarritonga
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <a
                href='mailto:adedwinandar50@gmail.com'
                className='flex gap-3 no-underline link hover:underline'
              >
                <SiGmail size={30} />
                adedwinandar50@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className='divider lg:divider-horizontal'>OR</div>
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 gap-2 lg:w-2/3'
        >
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='Input your email here'
            className='w-full input input-bordered'
            autoComplete='false'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor='emailFrom'>Email:</label>
          <input
            type='email'
            placeholder='Input your email here'
            className='w-full input input-bordered'
            autoComplete='false'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor='message'>Message:</label>
          <textarea
            className='resize-none textarea textarea-bordered'
            placeholder='Input your message here'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          ></textarea>
          <button
            type='submit'
            className='mt-5 border border-gray-500 btn'
            disabled={loading}
          >
            {loading ? (
              <span className='loading loading-spinner text-neutral'></span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
