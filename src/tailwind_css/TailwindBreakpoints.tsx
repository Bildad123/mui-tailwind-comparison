const breakpoints = [
  { prefix: "sm", minWidth: "640px" },
  { prefix: "md", minWidth: "768px" },
  { prefix: "lg", minWidth: "1024px" },
  { prefix: "xl", minWidth: "1280px" },
  { prefix: "2xl", minWidth: "1536px" },
];

const TailwindBreakpoints = () => {
  return (
    <div className="overflow-x-auto font-roboto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
              Breakpoint Prefix
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
              Minimum Width
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {breakpoints.map((breakpoint) => (
            <tr key={breakpoint.prefix}>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm">
                {breakpoint.prefix}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm">
                {breakpoint.minWidth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TailwindBreakpoints;
