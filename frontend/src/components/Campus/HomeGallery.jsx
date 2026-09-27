import schoolImages from "../../Data/LinkData";
function GalleryImage({ src }) {
  return (
    <div className="gallery-image">

      <img src={src} alt="DJM Global Academy" />

      <div className="gallery-overlay">
        <span>View</span>
      </div>

    </div>
  );
}

export default function HomeGallery() {
  return (
    <div id="gallery" className="gallery-grid">

        <GalleryImage src={schoolImages.lab} />

        <GalleryImage src={schoolImages.classroom} />

        <GalleryImage src={schoolImages.sports} />

        <GalleryImage src={schoolImages.library} />

        <GalleryImage src={schoolImages.activity} />

        <GalleryImage src={schoolImages.campus} />

    </div>
  )
}