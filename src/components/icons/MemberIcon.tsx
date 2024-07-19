import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export function MemberIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        fill="none"
        // height="32"
        viewBox="0 0 26 32"
        // width="26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M5.908 6.857c0-1.818.747-3.563 2.077-4.849A7.217 7.217 0 0113 0c1.88 0 3.685.722 5.015 2.008a6.744 6.744 0 012.077 4.85 6.744 6.744 0 01-2.077 4.848A7.217 7.217 0 0113 13.714a7.217 7.217 0 01-5.015-2.008 6.744 6.744 0 01-2.077-4.849zM0 28.35c.053-3.3 1.446-6.447 3.878-8.762 2.433-2.316 5.709-3.613 9.122-3.613 3.413 0 6.69 1.298 9.122 3.613 2.432 2.315 3.825 5.463 3.878 8.762.004.223-.06.441-.181.63a1.17 1.17 0 01-.508.43A30.296 30.296 0 0113 32 30.29 30.29 0 01.689 29.41a1.17 1.17 0 01-.508-.43 1.115 1.115 0 01-.18-.63z"
          fill="#000830"
          fillRule="evenodd"
        ></path>
      </svg>
    </SvgIcon>
  )
}
