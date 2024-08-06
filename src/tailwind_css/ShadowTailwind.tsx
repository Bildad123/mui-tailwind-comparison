const ShadowTailwind = () => {
  const shadowClasses = [
    { class: "shadow-none", label: "shadow-none" },
    { class: "shadow-md", label: "shadow-md" },
    { class: "shadow-lg", label: "shadow-lg" },
    { class: "shadow-xl", label: "shadow-xl" },
    { class: "shadow-2xl", label: "shadow-2xl" },
  ];

  return (
    <div className="font-roboto flex justify-center items-center gap-16 min-h-screen flex-wrap">
      {shadowClasses.map((shadow, index) => (
        <div key={index} className="text-center">
          <div className={`${shadow.class} h-72 w-36 p-4 rounded-md bg-gray-100`}>
            <div className="h-full w-full"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{shadow.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ShadowTailwind;
