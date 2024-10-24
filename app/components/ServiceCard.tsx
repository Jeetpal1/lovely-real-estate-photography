// app/components/ServiceCard.tsx
"use client";

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
}) => {
  const phoneNumber = "+12048876797";
  const message = `Hi, I’m interested in learning more about your ${title} service. Can we discuss the details?`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-text mb-4">{description}</p>
      <button
        onClick={() =>
          window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`)
        }
        className="bg-primary text-white px-4 py-2 rounded-full"
      >
        Contact Us to Learn More
      </button>
    </div>
  );
};
