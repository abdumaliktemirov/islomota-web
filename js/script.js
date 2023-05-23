tailwind.config = {
	theme: {
		extend: {
			colors: {
				whitegray: 'rgba(102, 102, 102, 1)',
				gray: ' rgba(102, 102, 102, 0.2)',
				black: 'rgba(30, 30, 30, 1)',
			},
			padding: {
				'8': '32px',
			}
		},
		spacing: {
			'1': '10px',
			'1-2': '12px',
			'1-5': '15px',
			'2': '20px',
			'14': '50px',
		},
		fontSize: {
			sm: '12px',
			base: '14px',
			xl: '20px',
		}
	}
}

const openDropdown = document.querySelectorAll('[data-open-dropdown]'),
	dropdown = document.querySelectorAll('[data-dropdown]'),
	bottomArow = document.querySelectorAll('.bottom-arow');

openDropdown.forEach((btn, index) => {
	btn.addEventListener('click', (e) => {
		dropdown.forEach((item, itemIndex) => {
			if (itemIndex != index) {
				item.classList.toggle('active')
			}
		})
		bottomArow.forEach(item => {
			item.classList.toggle('active')
		})
	})
})