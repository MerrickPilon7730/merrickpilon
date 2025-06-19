import { Databases } from "./databases";
import { Frameworks } from "./frameworks";
import { Languages } from "./languages";
import { Tools } from "./tools-platforms";

export function Technical() {
    return(
        <div className="mx-auto max-w-[85%]">
            <Languages />
            <Frameworks />
            <Databases />
            <Tools />
        </div>
    );
};