// Define UI Variables
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const filter = document.querySelector('#filter');

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation

const sortA = document.querySelector('#asc');
const sortD = document.querySelector('#des');

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload
reloadIcon.addEventListener('click', reloadPage);

// Add New  Task Function definition
function addNewTask(e) {
	e.preventDefault(); //disable form submission

	// Check empty entry
	if (taskInput.value === '') {
		taskInput.style.borderColor = 'red';
		return;
	}

	// Create li element when the user adds a task
	const li = document.createElement('li');
	// Adding a class
	li.className = 'collection-item';
	// Create text node and append it
	li.appendChild(document.createTextNode(taskInput.value));
	// Create new element for the link
	const link = document.createElement('a');
	const link2 = document.createElement('a');

	// Add class and the x marker for a
	link.className = 'delete-item secondary-content';
	link2.className = 'da';

	link.innerHTML = '<i class="fa fa-remove"></i>';
	link2.innerHTML = new Date();

	// Append link to li
	li.appendChild(link);
	li.appendChild(link2);

	// Append to UL
	taskList.appendChild(li);
	//Clear input field
	taskInput.value = '';
}

// Clear Task Function definition
function clearAllTasks() {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

// Filter tasks function
filter.addEventListener('keyup', (e) => {
	const input = e.target.value.toLowerCase();
	const items = taskList.getElementsByTagName('li');
	Array.from(items).forEach((item) => {
		const val = item.textContent;
		if (val.toLowerCase().indexOf(input) != -1) {
			item.style.display = 'block';
		} else item.style.display = 'none';
	});
});

//function sorting

function sortList() {
	var list, i, switching, b, shouldSwitch;
	list = document.getElementById('c');
	switching = true;

	while (switching) {
		switching = false;
		b = list.getElementsByTagName('li');

		for (i = 0; i < b.length - 1; i++) {
			shouldSwitch = false;

			if (b[i].lastChild.textContent > b[i + 1].lastChild.textContent) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			b[i].parentNode.insertBefore(b[i + 1], b[i]);

			switching = true;
		}
	}
}

function sortListD() {
	var list, i, switching, b, shouldSwitch;
	list = document.getElementById('c');
	switching = true;

	while (switching) {
		switching = false;
		b = list.getElementsByTagName('li');
		for (i = 0; i < b.length - 1; i++) {
			shouldSwitch = false;

			if (b[i].lastChild.textContent < b[i + 1].lastChild.textContent) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			b[i].parentNode.insertBefore(b[i + 1], b[i]);
			switching = true;
		}
	}
	console.log(list);
}
// Remove Task function definition
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are You Sure about that ?')) {
			e.target.parentElement.parentElement.remove();
		}
	}
}

// Reload Page Function
function reloadPage() {
	//using the reload fun on location object
	location.reload();
}
