import "./pages.css";

// import saraswatiImg from "../assets/saraswati mata.png";

// export default function Home() {
//   return (
//     <div className="home-wrapper">
//       <div className="home-card">
        
//         <div className="home-left">
//           <img src={saraswatiImg} alt="Saraswati Devi" />
//         </div>

//         <div className="home-right">
//           <h2 className="home-title">সরস্বতী সংবর্ধনা</h2>

//           <p>
//             <span className="highlight">সুধী,</span>
//             <br /><br />
//            সাংস্কৃতিক সময়ে সমাজের সকল সদস্য সর্বদা সক্রিয় সুখে স্বপ্নমগ্ন।
// স্নেহের সন্তানদের সুশিক্ষা, সংস্কৃতি চর্চা সুশিক্ষকের সীমাহীন সেবাদানে।
// সেই সাথে সুবিবাদ, স্বার্থপরতা, স্বেচ্ছাচারিতার সংস্পর্শে যুক্ত, স্বাভাবিক
// সমাজ সমসাময়িক সময়ে স্বপ্নমগ্ন।

// সেই সুদিন সময়ে সমাজের সার্বিক সেবায়, সঠিক সত্যের সন্ধানে সাথে
// সুশিক্ষা স্থাপনের স্বার্থে সুসংহত, সমবায়ী ‘সবুজ সংঘের’ সহযোগিতায়,
// সম্পাদনায় সংঘটিত সুর সৃষ্ট ‘সরস্বতী’ সংবর্ধনায় সকল সুরুচিসম্পন্ন
// সুরুচি সম্পন্ন সাধারনকে স্বাগতম।
//             <br /><br />
//             <span className="signature">
//               বিনীত—<br />
//               সবুজ সংঘের সদস্যবৃন্দ
//             </span>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }



import "./Home.css";
import saraswatiImg from "../assets/saraswati mata.png";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-card">

        {/* LEFT SIDE IMAGE */}
        <div className="home-left">
          <img src={saraswatiImg} alt="Saraswati Devi" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="home-right">

          <h2 className="home-title">সরস্বতী পূজা</h2>

          {/* DIYA */}
          <div className="diya-container">
            <div className="flame"></div>
            <div className="wick"></div>
            <div className="diya"></div>
          </div>

          <p>
            <span className="highlight">হয়তো...</span>
            <br /><br />
 হয়তো স্বপ্ন লুটিয়ে পড়ছে শহরের কোন রাজপথে,
 <br/>
হয়তো শিক্ষা হারিয়ে যাচ্ছে 'অনেক পাওয়ার' অজুহাতে।
<br/>
হয়তো বিচার হয়েছে বিকার, শাসকের কাছে ন্যস্ত,
<br/>
হয়তো এসব জানতে না চেয়ে মানুষ এত ব্যস্ত।
<br/>
হয়তো মূর্তি পূজিত হচ্ছে অভুক্ত কোন ছেলের হাতে,
<br/>
হয়তো রাম রহিমের বিবাদ, অশুভ কোন মন্ত্রণাতে।
<br/>
হয়তো এসব মিথ্যা কথা, কিন্তু মিথ্যা নয়তো।
<br/>
মিথ্যা হলেই মানুষগুলো ভালো থাকতো হয়তো।                      
               <br /><br />
            <span className="signature">
              বিনীত—<br />
              সবুজ সংঘের সদস্যবৃন্দ
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
