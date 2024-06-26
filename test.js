const ArrayList = require('./ArrayList');

test('should add elements to the list', () => {
    const list = new ArrayList();
    list.add(1);
    list.add(2);
    expect(list.size()).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
});

test('should throw an error when accessing an invalid index', () => {
    const list = new ArrayList();
    list.add(1);
    expect(() => list.get(2)).toThrow('Index out of bounds');
    expect(() => list.get(-1)).toThrow('Index out of bounds');
});

test('should remove elements from the list', () => {
    const list = new ArrayList();
    list.add(1);
    list.add(2);
    const removedElement = list.remove(0);
    expect(removedElement).toBe(1);
    expect(list.size()).toBe(1);
    expect(list.get(0)).toBe(2);
});

test('should throw an error when removing from an invalid index', () => {
    const list = new ArrayList();
    list.add(1);
    expect(() => list.remove(1)).toThrow('Index out of bounds');
    expect(() => list.remove(-1)).toThrow('Index out of bounds');
});

test('should return the correct size of the list', () => {
    const list = new ArrayList();
    expect(list.size()).toBe(0);
    list.add(1);
    expect(list.size()).toBe(1);
    list.add(2);
    expect(list.size()).toBe(2);
});

test('should correctly identify if the list is empty', () => {
    const list = new ArrayList();
    expect(list.isEmpty()).toBe(true);
    list.add(1);
    expect(list.isEmpty()).toBe(false);
    list.remove(0);
    expect(list.isEmpty()).toBe(true);
});
