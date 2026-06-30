'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Reaction {
  id: string;
  src: string;
  label: string;
}

const REACTION_ICONS: Reaction[] = [
  { id: 'angry', src: '/image/album/reactions/angry.svg', label: 'angry' },
  { id: 'funny', src: '/image/album/reactions/funny.svg', label: 'funny' },
  {
    id: 'baffled',
    src: '/image/album/reactions/baffled.svg',
    label: 'baffled',
  },
  {
    id: 'sadness',
    src: '/image/album/reactions/sadness.svg',
    label: 'sadness',
  },
  {
    id: 'lovable',
    src: '/image/album/reactions/lovable.svg',
    label: 'lovable',
  },
];

// 👇 부모 컴포넌트에서 받을 데이터(Props) 정의
interface ReactionSelectorProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const ReactionSelector: React.FC<ReactionSelectorProps> = ({
  selectedId,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const getHeartImage = () => {
    if (isOpen) return '/image/album/reactions/icon_click.svg';
    if (isHovered) return '/image/album/reactions/icon_hover.svg';
    return '/image/album/reactions/icon_main.svg';
  };

  const handleReactionClick = (id: string) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="focus:outline-none transition-transform active:scale-90 cursor-pointer flex items-center justify-center"
      >
        <Image
          src={getHeartImage()}
          alt="heart icon"
          width={48}
          height={48}
          className="dt:w-12 dt:h-12 w-10 h-10 object-contain"
        />
      </button>

      {isOpen && (
        <div className="absolute z-20 w-60 h-12 dt:w-72 dt:h-14 dt:-top-16 -top-14 right-0 justify-between mb-0 dt:py-3 px-5 flex items-center bg-gray-0 rounded-full shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] animate-bounce-in">
          {REACTION_ICONS.map((icon) => (
            <button
              key={icon.id}
              onClick={() => handleReactionClick(icon.id)}
              className={
                `group relative transition-transform duration-200 hover:scale-110 hover:border-b-2 hover:border-yellow-main active:scale-95` +
                (selectedId === icon.id ? ' border-b-2 border-yellow-main' : '')
              }
            >
              <Image
                src={icon.src}
                alt={icon.label}
                width={32}
                height={32}
                className="dt:w-8 dt:h-8 w-7 h-7 object-contain pointer-events-none"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReactionSelector;
