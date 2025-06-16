
import { Introduction } from "@/components/introduction";
import { ProfilePicture } from "@/components/profile-pic";

export default function Home() {
  return (
    <div className="grid grid-cols-2 mt-30">
      <ProfilePicture />
      <Introduction />
    </div>
  );
}
