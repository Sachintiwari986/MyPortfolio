function Education({ style }) {
  return (
    <section className='my-5'>
      <div className='container'>
        <h2 className='text-info mb-3' style={style}>
          Education
        </h2>
        <div className='card mb-3'>
          <div className='card-body'>
            <h5 className='card-title'>
              Postgraduate in Computer Software and Database Development
            </h5>
            <p className='card-text'>
              Loyalist College, Toronto, Canada —{" "}
              <strong>Expected Dec 2025</strong>
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>BSc in CSIT</h5>
            <p className='card-text'>
              Tribhuvan University, Kathmandu, Nepal —{" "}
              <strong>Graduated Dec 2020</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
