const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center my-8">
      <p className="text-2xl mb-2 text-orange-400">---{subHeading}---</p>
      <h1 className="text-5xl  uppercase border-y-4 py-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
