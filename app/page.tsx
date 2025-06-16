
import { Introduction } from "@/components/introduction";
import { ProfilePicture } from "@/components/profile-pic";

export default function Home() {
  return (
    <div className="max-w-[80%] mx-auto mt-30">
      <div className="grid grid-cols-2 items-center justify-center">
        <ProfilePicture />
        <Introduction />
      </div>
    </div>

  );
}
