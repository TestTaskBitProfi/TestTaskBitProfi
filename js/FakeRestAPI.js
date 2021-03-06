/*!		
Тестовое задание Дмитрия Пучкина для БитПрофи
Компонент - Front-FakeRestAPI
Создано: 30.01.2016
*/	


/*! Наборы данных */
var arr_id = 
			[
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'ф',
			'ы',
			'в',
			'а',
			'f',
			'g',
			'h',
			'j'			
			];

var arr_fname = 
				[
				'Савва',
				'Святослав',
				'Семён',
				'Сергей',
				'Созон',
				'Спиридон',
				'Станислав',
				'Степан',
				'Тимофей',
				'Тихон',
				'Трифон',
				'Трофим',
				'Фаддей',
				'Фёдор',
				'Федосей',
				'Федот',
				'1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
				'Фома'				
				];

var arr_lname = 
				[
				'Тихонов',
				'Аксёнов',
				'Гаврилов',
				'Родионов',
				'Котов',
				'Горбунов',
				'Кудряшов',
				'Быков',
				'Зуев',
				'Третьяков',
				'Савельев',
				'Панов',
				'Рыбаков',
				'Суворов',
				'Абрамов',
				' Воронов',
				'1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
				'Архипов'
				];

var arr_comment = 
				  [
					'Арахнофобия - боязнь пауков',
					'Ачлуофобия - боязнь темноты',
					'Батмофобия - боязнь лестниц и крутых склонов',
					'Ботанофобия - страх перед растениями',
					'Верминофобия - страх перед микробами',
					'Гамофобия - боязнь брака',
					'Гидрофобия - страх воды',
					'Гинофобия - боязнь женщин',
					'Глоссофобия - страх выступать публично',
					'Дентофобия - страх перед стоматологами',
					'Зоофобия - страх перед животными',
					'Инсектофобия - страх перед насекомыми',
					'Йатрофобия - страх врачей',
					'Клаустрофобия - страх замкнутых пространств',
					'Ксенофобия - боязнь незнакомых или иностранцев',
					'Лилапсофобия - боязнь торнадо и ураганов',
					'Локайофобия - страх перед родами',
					'Мизофобия - боязнь грязи и микробов'
				  ];

/*! Случайное число между min и max (распределение не равномерное) */		
function getRandomInt(min, max)
	{
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
/*! Заполнение */	
function GetFakeRestAPIData()
	{
		/*! Заполнение id*/
		var data = arr_id[getRandomInt(0,arr_id.length-1)];
		$('#input_id').val(data);
		
		/*! Заполнение fname*/
		data = arr_fname[getRandomInt(0,arr_fname.length-1)];
		$('#input_fname').val(data);
		
		/*! Заполнение lname*/
		data = arr_lname[getRandomInt(0,arr_lname.length-1)];
		$('#input_lname').val(data);
		
		/*! Заполнение comment*/
		data = arr_comment[getRandomInt(0,arr_comment.length-1)];
		$('#input_comment').val(data);
	};