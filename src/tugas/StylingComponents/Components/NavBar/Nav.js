import NavItem from "./NavItem";

export default function Nav({ className, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    horizon: `flex justify-center space-x-10 `,
    vertic: `space-y-3 bg-black/50 rounded-full w-3/6 mx-auto`,
  };
  const pickedVariant = variants[variant];
  return (
    <ul className={`${pickedVariant}${addClassName}`}>
      <NavItem>
        <span className="text-yellow-500">Home</span>
      </NavItem>
      <NavItem href="#bio">Bio</NavItem>
      <NavItem href="#skills">Skills</NavItem>
    </ul>
  );
}
