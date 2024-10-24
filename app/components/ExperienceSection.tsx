// app/components/ExperienceSection.tsx

import React from "react";
import ReactCompareImage from "react-compare-image";

const before1 = "/images/before1.jpg";
const after1 = "/images/after1.jpg";
const before2 = "/images/before2.jpg";
const after2 = "/images/after2.jpg";
const before3 = "/images/before3.jpg";
const after3 = "/images/after3.jpg";
const before4 = "/images/before4.jpg";
const after4 = "/images/after4.jpg";

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">
          Experience the Difference with High-End Media
        </h2>
        <p className="text-lg mb-8">
          Click and drag the slider to see the difference professional
          enhancements make. Imagine how we can elevate your listings!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <ReactCompareImage leftImage={before1} rightImage={after1} />
          </div>
          <div>
            <ReactCompareImage leftImage={before2} rightImage={after2} />
          </div>
          <div>
            <ReactCompareImage leftImage={before3} rightImage={after3} />
          </div>
          <div>
            <ReactCompareImage leftImage={before4} rightImage={after4} />
          </div>
        </div>
        <p className="text-lg mt-8">
          Ready to showcase your properties like never before?{" "}
          <a
            href="tel:+12048876797"
            className="text-primary underline hover:text-primary-dark"
          >
            Call us now
          </a>{" "}
          to discuss how we can help you stand out.
        </p>
        {/* <p className="text-lg mt-8">
          Want to see more of our work?{" "}
          <a
            href="/portfolio"
            className="text-primary underline hover:text-primary-dark"
          >
            Click here
          </a>
        </p> */}
      </div>
    </section>
  );
};

export default ExperienceSection;
