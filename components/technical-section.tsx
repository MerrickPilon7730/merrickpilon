import { Databases } from "./databases";
import { Frameworks } from "./frameworks";
import { Languages } from "./languages";

export function Technical() {
    return(
        <div className="mx-auto max-w-[85%]">
            <Languages />
            <Frameworks />
            <Databases />
        </div>
    );
};