export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const lV = this.data[leftIdx];
        const rV = this.data[rightIdx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.data[idx] = rV;
            this.data[rightIdx] = v;
            this.heapifyDown(rightIdx);
        } else if (rV > lV && v > lV) {
            this.data[idx] = lV;
            this.data[leftIdx] = v;
            this.heapifyDown(leftIdx);
        }

    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const pv = this.data[p];
        const v = this.data[idx];

        if (pv > v) {
            this.data[idx] = pv;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
