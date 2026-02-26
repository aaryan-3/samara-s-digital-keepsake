interface PhotoModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const PhotoModal = ({ src, alt, onClose }: PhotoModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-3xl max-h-[85vh] fade-in-up">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain rounded-2xl shadow-soft-lg"
        />
        <p className="text-center text-primary-foreground mt-3 font-medium text-lg">{alt}</p>
      </div>
    </div>
  );
};

export default PhotoModal;
