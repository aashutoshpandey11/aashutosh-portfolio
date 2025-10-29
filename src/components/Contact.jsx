import React from "react";

const Contact = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            
            {/* Heading */}
            <h2 className="fw-bold mb-2">Contact Me</h2>
            <p className="text-muted mb-4">
              Please fill out the form below to discuss any work opportunities.
            </p>

            {/* Form */}
            <form className="shadow-sm p-4 rounded-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control form-control-lg"
                  rows="5"
                  placeholder="Your Message"
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
