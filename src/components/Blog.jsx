const Blog = ({ needFullheight }) => {
  return (
    <section className={`${needFullheight && "min-h-100vh"}blog wrapper`}>
      <h1 className="section-title">This is blog section</h1>
    </section>
  );
};

export default Blog;
