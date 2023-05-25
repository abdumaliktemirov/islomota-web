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
			},
			spacing: {
				'1': '10px',
				'1-2': '12px',
				'1-5': '15px',
				'2': '20px',
				'14': '50px',
			},
			fontSize: {
				base: '14px',
				"15": '15px',
				xl: '20px',
				xxl: '36px',
				ten: '10px',
				
			},
			backgroundSize: {
				'100%': "100%",
			},
		},
		
	
		colors: {
			'main-bc': ' rgba(213, 230, 240, 0.2);'
		},
		backgroundImage: {
			'videos-1': "url('images/videos-main-1.png')",
			'videos-2': "url('images/videos-main-2.png')",
			'videos-3': "url('images/videos-1.png')",
			'videos-4': "url('images/videos-2.png')",
			'videos-5': "url('images/videos-3.png')",
			'videos-6': "url('images/videos-4.png')",
		},
	
		

	}
}

const openDropdown = document.querySelectorAll('.open-dropdown'),
	dropdown = document.querySelectorAll('.dropdown-box'),
	bottomArow = document.querySelectorAll('.bottom-arow');

openDropdown.forEach((btn, index) => {
	btn.addEventListener('click', (e) => {
		dropdown.forEach((item, itemIndex) => {
			if (itemIndex == index) {
				item.classList.toggle('active');
			} else {
				item.classList.remove('active');
			}
		})
		bottomArow.forEach((item, itemIndex) => {
			if (itemIndex == index) {
				item.classList.toggle('active');
			} else {
				item.classList.remove('active');
			}
		})
	})
})
console.log(openDropdown);
console.log(dropdown);
// openDropdown.forEach((btn, index) => {
// 	btn.addEventListener('click', (e) => {
// 		dropdown.forEach((item, itemIndex) => {
// 				item.classList.toggle('active')
// 		})
// 		bottomArow.forEach((item, itemIndex) => {
// 			if (itemIndex != index) {
// 				item.classList.toggle('active')
// 			}
// 		})
// 	})
// })