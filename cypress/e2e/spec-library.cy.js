
/// npm install cypress --save-dev
/// ЗАПУСК - npx cypress open


describe('template spec', () => {
	it('passes', () => {

		/// ---> Проверка работоспособности всех импутов в форме

		cy.visit('https://kapustin.team/form')
			cy.get('.input-container', {
			timeout: 3000
				}).find('input', {
					timeout: 6000,
				}).each(($i) => {
			cy.get('.input-container input').invoke('val', 'paste this text')
		})



		/// ---> Подсчет всех консол логов, метод spy - это про временные интервалы. Здесь он повторяет проверку снова и снова, тк консоллоги появляются не все сразу

		cy.visit('https://kapustin.team/')

		let spy;
			Cypress.on('window:before:load', (win) => {
			spy = cy.spy(win.console, 'log');
		});

		cy.then(() => {
			const calls = spy.getCalls();
			expect(calls.length).to.eq(0)
		})




		/// ---> Это я тестил ховеры, но оно вроде не работало

		// cy.get('[class=*button]').trigger('mouseover')
		// cy.get('.popover').should('be.visible')

		// cy.contains("button", "button").realHover('mouse')



		/// ---> Наличие метрики, title и description

		cy.get("head").then($head => {
			if ($head.find("script[src='https://mc.yandex.ru/metrika/tag.js']").length > 0 ) {   
				//evaluates as true
			}
			if ($head.find("meta[property='og: title']").length > 0) {

			}
			if ($head.find("meta[property='og: decription']").length > 0) {
				
			}
		});


		// cy.get('#pract-haspen').should('have.attr', 'checked')     ???

		// cy.get('[type="checkbox"]').check() // Check checkbox element
		// cy.get('[type="radio"]').first().check() // Check first radio element


		// cy.window().then(win => {
		// 	const htmlWidth = Cypress.$('html')[0].scrollWidth;
		// 	const scrollBarWidth = win.innerWidth - htmlWidth;
		// 	expect(scrollBarWidth).to.be.gt(0);                 
		//   })



		/// ---> Наличие файлов

		cy.readFile('src/sitemap.xml')
		cy.readFile('src/robots.tsx')


		/// ---> Кликаются ли ссылки навбара, кнопки

		cy.get('.nav-container', {
			timeout: 3000
		}).find('.nav-item', {
			timeout: 6000,
		}).each(($i) => {
			cy.get($i).click()
		})
		cy.get('[class*=button]', {
			timeout: 5000
		}).should('be.visible')
		cy.get('.header-btn', {
			timeout: 3000,
		}).click()
		cy.get('.fixedButton', {
			timeout: 3000,
		}).click()
		cy.get('.burger', {
			timeout: 4000,
		}).click()
		// cy.contains('ul').end()


		/// ---> Проверка открываются ли ссылки кейсов, zesvet 200 OK, но дальше ошибка

		cy.get('.cards', {
			timeout: 3000,
		}).find('.cards-item', {
			timeout: 6000,
		})
			.should(($a) => {
				expect($a).to.have.attr('href')
			}).each(($i) => {
				cy.get($i, {timeout: 3000}).click().should('have.class', 'cards-item')
				cy.get('.caseBtn').invoke('attr', 'href')
				.then(href => {
				cy
					.request(href)
					.its('status')
					.should('eq', 200);
		  });
		})

		// cy.visit('https://kapustin.team/')
		// cy.get('.button', {
		// 	timeout: 3000,
		// }).click()
	}
	)
})