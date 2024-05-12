import { cn } from '../../../../utils/helpers/tailwindMerge';

interface Props {
  size: number;
  color?: string;
  className?: string;
}

function Avatar({ size = 24, color = '#000000', className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      height={size}
      width={size}
      className={cn(className)}>
      <path
        fill={color}
        d="M31.688 29.688l2.357-.088C39.849 29.537 44.147 30.768 49 34c5.289 5.428 6.346 10.66 6.313 18.063l.048 2.142c.003 2.897-.156 5.327-1.325 7.996-3.232 2.856-6.87 2.35-10.974 2.295l-2.656.005a540.138 540.138 0 01-5.557-.034c-2.839-.03-5.675-.021-8.513-.008-1.8-.006-3.599-.015-5.399-.025l-2.575.008c-5.899-.094-5.899-.094-8.083-1.734-2.19-2.923-1.764-6.386-1.717-9.895l.026-2.328C8.753 44.968 9.198 40.277 13 36c5.844-5.246 10.911-6.218 18.687-6.313zm-15 10.875c-2.85 4.116-2.796 6.539-2.75 11.562l.027 3.883L14 59c3.006 1.503 5.777 1.13 9.125 1.133l2.13.003c1.486 0 2.972-.001 4.458-.006 2.278-.005 4.556 0 6.834.007 1.443 0 2.885-.002 4.328-.004l3.992-.004c3.038.09 3.038.09 5.133-1.129.914-9.194.914-9.194-1.75-17.688-3.883-3.99-6.682-6.146-12.395-6.515l-3.667-.047-3.645-.078c-5.164.478-8.391 2.051-11.855 5.89zM39.875 1.125c3.418 3.016 5.766 5.646 6.512 10.277.188 4.314-.148 7.092-2.012 11.036-3.794 4.093-6.776 5.384-12.313 6C27.456 28.242 24.718 26.697 21 24c-3.436-3.769-3.512-7.659-3.352-12.563.673-4.662 3.05-7.289 6.477-10.312 5.182-2.028 10.568-2.028 15.75 0zM23 10c-.692 4.303-.516 6.21 1.875 9.875 2.512 2.512 3.419 3.047 6.938 3.438 3.918-.385 5.4-1.606 8.187-4.313 1.57-3.139 1.352-5.539 1-9-1.988-2.92-3.431-4.611-6.938-5.48-5.264-.37-8.01.999-11.062 5.48z"></path>
    </svg>
  );
}

export default Avatar;
