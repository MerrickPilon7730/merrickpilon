
import { Introduction } from "@/components/introduction";
import { ProfilePicture } from "@/components/profile-pic";

//TODO: Add another div for skills etc.

export default function Home() {
  return (
    <div className="max-w-[80%] mx-auto mt-30">
      <div className="grid lg:grid-cols-2 items-center justify-center grid-cols-1">
        <div className="order-2 lg:order-1">
          <Introduction />
        </div>
        <div className="order-1 lg:order-2">
          <ProfilePicture />
        </div>
      </div>
    </div>

  );
}
