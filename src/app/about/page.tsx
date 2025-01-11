export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-red-600">About Us</h1>
      <div className="space-y-6 text-gray-700">
        <p>
          Welcome to our Blood Donation App, a platform dedicated to saving
          lives through the power of blood donation. Our mission is to connect
          generous donors with those in urgent need, creating a community of
          life-savers.
        </p>
        <h2 className="text-2xl font-semibold text-red-500 mt-4">Our Vision</h2>
        <p>
          We envision a world where no one dies due to a lack of blood. By
          leveraging technology and artificial intelligence, we aim to
          streamline the blood donation process, making it more efficient and
          accessible to all.
        </p>
        <h2 className="text-2xl font-semibold text-red-500 mt-4">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Connect blood donors with recipients in real-time</li>
          <li>Provide a user-friendly platform for blood donation requests</li>
          <li>Utilize AI to optimize blood distribution and manage requests</li>
          <li>Raise awareness about the importance of blood donation</li>
          <li>Ensure a safe and reliable blood donation process</li>
        </ul>
        <h2 className="text-2xl font-semibold text-red-500 mt-4">
          Our Technology
        </h2>
        <p>
          We integrate cutting-edge AI technology, powered by Google's Gemini
          API, to make intelligent decisions about blood donation requests and
          distribution. This ensures that we can respond quickly and effectively
          to urgent needs, even when human administrators are not available.
        </p>
        <h2 className="text-2xl font-semibold text-red-500 mt-4">Join Us</h2>
        <p>
          Whether you're a donor looking to make a difference or someone in need
          of blood, our platform is here to help. Join our community today and
          be part of this life-saving mission.
        </p>
        <p className="font-semibold">
          Together, we can make a difference - one donation at a time.
        </p>
      </div>
    </div>
  );
}
