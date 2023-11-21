import { useToast } from '@/hooks/use-toast';
import IconButton from '@/components/global/IconButton';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconShare,
} from '@tabler/icons-react';
import React from 'react';

const ShareButtons = ({ infographic }) => {
  const toast = useToast();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: infographic.title,
        url: window.location.href,
      });
    } catch (e) {
      toast.error('Could not share');
    }
  };

  const title = encodeURIComponent(infographic.title);
  const url = encodeURIComponent(window.location.href);

  return (
    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
      {!!navigator?.canShare?.() && (
        <IconButton onClick={handleShare} icon={<IconShare size="20" />} rounded variant="subtle" color="black" />
      )}
      <a href={`https://www.facebook.com/sharer/sharer.php?quote=${title}&u=${url}`} target="_blank" className="flex">
        <IconButton icon={<IconBrandFacebook size="20" />} rounded variant="subtle" color="primary" />
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`} target="_blank" className="flex">
        <IconButton icon={<IconBrandTwitter size="20" />} rounded variant="subtle" color="primary" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&text=${title}&url=${url}`}
        target="_blank"
        className="flex"
      >
        <IconButton icon={<IconBrandLinkedin size="20" />} rounded variant="subtle" color="primary" />
      </a>
      <a href={`https://t.me/share/url?url=${url}&text=${title}`} target="_blank" className="flex">
        <IconButton icon={<IconBrandTelegram size="20" />} rounded variant="subtle" color="primary" />
      </a>
      <a href={`https://wa.me/?text=${title} ${url}`} target="_blank" className="flex">
        <IconButton icon={<IconBrandWhatsapp size="20" />} rounded variant="subtle" color="green" />
      </a>
    </div>
  );
};

export default ShareButtons;
