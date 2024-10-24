// app/components/TestimonialsSection.tsx
export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              {`Lovely Media's work helped me showcase my properties with stunning visuals, which attracted more buyers and improved marketing of the property.`}
            </p>
            <p className="text-primary mt-4 font-bold">
              - Ramjit Dhaliwal, Winnipeg ReMax Realtor
            </p>
          </div>
          {/* Testimonial card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              {`The drone shots were amazing, and I got more buyer interest right after the listing went live!`}
            </p>
            <p className="text-primary mt-4 font-bold">
              - Sarah, Winnipeg Realtor
            </p>
          </div>
          {/* Testimonial card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              {`They made my listing look stunning, and the 3D virtual tours were a game changer.`}
            </p>
            <p className="text-primary mt-4 font-bold">
              - Mike, Winnipeg Realtor
            </p>
          </div>
          {/* Testimonial card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              {`Their fast turnaround helped me get my listings up quickly, and the quality was unbeatable. Lovely Media delivers on time every time.`}
            </p>
            <p className="text-primary mt-4 font-bold">
              - Jasmine, Winnipeg Realtor
            </p>
          </div>
          {/* Testimonial card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              {`The photos and videos were beyond my expectations. My clients were blown away by how the properties were presented.`}
            </p>
            <p className="text-primary mt-4 font-bold">
              - David, Winnipeg Realtor
            </p>
          </div>
          {/* Testimonial card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">
              {`The Matterport 3D tours made virtual showings so much easier for out-of-town buyers. It's a fantastic addition to my listing toolkit.`}
            </p>
            <p className="text-primary mt-4 font-bold">
              - Karen, Winnipeg Realtor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
