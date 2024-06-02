import React from "react";

interface CloseIconProps {
  onClick: () => void;
  size?: number;
  fill?: string;
  className?: string;
}

export default function CloseIcon({
  onClick,
  size = 14,
  fill = "#010101",
  className,
}: CloseIconProps) {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="button">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Vector"
                d="M0.333508 14C0.248173 14 0.162837 13.9673 0.0975023 13.9027C-0.0325008 13.7727 -0.0325008 13.5613 0.0975023 13.4313L13.4312 0.0975035C13.5612 -0.0325012 13.7725 -0.0325012 13.9025 0.0975035C14.0325 0.227508 14.0325 0.438849 13.9025 0.568854L0.568847 13.9027C0.504179 13.9673 0.418843 14 0.333508 14Z"
                fill={fill}
              />
            </g>
            <g id="Group_3">
              <path
                id="Vector_2"
                d="M13.6672 14C13.5818 14 13.4965 13.9673 13.4312 13.9027L0.0975023 0.568854C-0.0325008 0.438849 -0.0325008 0.227508 0.0975023 0.0975035C0.227505 -0.0325012 0.438844 -0.0325012 0.568847 0.0975035L13.9025 13.4313C14.0325 13.5613 14.0325 13.7727 13.9025 13.9027C13.8378 13.9673 13.7525 14 13.6672 14Z"
                fill={fill}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
