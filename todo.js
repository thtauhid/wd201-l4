const todoList = () => {
	all = []
	const add = (todoItem) => {
		all.push(todoItem)
	}
	const markAsComplete = (index) => {
		all[index].completed = true
	}

	const overdue = () => {
		// Write the date check condition here and return the array of overdue items accordingly.
		return all.filter((item) => {
			return item.dueDate < formattedDate(new Date())
		})
	}

	const dueToday = () => {
		// Write the date check condition here and return the array of todo items that are due today accordingly.
		return all.filter((item) => {
			return item.dueDate === formattedDate(new Date())
		})
	}

	const dueLater = () => {
		// Write the date check condition here and return the array of todo items that are due later accordingly.
		return all.filter((item) => {
			return item.dueDate > formattedDate(new Date())
		})
	}

	const toDisplayableList = (list) => {
		// Format the To-Do list here, and return the output string as per the format given above.
		return list
			.map((item) => {
				{
					if (item.dueDate === formattedDate(new Date())) {
						if (item.completed) {
							return `[x] ${item.title}`
						} else {
							return `[ ] ${item.title}`
						}
					} else if (item.dueDate != formattedDate(new Date())) {
						if (item.completed) {
							return `[x] ${item.title} ${item.dueDate}`
						} else {
							return `[ ] ${item.title} ${item.dueDate}`
						}
					}
				}
			})
			.join('\n')
	}

	return {
		all,
		add,
		markAsComplete,
		overdue,
		dueToday,
		dueLater,
		toDisplayableList,
	}
}

module.exports = todoList
