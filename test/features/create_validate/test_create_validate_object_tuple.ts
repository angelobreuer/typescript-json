import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_tuple = _test_validate(
    "tuple union object",
    ObjectTuple.generate,
    TSON.createValidate<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
