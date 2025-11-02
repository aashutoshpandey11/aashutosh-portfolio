import React from "react";

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">

            <h2 className="fw-bold mb-2">Contact Me</h2>
            <p className="text-muted mb-4">
              Please fill out the form below to discuss any work opportunities.
            </p>

            <form
              onSubmit={handleSubmit}
              className="shadow-sm p-4 rounded-4"
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  className="form-control form-control-lg"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-dark px-5 py-2 rounded-pill"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
