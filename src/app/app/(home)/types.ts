import { ReturnTypeWithoutPromise } from "@/types/return-type-without-promise";
import { getUserToDos } from "./actions";

export type ToDo = ReturnTypeWithoutPromise<typeof getUserToDos>[0];