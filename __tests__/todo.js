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

	test('Should retrieve overdue items', () => {
		const overdueCount = all.filter((item) => {
			return new Date(item.dueDate) < new Date()
		}).length
		add({
			title: 'New overdue item',
			dueDate: new Date('2020-01-01'),
			completed: false,
		})

		const newOverdueCount = all.filter((item) => {
			return new Date(item.dueDate) < new Date()
		}).length

		expect(newOverdueCount).toBe(overdueCount + 1)
	})

	test('Should retrieve due today items', () => {
		const dueTodayCount = all.filter((item) => {
			return item.dueDate === new Date().toLocaleDateString('en-CA')
		}).length

		add({
			title: 'New due today item',
			dueDate: new Date().toLocaleDateString('en-CA'),
			completed: false,
		})

		const newDueTodayCount = all.filter((item) => {
			return item.dueDate === new Date().toLocaleDateString('en-CA')
		}).length

		expect(newDueTodayCount).toBe(dueTodayCount + 1)
	})

	test('Should retrieve due later items', () => {
		const dueLaterCount = all.filter((item) => {
			return item.dueDate > new Date().toLocaleDateString('en-CA')
		}).length

		add({
			title: 'New due later item',
			dueDate: new Date('2023-12-31').toLocaleDateString('en-CA'),
			completed: false,
		})

		const newDueLaterCount = all.filter((item) => {
			return item.dueDate > new Date().toLocaleDateString('en-CA')
		}).length

		expect(newDueLaterCount).toBe(dueLaterCount + 1)
	})
})
