import "./pages.css";
import "./Member.css";



const contacts = [
  {
    name: "দীপ্তজিৎ ভদ্র",
    phone: "9832737308",
  },
  {
    name: "প্রসেনজিৎ ভদ্র",
    phone: "9326676132",
  },
  {
    name: "শ্যামল প্রামাণিক",
    phone: "8389059509",
  },
  {
    name: "অন্তু দত্ত",
    phone: "9593604424",
  },
  
];

export default function Contact() {
  return (
    <section className="contact-section">
      <h1>যোগাযোগ করুন</h1>
      <p className="subtitle">অনুষ্ঠানের সমস্ত বিষয় জানবার জন্য</p>

      <div className="card-container">
        {contacts.map((person, index) => (
          <div className="contact-card" key={index}>
            <h3>{person.name}</h3>
            <p>📞 {person.phone}</p>

            <a href={`tel:${person.phone}`} className="call-btn">
              Call Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


