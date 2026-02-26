type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export default function PhotoModal({ src, alt, onClose }: Props) {

  return (

    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >

      <div
        className="max-w-5xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-xl"
        />

      </div>

    </div>

  );
}