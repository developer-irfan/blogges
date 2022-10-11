import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  //return here
  return (
    <>
    <div className="contact_div">
      <div className="view py-3">
        <section className="text-center px-md-5 mx-md-5 dark-grey-text">
          <h3 className="font-weight-bold mb-4  pt-5">Contact Us</h3>

          <p className="text-center w-responsive mx-auto mb-5 ">
            Send your subject and query or any other related stuffs to us. We
            can contact as soon as possible.
          </p>

          <div className="container row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        {...register("name", {
                          required: true,
                          minLength: 3,
                          className: "is-invalid",
                        })}
                        type="text"
                        name="name"
                        id="contact-name"
                        placeholder="Your name"
                        className="form-control ph_color"
                      />

                      {/* name field validation */}
                      {errors.name && errors.name.type === "required" && (
                        <p
                          className="text-danger font-italic"
                          style={{
                            fontSize: "13px",
                            paddingTop: "5px",
                          }}
                        >
                          Name is Required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        {...register("email", {
                          required: true,
                          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{1,}$/,
                        })}
                        type="text"
                        name="email"
                        id="contact-email"
                        placeholder="Your email"
                        className="form-control ph_color"
                      />

                      {/* email field validation */}
                      {errors.email && errors.email.type === "required" && (
                        <p
                          className="text-danger font-italic"
                          style={{
                            fontSize: "13px",
                            paddingTop: "5px",
                          }}
                        >
                          Email Required
                        </p>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <p
                          className="text-danger font-italic"
                          style={{
                            fontSize: "13px",
                            paddingTop: "5px",
                          }}
                        >
                          Invalid Email Adress
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="contact-Subject"
                        className="form-control ph_color"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        {...register("your_message", {
                          required: true,
                          minLength: 30,
                          maxLength: 100,
                          className: "is-invalid",
                        })}
                        name="your_message"
                        id="contact-message"
                        className="form-control md-textarea ph_color"
                        rows="3"
                        placeholder="Your message"
                      />
                      {errors.your_message &&
                        errors.your_message.type === "required" && (
                          <p className="text-danger font-italic">
                            Message is Required
                          </p>
                        )}
                      {errors.your_message &&
                        errors.your_message.type === "minLength" && (
                          <p className="text-danger font-italic">
                            Atleast 30 words
                          </p>
                        )}
                      {errors.your_message &&
                        errors.your_message.type === "maxLength" && (
                          <p className="text-danger font-italic">
                            No more than 100 words
                          </p>
                        )}
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button
                    type="submit"
                    whileHover="hover"
                    className="btn btn-primary btn-md btn-rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x "></i>
                  <p className=" pt-2">Blogs things, Pakistan</p>
                </li>
                <li>
                  <i className="fas fa-phone fa-2x mt-4 "></i>
                  <p className=" p-2">+ 92 342 2022174</p>
                </li>
                <li>
                  <i className="fas fa-envelope fa-2x mt-4"></i>
                  <p className="mb-0 pt-2">
                    developer.m.irfan@gmail.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default Contact;
