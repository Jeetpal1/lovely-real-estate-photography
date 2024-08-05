import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lovely Real Estate Photography | Winnipeg</title>
        <meta
          name="description"
          content="Lovely Real Estate Photography, based in Winnipeg, specializes in professional real estate photography services. We offer high-quality photos, 3D Matterport tours, drone photography, and video walkthroughs to showcase properties at their best. Our experienced team and state-of-the-art equipment ensure your listings stand out in the competitive market. Visit realestate.lovelyphotography.ca to book your session today."
        />
        <meta
          property="og:title"
          content="Lovely Real Estate Photography | Winnipeg"
        />
        <meta
          property="og:description"
          content="Lovely Real Estate Photography, based in Winnipeg, specializes in professional real estate photography services. We offer high-quality photos, 3D Matterport tours, drone photography, and video walkthroughs to showcase properties at their best. Our experienced team and state-of-the-art equipment ensure your listings stand out in the competitive market. Visit realestate.lovelyphotography.ca to book your session today."
        />
        <meta
          property="og:image"
          content="https://realestate.lovelyphotography.ca/logo.png"
        />
        <meta
          property="og:url"
          content="https://realestate.lovelyphotography.ca/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Real Estate Photography Winnipeg, Property Photography Winnipeg, Drone Photography Winnipeg, 3D Matterport Tours Winnipeg, Real Estate Listings Photography, Professional Property Photos Winnipeg, Lovely Real Estate Photography"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://realestate.lovelyphotography.ca/" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Lovely Real Estate Photography
          </h1>
          <p className="text-lg mb-6">
            Based in Winnipeg, we specialize in professional real estate
            photography services. Our goal is to help you showcase your
            properties in the best light with high-quality photos, 3D Matterport
            tours, drone photography, and video walkthroughs.
          </p>
          <Link
            href="/booking"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Book a Session
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-item">
              <Image
                src="/images/real-estate-photography.jpg"
                alt="Real Estate Photography"
                width={600}
                height={400}
              />
              <h3 className="text-2xl font-bold mt-4">
                Real Estate Photography
              </h3>
              <p>
                High-quality photos that capture the essence of your properties.
              </p>
            </div>
            <div className="service-item">
              <Image
                src="/images/3d-matterport-tours.jpg"
                alt="3D Matterport Tours"
                width={600}
                height={400}
              />
              <h3 className="text-2xl font-bold mt-4">3D Matterport Tours</h3>
              <p>
                Immersive 3D tours that allow potential buyers to explore
                properties virtually.
              </p>
            </div>
            <div className="service-item">
              <Image
                src="/images/drone-photography.jpg"
                alt="Drone Photography"
                width={600}
                height={400}
              />
              <h3 className="text-2xl font-bold mt-4">Drone Photography</h3>
              <p>
                Stunning aerial shots that provide a unique perspective of your
                properties.
              </p>
            </div>
            <div className="service-item">
              <Image
                src="/images/video-walkthroughs.jpg"
                alt="Video Walkthroughs"
                width={600}
                height={400}
              />
              <h3 className="text-2xl font-bold mt-4">Video Walkthroughs</h3>
              <p>
                Engaging video tours that highlight the best features of your
                properties.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
