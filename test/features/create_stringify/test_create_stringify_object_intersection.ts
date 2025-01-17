import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_intersection = _test_stringify(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createStringify<ObjectIntersection>(),
);
