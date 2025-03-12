import HeroVideoDialog from './hero-video-dialog'

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/fK76IfbaD8c?si=VpvKZwCAbbrL9occ"
        thumbnailSrc="/images/Products_Section_Images/AutoUW/Hero_Video.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/fK76IfbaD8c?si=VpvKZwCAbbrL9occ"
        thumbnailSrc="/images/Products_Section_Images/AutoUW/Hero_Video.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
