const NotFound = ({ needFullheight }) => {
  return (
    <section className={`${needFullheight && "min-h-100vh"}not-found wrapper`}>
      <h1 className="section-title">Page Not Found</h1>
    </section>
  );
};

export default NotFound;
