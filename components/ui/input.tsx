import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";

type Props = {
  icon?: IconProp;
  error?: string;
};

export function Input({
  icon,
  error,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative max-w-xl">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute p-3 text-light-green"
        />
      )}
      <input
        {...props}
        className="pl-10 pr-6 py-2 rounded-lg w-full text-light-green"
      />
      {error && <p>{error}</p>}
    </div>
  );
}
