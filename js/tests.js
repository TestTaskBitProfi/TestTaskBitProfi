/* Пакет тестов для проверки функционала добавления персоны */
describe("Добавление персоны", function()
	{
		/* Тест на нечисловое значение поля id */
		it("Тест на нечисловое значение поля id", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = 'f';
			document.querySelector('.fname').value = '1';
			document.querySelector('.lname').value = '2';
			document.querySelector('.comment').value = '333';			
			assert.equal($scope.newPerson($scope), false);
		});
		
		/*! Тест на отсутствие значения поля id */
		it("Тест на отсутствие значения поля id ", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = '';
			document.querySelector('.fname').value = '1';
			document.querySelector('.lname').value = '2';
			document.querySelector('.comment').value = '333';
			assert.equal($scope.newPerson($scope), false);
		});
		
		/*! Тест на отсутствие значения поля fname */
		it("Тест на отсутствие значения поля fname ", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = '1';
			document.querySelector('.fname').value = '';
			document.querySelector('.lname').value = '2';
			document.querySelector('.comment').value = '333';
			assert.equal($scope.newPerson($scope), false);
		});
		
		/*! Тест на отсутствие значения поля lname */
		it("Тест на отсутствие значения поля lname ", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = '1';
			document.querySelector('.fname').value = '2';
			document.querySelector('.lname').value = '';
			document.querySelector('.comment').value = '333';
			assert.equal($scope.newPerson($scope), false);
		});
		
		/*! Тест на отсутствие значения поля comment */
		it("Тест на отсутствие значения поля comment ", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = '1';
			document.querySelector('.fname').value = '3';
			document.querySelector('.lname').value = '2';
			document.querySelector('.comment').value = '';
			assert.equal($scope.newPerson($scope), true);
		});
		
		/*! Тест на превышение допустимой длинны поля fname */
		it("Тест на превышение допустимой длинны поля fname", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = '1';
			document.querySelector('.fname').value = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
			document.querySelector('.lname').value = '2';
			document.querySelector('.comment').value = '';
			assert.equal($scope.newPerson($scope), false);
		});
		
		/*! Тест на превышение допустимой длинны поля fname */
		it("Тест на превышение допустимой длинны поля fname", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = '1';
			document.querySelector('.fname').value = '2';
			document.querySelector('.lname').value = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
			document.querySelector('.comment').value = '';
			assert.equal($scope.newPerson($scope), false);
		});
		
		/*! Тест на добавление при корректных входных данных */
		it("Тест на добавление при корректных входных данных", function() 
		{			
			$scope = angular.element($("#pc")).scope();
			document.querySelector('.id').value = '1';
			document.querySelector('.fname').value = '3';
			document.querySelector('.lname').value = '2';
			document.querySelector('.comment').value = '4';
			assert.equal($scope.newPerson($scope), true);
		});
	});
	
/*! Пакет тестов для проверки функционала редактирования персоны */
describe("Редактирование персоны", function() 
	{
		/*! Тест на нечисловое значение поля id */
		it("Тест на нечисловое значение поля id", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = 'f';
			document.querySelector('.fname_edit_1').value = '1';
			document.querySelector('.lname_edit_1').value = '2';
			document.querySelector('.comment_edit_1').value = '333';
			assert.equal($scope.savePerson(1), false);
		});
		
		/*! Тест на отсутствие значения поля id */
		it("Тест на отсутствие значения поля id ", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = '';
			document.querySelector('.fname_edit_1').value = '1';
			document.querySelector('.lname_edit_1').value = '2';
			document.querySelector('.comment_edit_1').value = '333';
			assert.equal($scope.savePerson(1), false);
		});
		
		/*! Тест на отсутствие значения поля fname */
		it("Тест на отсутствие значения поля fname ", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = '1';
			document.querySelector('.fname_edit_1').value = '';
			document.querySelector('.lname_edit_1').value = '2';
			document.querySelector('.comment_edit_1').value = '333';
			assert.equal($scope.savePerson(1), false);
		});
		
		/*! Тест на отсутствие значения поля lname */
		it("Тест на отсутствие значения поля lname ", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = '1';
			document.querySelector('.fname_edit_1').value = '2';
			document.querySelector('.lname_edit_1').value = '';
			document.querySelector('.comment_edit_1').value = '333';
			assert.equal($scope.savePerson(1), false);
		});
		
		/*! Тест на отсутствие значения поля comment */
		it("Тест на отсутствие значения поля comment ", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = '1';
			document.querySelector('.fname_edit_1').value = '3';
			document.querySelector('.lname_edit_1').value = '2';
			document.querySelector('.comment_edit_1').value = '';
			assert.equal($scope.savePerson(1), true);
		});
		
		/*! Тест на превышение допустимой длинны поля fname */
		it("Тест на превышение допустимой длинны поля fname", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = '1';
			document.querySelector('.fname_edit_1').value = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
			document.querySelector('.lname_edit_1').value = '2';
			document.querySelector('.comment_edit_1').value = '';
			assert.equal($scope.savePerson(1), false);
		});
		
		/*! Тест на превышение допустимой длинны поля fname */
		it("Тест на превышение допустимой длинны поля fname", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = '1';
			document.querySelector('.fname_edit_1').value = '2';
			document.querySelector('.lname_edit_1').value = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
			document.querySelector('.comment_edit_1').value = '';
			assert.equal($scope.savePerson(1), false);
		});
		
		/*! Тест на добавление при корректных входных данных */
		it("Тест на добавление при корректных входных данных", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			document.querySelector('.id_edit_1').value = '1';
			document.querySelector('.fname_edit_1').value = '3';
			document.querySelector('.lname_edit_1').value = '2';
			document.querySelector('.comment_edit_1').value = '4';
			assert.equal($scope.savePerson(1), true);
		});		

	});
	
/*! Пакет тестов для проверки функционала удаления персоны */
describe("Удаление персоны", function() 
	{
		/*! Удаление персоны */
		it("Удаление персоны", function() 
		{			
			$scope = angular.element($("#ec")).scope();
			assert.equal($scope.delPerson(1), true);
		});
		
	});