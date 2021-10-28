class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }

    // 根据 value 查找节点
    findByValue(item) {
        let currentNode = this.head.next
        while(currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next
        }
        console.log('findByValue currentNode>>>>', currentNode)
        return currentNode === null ? -1 : currentNode
    }

    // 根据 index 查找节点, 下标从 0 开始
    findByIndex(index) {
        let currentNode = this.head.next
        let pos = 0
        while(currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }
        console.log('findByIndex currentNode>>>>', currentNode)
    }

    // 向链表末尾追加节点
    append (newElement) {
        const newNode = new Node(newElement)
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }

    // 指定元素向后插入
    insert (newElement, element) {
        const currentNode = this.findByValue(element)
        if (currentNode === -1) {
            console.log('未找到插入位置')
            return
        }
        const newNode = new Node(newElement)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }

    // 查找前一个
    findPrev(item) {
        let currentNode = this.head
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        if (currentNode.next === null) return -1

        return currentNode
    }

    // 根据值删除
    remove(item) {
        const prevNode = this.findPrev(item)
        if (prevNode === -1) {
            console.log('未找到元素')
            return
        }
        prevNode.next = prevNode.next.next
    }

    // 遍历显示所有节点
    display() {
        let currentNode = this.head.next
        while(currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

// Test
const List = new LinkedList()
List.append('append1')
List.append('append2')
List.append('append3')
List.append('append4')
console.log('---------------insert item--------------')
List.insert('insert1', 'append1')
List.insert('insert2', 'append3')
List.display()
console.log(List)
// console.log('---------------remove item--------------')
// List.remove('test1')
// List.display()
// console.log('---------------find by item--------------')
// List.findByValue('test2')
// console.log('---------------find by index--------------')
// List.findByIndex(2)
// console.log('---------------与头结点同值元素测试--------------')
// List.insert('test5', 'test6')
// List.display()
// List.findPrev('test5')
// List.remove('test5')
// List.display()