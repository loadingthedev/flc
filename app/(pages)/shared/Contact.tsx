interface ContactProps {
  title: string;
}

const Contact = (props: ContactProps) => {
  return (
    <div className="w-full md:w-1/2 h-full md:sticky md:top-12 bg-primary-foreground">
      <div className="flex flex-col items-center mt-8">
        <div className="max-w-4xl px-4 id-form bg-primary p-16 rounded">
          <h2 className="text-center text-white text-3xl font-bold mb-8">
            {props.title}
          </h2>
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Nationality"
              className="border p-2 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border p-2 rounded"
              rows={2}
            />
            <button
              type="submit"
              className="bg-white text-primary p-2 rounded mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
