import DoublyLinkedList from "./linked_list/main";

const list = new DoublyLinkedList();

list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.prepend("Z");

console.log(list.print_list());
