import Image from 'next/image';

export default function Avatar({ src  }) {
  return (
    <Image
      className="rounded-full"
      src={src}
      alt="Profile Picture"
      width={40}
      height={40}
    />
  );
}
