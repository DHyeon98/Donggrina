import Button from '@/components/common/button/button';
import { LinkType } from './types/link-type';
import { useRouter } from 'next/router';

export default function LinkItem({ text, href, className }: LinkType) {
  const router = useRouter();
  const handleRouter = () => {
    router.replace(href);
  };
  return (
    <li>
      <Button className={className} round onClick={handleRouter}>
        {text}
      </Button>
    </li>
  );
}
