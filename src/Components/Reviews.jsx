import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import '../CSS/Review.css';


/* ===============================
   COLUMN 1 REVIEWS
================================ */
const reviewsCol1 = [
  {
    text: "இந்த இடத்தில் தேநீர் ருசி அற்புதமாக உள்ளது. தினமும் வர விரும்புகிறேன்.",
    name: "அஞ்சலி",
    role: "கல்லூரி மாணவி",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Anjali"
  },
  {
    text: "மதுரையில் இதுபோன்ற சுவையான டீ கிடைப்பது அரிது. சூப்பர்!",
    name: "கார்த்திக்",
    role: "IT Engineer",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Karthik"
  },
  {
    text: "மாலை நேரத்தில் நண்பர்களுடன் அமர சிறந்த இடம்.",
    name: "பிரியா",
    role: "Designer",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Priya"
  },
  {
    text: "தேநீர் சுவையும் சேவையும் எப்போதும் ஒரே மாதிரி உள்ளது.",
    name: "விக்னேஷ்",
    role: "Student",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Vignesh"
  },
  {
    text: "விலை குறைவாக இருந்தும் தரம் மிக உயர்வு.",
    name: "மீனா",
    role: "Homemaker",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Meena"
  },
  {
    text: "மசாலா டீ ரொம்ப பிடிச்சிருக்கு. தினசரி வருகிறேன்.",
    name: "ராஜா",
    role: "Tea Lover",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Raja"
  },
  {
    text: "அமைதியான சூழல், சுத்தமான இடம்.",
    name: "கவிதா",
    role: "Teacher",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Kavitha"
  }
];

/* ===============================
   COLUMN 2 REVIEWS
================================ */
const reviewsCol2 = [
  {
    text: "காபி மணமும் சுவையும் மிக அருமை. தினமும் வருகிறேன்.",
    name: "சுரேஷ்",
    role: "Office Staff",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Suresh"
  },
  {
    text: "சிறிய இடம் ஆனாலும் அனுபவம் பெரியது.",
    name: "முரளி",
    role: "Businessman",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Murali"
  },
  {
    text: "நண்பர்களுடன் பேசிக்கொண்டே டீ குடிக்க சிறந்த இடம்.",
    name: "திவ்யா",
    role: "Content Writer",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Divya"
  },
  {
    text: "ஸ்நாக்ஸ் மற்றும் டீ காம்பினேஷன் அருமை.",
    name: "அரவிந்த்",
    role: "Marketing Executive",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aravind"
  },
  {
    text: "சர்வீஸ் வேகமாகவும் நட்பாகவும் உள்ளது.",
    name: "லலிதா",
    role: "Bank Employee",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Lalitha"
  },
  {
    text: "மதுரையில் நம்பிக்கையுடன் சொல்லக்கூடிய டீ கடை.",
    name: "செந்தில்",
    role: "Driver",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Senthil"
  },
  {
    text: "மாலை நேரத்திற்கு perfect spot.",
    name: "பவித்ரா",
    role: "Student",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Pavithra"
  }
];

/* ===============================
   COLUMN 3 REVIEWS
================================ */
const reviewsCol3 = [
  {
    text: "அமைதியான சூழ்நிலையில் டீ குடிக்க பிடித்த இடம்.",
    name: "ஸ்நேஹா",
    role: "HR Manager",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sneha"
  },
  {
    text: "விலை, சுவை, சேவை – மூன்றும் சிறப்பு.",
    name: "விக்ரம்",
    role: "Photographer",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Vikram"
  },
  {
    text: "இங்க வந்தா மனசு ரிலாக்ஸ் ஆகிடும்.",
    name: "நந்தினி",
    role: "Fashion Designer",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Nandhini"
  },
  {
    text: "எப்போதும் சுத்தமாகவும் ஒழுங்காகவும் இருக்கிறது.",
    name: "கணேஷ்",
    role: "Store Manager",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ganesh"
  },
  {
    text: "காபி lovers க்கு must try place.",
    name: "மகேஷ்",
    role: "Freelancer",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mahesh"
  },
  {
    text: "எளிமையான இடம், உயர்ந்த தரம்.",
    name: "பூஜா",
    role: "Yoga Trainer",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Pooja"
  },
  {
    text: "எப்போதும் fresh tea கிடைக்கிறது.",
    name: "சந்திரன்",
    role: "Daily Visitor",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Chandran"
  }
];

const ReviewCard = ({ data }) => (
  <div className="review-card">
    <p>“{data.text}”</p>
    <div className="review-user">
      <img src={data.avatar} alt={data.name} />
      <div>
        <strong>{data.name}</strong>
        <span>{data.role}</span>
      </div>
    </div>
  </div>
);

const ReviewSection = () => {

  /* ===============================
     SCROLL FADE-IN EFFECT (useRef)
  ================================ */
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ratingRef = useRef(null);

  useEffect(() => {
    const elements = [
      headingRef.current,
      subheadingRef.current,
      ratingRef.current
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="review-section">
      <div className="review-wrapper">

        <h2 className="review-heading" ref={headingRef}>
          See Why we’re rated <span>#1 best in Madurai</span>
        </h2>

        <p className="review-subheading" ref={subheadingRef}>
          Real words from customers who love spending their tea time with us.
        </p>

        <div className="review-rating" ref={ratingRef}>
          <FaStar /> 4.8 from 30+ Customers
        </div>

        <div className="review-grid">

          <div className="review-column">
            <div className="review-track">
              {[...reviewsCol1, ...reviewsCol1].map((item, i) => (
                <ReviewCard key={i} data={item} />
              ))}
            </div>
          </div>

          <div className="review-column">
            <div className="review-track">
              {[...reviewsCol2, ...reviewsCol2].map((item, i) => (
                <ReviewCard key={i} data={item} />
              ))}
            </div>
          </div>

          <div className="review-column">
            <div className="review-track">
              {[...reviewsCol3, ...reviewsCol3].map((item, i) => (
                <ReviewCard key={i} data={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
