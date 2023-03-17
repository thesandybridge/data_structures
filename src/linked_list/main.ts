export const linkedList = () => {
    console.log("Linked List");
};

interface DoublyLinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

// A <-> B <-> C <-> D
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("shit, we are outside the bounds");
        }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            curr = curr?.next;
        }

        curr = curr as Node<T>;
        const node = {value: item} as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (curr.prev) {
           curr.prev.next = curr;
        }
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
               break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return;
        }

        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return;
        }

    }

    removeAt(idx: number): T | undefined {}

    append(item: T): void {
        this.length++;
        const node = {value: item} as Node<T>;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    get(idx: number): T | undefined {}
}
