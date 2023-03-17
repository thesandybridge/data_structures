import DoublyLinkedList from "../linked_list/main";
import { test_list } from "./linked_list";

test("DoublyLinkedList", function () {
    const list = new DoublyLinkedList<number>();
    test_list(list);
});

