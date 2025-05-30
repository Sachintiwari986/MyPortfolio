function About({ style }) {
  return (
    <section className='my-5'>
      <div className='container'>
        <h2 className='text-primary mb-3' style={style}>
          About Me
        </h2>
        <p
          className='lead'
          style={{
            fontSize: "18px",
            fontWeight: 400,
          }}
        >
          Full Stack Developer with 3+ years of experience in .NET Core, React,
          and database systems. I enjoy building scalable applications and
          leading development teams.
        </p>
      </div>
    </section>
  );
}
export default About;
