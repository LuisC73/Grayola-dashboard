import { IconLinkProps } from '@types';
import { Icon } from '../Icon/Icon';

export function IconLink({ icon, href, title, ariaLabel }: IconLinkProps) {
  return (
    <a
      href={href}
      title={title}
      aria-label={ariaLabel}
      target="_blank"
      className='border border-gray-900 rounded-full p-2 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 transition ease-out delay-150 shadow-button hover:fill-secondary'
    >
      <Icon {...icon} />
    </a>
  );
}
