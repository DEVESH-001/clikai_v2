import HeroVideoDialog from './hero-video-dialog'

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/s5TW1MMYmLo"
        thumbnailSrc="/images/Products_Section_Images/AutoUW/Hero_Video.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/s5TW1MMYmLo"
        thumbnailSrc="/images/Products_Section_Images/AutoUW/Hero_Video.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
