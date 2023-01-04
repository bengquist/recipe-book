import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: string;
  icon: IconProp;
};

export function NavButton({ children, icon }: Props) {
  return (
    <div className="group">
      <button className="text-left text-xl group-hover:bg-light-green group-hover:text-white rounded-xl px-4 py-3 text-light-green transition-all">
        <FontAwesomeIcon icon={icon} className="mr-4" />
        <span>{children}</span>
      </button>
    </div>
  );
}
