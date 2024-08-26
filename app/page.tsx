export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/salman-abdul-ghani.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Tailored Web Solutions with WordPress, Laravel & Vue
          </h1>
          <p className="py-6">
            With 10+ years of experience, I craft custom web applications using
            WordPress, Laravel, and Vue. My focus is on solving complex problems
            and delivering scalable, tailored solutions that help your business
            thrive.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
