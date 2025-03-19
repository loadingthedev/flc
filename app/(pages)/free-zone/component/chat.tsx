const Chat = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-primary text-white py-20 mb-20 rounded-lg shadow-md px-4 sm:px-6 lg:px-8">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-start mb-12 ml-5">
            Ready to get started? Let's chat!
          </h2>
          <div className="grid gap-8 ml-5">
            <p>
              We’re here to make your business journey smooth and successful.
              Reach out to our team today for a free, <br /> no-obligation
              consultation to learn how we can help with your business setup.
            </p>
          </div>
          <button className="flex items-center gap-2 px-8 py-4 mt-20 ml-5 border-2 bg-primary border-white rounded-none transition-all text-white hover:bg-muted-foreground hover:text-primary-foreground">
            Talk to an expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
