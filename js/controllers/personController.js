/*!		
Тестовое задание Дмитрия Пучкина для БитПрофи
Компонент - Front-AngularJS-personController
Создано: 30.01.2016
*/	
	 
	/*! Определение модуля */	
	var myApp=angular.module('myApp');

	/*! Обработчик для вывода актуального списка персон*/	
	myApp.controller('personController', function($scope)
		{
				
		/*! Предзаполненный массив */
		$scope.persons = [
							{
								id: 2,
								fname: 'Peter',
								lname: 'Gray',
								comment: 'work'
							},
							{
								id: 1,
								fname: 'Gray',
								lname: 'Peter',
								comment: 'not work'
							}
						];		
		
		/*! Обработка события newPerson() - Добавление новой персоны */
		$scope.newPerson = function()
			{
			
			/*! Валидация */	
			if (!ValidInput('add', $scope)) {return false}
			
			/*! Вставка новой персоны */
			$scope.persons.push(
									{
										id: document.querySelector('.id').value,
										fname: document.querySelector('.fname').value,
										lname: document.querySelector('.lname').value,
										comment: document.querySelector('.comment').value
									}
								);		

			
			/*! Очистим поля ввода */
			$scope.id = '';
			$scope.fname = '';
			$scope.lname = '';
			$scope.comment  = '';
			return true;
			};		
			
		/*! Обработка события delPerson() - Удаление персоны */
		$scope.delPerson = function(i)
			{	
			/*! Удаление персоны */
			$scope.persons.splice(i-1, 1);
			return true;
			};		
		
		});
	
	/*! Обработка события editPerson() - Редактирование персоны */	
	function ValidInput($type,$scope,$index)
		{
			/*! Инициализация */	
			var ret=false;	
			var $class_id = '';
			var	$class_fname = '';
			var	$class_lname = '';
			var	$class_comment = '';
			
			
			
			/*! Определяем режим работы */	
			if ($type=='add')
				{	
					$class_id = '.id';
					$class_fname = '.fname';
					$class_lname = '.lname';
					$class_comment = '.comment';
				};
				
			if ($type=='edit')
				{
					$class_id = '.id_edit_'+$index;
					$class_fname = '.fname_edit_'+$index;
					$class_lname = '.lname_edit_'+$index;
					$class_comment = '.comment_edit_'+$index;
				};			
			
			/*! Сбросим стили */			
			document.querySelector($class_id).classList.remove('bg-danger');
			document.querySelector($class_fname).classList.remove('bg-danger');
			document.querySelector($class_lname).classList.remove('bg-danger');
			document.querySelector($class_comment).classList.remove('bg-danger');
			
			/*! Проверим, что обязательные поля заполнены */
			if(!document.querySelector($class_id).value)
				{			
				/*! Подсветим красным */				
				
				document.querySelector($class_id).classList.add('bg-danger');
				ret=true;
				};
				
			if(!document.querySelector($class_fname).value)
				{			
				/*! Подсветим красным */				
				document.querySelector($class_fname).classList.add('bg-danger');
				ret=true;
				};
				
			if(!document.querySelector($class_lname).value)
				{			
				/*! Подсветим красным */				
				document.querySelector($class_lname).classList.add('bg-danger');
				ret=true;
				};
				
			/*! Проверим, что id - число */			
			if(isNaN(document.querySelector($class_id).value))
				{			
				/*! Подсветим красным */				
				document.querySelector($class_id).classList.add('bg-danger');			
				ret=true;
				};	
			
			/*! Проверим, что длинна полей lname fname не больше 255  */	
			if(document.querySelector($class_fname).value.length>255)
				{			
				/*! Подсветим красным */				
				document.querySelector($class_fname).classList.add('bg-danger');			
				ret=true;
				};	
			
			if(document.querySelector($class_lname).value.length>255)
				{			
				/*! Подсветим красным */				
				document.querySelector($class_lname).classList.add('bg-danger');			
				ret=true;
				};					
				
			/*! Проверим, что длина поля comment не больше 4294967295 (long text) */
			if(document.querySelector($class_comment).value.length>4294967295)
				{			
				/*! Подсветим красным */				
				document.querySelector($class_comment).classList.add('bg-danger');			
				ret=true;
				};
			
			/*! Если есть не валидные данные то возвращаем false иначе true */
			if (ret) 
				{return false};
				return true;
		};
		
	/*! Обработка события editPerson() - Редактирование персоны */	
	myApp.controller('personEditController', function($scope)
		{
		/*! Отображение редактора */	
		$scope.editorEnabled = false;
		
		/*! Заполним поля для ввода данными */	
		$scope.enableEditor = function()
			{
				$scope.editorEnabled = true;
				console.log();
				this.id_edit = this.person.id;
				this.fname_edit = this.person.fname;
				this.lname_edit = this.person.lname;
				this.comment_edit = this.person.comment;
			};
		
		/*! Скрытие редактор */	
		$scope.disableEditor = function()
			{
				$scope.editorEnabled = false;
			};
		
		/*! Валидация и сохранение изменений редактор */	
		$scope.savePerson = function($index)
			{
			/*! Валидация */			
			if (!ValidInput('edit', $scope, $index)) {return false};
								
				/*! Сохранение */
				this.person.id = this.id_edit;
				this.person.fname = this.fname_edit;
				this.person.lname = this.lname_edit;
				this.person.comment = this.comment_edit;
				$scope.disableEditor();
				return true;
			};	
	});
		