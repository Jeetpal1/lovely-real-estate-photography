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
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  );
};
