const todoList = require('../todo')

const { all, markAsComplete, add } = todoList()

describe('ToDo List Test Suite', () => {
	beforeAll(() => {
		add({
			title: 'Complete WD201',
			dueDate: new Date().toLocaleDateString('en-CA'),
			completed: false,
		})

		add({
			title: 'Complete Assignment',
			dueDate: new Date().toLocaleDateString('en-CA'),
			completed: false,
		})

		add({
			title: 'Complete Home work',
			dueDate: new Date().toLocaleDateString('en-CA'),
			completed: false,
		})
	})

	test('should add a todo item to the list', () => {
		const len = all.length
		add({
			title: 'Complete WD201',
			dueDate: new Date().toLocaleDateString('en-CA'),
			completed: false,
		})
		expect(all.length).toBe(len + 1)
	})

	test('Should mark a todo as complete', () => {
		expect(all[0].completed).toBe(false)
		markAsComplete(0)
		expect(all[0].completed).toBe(true)
	})
})
