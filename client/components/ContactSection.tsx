import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Thank you for your message! We will get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["WeWork Olympia Cyberspace", "Guindy, Chennai"],
      type: "address",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9444233285"],
      link: "tel:+916374097419",
      type: "phone",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["datagenesissolutions07@gmail.com"],
      link: "mailto:datagenesissolutions07@gmail.com",
      type: "email",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Availability",
      details: ["24/7 Support Available"],
      type: "hours",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden text-white"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-green-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-primary/20 border border-brand-green-primary/40 rounded-full mb-4">
            <MessageCircle size={16} className="text-brand-green-light" />
            <span className="text-sm font-semibold text-brand-green-light">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect With Us
            <span className="block bg-gradient-to-r from-brand-blue-light to-brand-green-primary bg-clip-text text-transparent">
              Let's Build Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your learning journey or discuss your project? Reach
            out to us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-brand-green-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-blue-green/20 rounded-lg flex items-center justify-center text-brand-green-light">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{info.title}</h4>
                    {info.type === "phone" || info.type === "email" ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-brand-green-light transition-colors"
                      >
                        {info.details[0]}
                      </a>
                    ) : (
                      <div>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/916374097419?text=Hello%20Data%20Genesis%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={20} />
              Chat with Us on WhatsApp
            </a>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 border border-white/10">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3022254900063!2d80.22102231518849!3d13.00190179041898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266745bb00001%3A0x3c3f3c3f3c3f3c3f!2sWeWork%20Olympia%20Cyberspace%2C%20Guindy!5e0!3m2!1sen!2sin!4v1234567890"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-green-primary/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-green-primary/50 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-green-primary/50 transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-green-primary/50 transition-colors"
                  >
                    <option value="" className="bg-gray-900">
                      Select a subject
                    </option>
                    <option value="training" className="bg-gray-900">
                      Training Inquiry
                    </option>
                    <option value="job-support" className="bg-gray-900">
                      Job Support
                    </option>
                    <option value="projects" className="bg-gray-900">
                      Freelance Projects
                    </option>
                    <option value="internship" className="bg-gray-900">
                      Internship Application
                    </option>
                    <option value="other" className="bg-gray-900">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-green-primary/50 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-blue-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-400 mt-4 text-center">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border-l-4 border-brand-green-primary bg-white/5 rounded">
              <h4 className="font-bold mb-2">What are your working hours?</h4>
              <p className="text-gray-300 text-sm">
                We provide 24/7 support for all our clients. You can reach us
                anytime for urgent matters.
              </p>
            </div>

            <div className="p-4 border-l-4 border-brand-blue-light bg-white/5 rounded">
              <h4 className="font-bold mb-2">
                How long do training programs take?
              </h4>
              <p className="text-gray-300 text-sm">
                Our training programs range from 1 month to 6 months, depending
                on your learning goals.
              </p>
            </div>

            <div className="p-4 border-l-4 border-brand-green-primary bg-white/5 rounded">
              <h4 className="font-bold mb-2">
                Do you provide placement assistance?
              </h4>
              <p className="text-gray-300 text-sm">
                Yes, we provide resume guidance, interview preparation, and job
                recommendations for all our trainees.
              </p>
            </div>

            <div className="p-4 border-l-4 border-brand-blue-light bg-white/5 rounded">
              <h4 className="font-bold mb-2">Can I do internship remotely?</h4>
              <p className="text-gray-300 text-sm">
                Yes, we offer both remote and on-site internship options based
                on your preference.
              </p>
            </div>

            <div className="p-4 border-l-4 border-brand-green-primary bg-white/5 rounded">
              <h4 className="font-bold mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-gray-300 text-sm">
                We accept various payment methods including bank transfers, UPI,
                credit/debit cards, and more.
              </p>
            </div>

            <div className="p-4 border-l-4 border-brand-blue-light bg-white/5 rounded">
              <h4 className="font-bold mb-2">Is there a refund policy?</h4>
              <p className="text-gray-300 text-sm">
                Yes, we have a 7-day money-back guarantee if you're not
                satisfied with our training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
