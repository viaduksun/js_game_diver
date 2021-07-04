// ====================================================
// ПРИВЕТСТВЕННАЯ НАДПИСЬ
// ====================================================
function helloMessage() {
	hello_message = document.createElement("div");
	hello_message.id = "hellomessage";
	helloWindow.appendChild(hello_message);

	hello_message_text = document.createElement("p1")
	hello_message_text.id = "hellomessageText";
	hello_message_text.innerHTML = "<p1>Добро пожаловать в игру «Водолаз»!<br>Твоя цель: спуститься в нижний трюм затонувшего судна за золотом. Да, воздуха хватит ненадолго...<br> И постарайся не попасть в неприятности... Удачи! ;)</p1>"
	helloWindow.appendChild(hello_message_text);

	startButton.onclick = showinstructions;
}
// ==================================================
// ОКНО ИНСТРУКЦИЙ
// ==================================================
function instructions() {
	instructionsBlock = document.createElement("div");
	instructionsBlock.id = "instructionsBlock";
	helloWindow.appendChild(instructionsBlock);

	instruction_message = document.createElement("p1");
	instruction_message.id = "instruction_message";
	instruction_message.innerHTML = "<p1> Вот краткие инструкции. <br> (прочитай, это спасет тебе жизнь) :) </p1>";
	instructionsBlock.appendChild(instruction_message);

	instruction_message2 = document.createElement("p1");
	instruction_message2.id = "instruction_message2";
	instruction_message2.innerHTML = "<p1>Управление: <br> двигайся при помощи стрелок  на клавиатуре</p1>";
	instructionsBlock.appendChild(instruction_message2);

	instruction_message3 = document.createElement("p1");
	instruction_message3.id = "instruction_message3";
	instruction_message3.innerHTML = "<p1>Увидишь акулу — залегай на дно...</p1>";
	instructionsBlock.appendChild(instruction_message3);

	instruction_message4 = document.createElement("p1");
	instruction_message4.id = "instruction_message4";
	instruction_message4.innerHTML = "<p1>Когда найдешь золото, цепляйся за якорь, чтобы тебя вытащили</p1>";
	instructionsBlock.appendChild(instruction_message4);

	heroMooved = document.createElement("div");
	heroMooved.id = "heroMoovedid";
	instructionsBlock.appendChild(heroMooved);

	heroLaid = document.createElement("div");
	heroLaid.id = "heroLaidid";
	instructionsBlock.appendChild(heroLaid);



	startDive = document.createElement("div");
	startDive.id = "startDive";
	instructionsBlock.appendChild(startDive);

	startDiveButton = document.createElement("button");
	startDiveButton.id = "startDiveButton";
	startDive.appendChild(startDiveButton);

	startDiveButtonText = document.createElement("p1");
	startDiveButtonText.id = "startDiveButtonTextid";
	startDiveButtonText.innerText = "Начать спуск!";
	startDive.appendChild(startDiveButtonText);
	// 	КНОПКА НАЧАТЬ СПУСК
	startDive.onclick = startGame;
}

// ====================================================
// УДАЛЕНИЕ ЭЛЕМЕНТОВ
// ====================================================
function instructionsBlockremove() {
	instructionsBlock.remove();
}
// ====================================================
// ГЛАВНОЕ ИГРОВОЕ ПОЛЕ
// ====================================================
function mainfield() {

	mainfield = document.createElement("div");
	mainfield.id = "mainfield";
	helloWindow.appendChild(mainfield);

	gold = document.createElement("div");
	gold.id = "goldid";
	mainfield.appendChild(gold);

	// КЛИК ПО ЗОЛОТУ - ПЕРЕХОД НА WINWINDOW ДЛЯ ТЕСТИРОВАНИЯ 
	gold.onclick = winGame;
}
// ====================================================
// СОЗДАНИЕ ВОДОЛАЗА С ЗАДЕРЖКОЙ В 2 СЕКУНДЫ
// ====================================================
function createHero() {
	hero = document.createElement("div");
	hero.id = "heroid";
	mainfield.appendChild(hero);
	// через 2 секунды спускаем главного героя в игровой блок
	setTimeout(function () {
		hero.style.transition = "all 4s";
		hero.style.top = hero.offsetTop + 294 + "px";
	}, 2000);
	setTimeout(function () {
		hero.style.transition = "0.5s";
	}, 2500);
}

// ======================================================
// ДВИЖЕНИЕ ВОДОЛАЗА
// ======================================================			
document.onkeydown = function (event) {

	if (event.key == "ArrowRight") {
		hero.style.left = hero.offsetLeft + 30 + "px";
		if (hero.offsetLeft >= 400) {
			hero.style.left = 400 + "px";
		}

	}
	if (event.key == "ArrowLeft") {
		hero.style.left = hero.offsetLeft - 30 + "px";
		if (hero.offsetLeft <= 194) {
			hero.style.left = 194 + "px";
		}

	}
	if (event.key == "ArrowDown") {
		hero.style.top = hero.offsetTop + 30 + "px";
		if (hero.offsetTop >= 640) {
			hero.style.top = 640 + "px";
		}

	}
	if (event.key == "ArrowUp") {
		hero.style.top = hero.offsetTop - 30 + "px";
		if (hero.offsetTop <= 194) {
			hero.style.top = 194 + "px";
		}
	}
}
// =================================================
// СОЗДАНИЕ ЯКОРЯ
// =================================================
function createAncor() {
	ancor = document.createElement("div");
	ancor.id = "anchorid";
	mainfield.appendChild(ancor);

	ancorMoveDown = setInterval(function () {
		ancor.style.transition = "all 0.3s";
		ancor.style.top = ancor.offsetTop + 100 + "px";
		if (ancor.offsetTop >= -200) {
			clearInterval(ancorMoveDown);

			ancorMoveUp = setInterval(function () {
				ancor.style.top = ancor.offsetTop - 100 + "px";
				if (ancor.offsetTop <= -700) {
					ancor.remove();
					createAncor();
					clearInterval(ancorMoveUp);
				}
			}, 1000)

		}

	}, 1000)
}

// =================================================
// СОЗДАНИЕ ТАЙМЕРА ИГРЫ
// =================================================
function createTimer() {
	timerArea = document.createElement("div");
	timerArea.id = "timerAreaid";
	mainfield.appendChild(timerArea);

	timer = document.createElement("p3");
	timer.id = "timerid";
	timer.innerText = "80";
	timerArea.appendChild(timer);


	timer.onclick = timerStop;
}
function timerStop() {
	a = 0;
	// if (a = 0) { clearInterval(gameTime);
	// 	a=a+1}
	// else if	(a=1) { (timerGo ();
	// 	a==a-1}	
	clearInterval(gameTime);
}

// ===================================================
// ЗАПУСК ТАЙМЕРА (задержка 4 секунды = время спуска водолаза) 
// ОСТАНОВКА ИГРЫ ЕСЛИ ВРЕМЯ ИСТЕКЛО
// ===================================================
function timerGo() {
	setTimeout(function () {
		gameTime = setInterval(function () {
			timer.innerText = timer.innerText - 1;


			if (timer.innerText == 0 || lifesNumber == 0) {
				clearInterval(gameTime);
				playOverwindow();
			}

			// timer.onclick = timer.remove();
			// else if (gamestatus = "game_off";) {
			// 	clearInterval(gameTime);
			// }
		}, 1000);

	}, 1000);


}

// ================================================================
// СОЗДАНИЕ ЖИЗНЕЙ (ИЗНАЧАЛЬНО 3 - УКАЗАНО В ГЛОБАЛЬНЫХ ПЕРЕМЕННЫХ)
// ================================================================

function createLifes() {
	lifesArea = document.createElement("div");
	lifesArea.id = "lifesArea";
	mainfield.appendChild(lifesArea);



	var lifesNumberCurrent = 0;
	while (lifesNumberCurrent < lifesNumber) {
		var lifes = document.createElement("div")
		lifes.id = "lifes";
		lifesArea.appendChild(lifes);
		lifesNumberCurrent = lifesNumberCurrent + 1;


	}
	// lifesArea.onclick = playOverwindow;
	// ПРИ КЛИКЕ НА ЖИЗНЯХ УДАЛЯЕТ ЖИЗНЬ--ТЕСТ-РЕЖИМ
	lifesArea.onclick = lifesDecrease;
}
// УДАЛЯЕТ ЖИЗНЬ--ТЕСТ-РЕЖИМ
function lifesDecrease() {
	lifesNumber = lifesNumber - 1;
	lifesArea.remove();
	createLifes();
}
// ===============================================
// РАНДОМЫ
// ================================================
//  ПОЛУЧАЕМ СЛУЧАЙНОЕ ЧИСЛО ОТ 1 ДО (max)
function random(max) {
	var rand = 1 + Math.random() * (max + 1)
	rand = Math.floor(rand);
	return rand;
}
// ===============================================================
// АНИМАЦИЯ
// ==============================================================
// ЗАПУСК ВСЕХ РЫБ
function createAllFish() {

	createFishLevel1_R();
	createFishLevel2_L();
	createFishLevel3_R();
	createFishLevel1_L();
	createFishLevel2_R();
}
// =================================================================
// СОЗДАНИЕ РЫБ
// =================================================================
function createFishLevel1_R() {
	shark = document.createElement("div");

	var sharkType = random(2);
	if (sharkType == 1) {
		shark.className = "sharkL1R type1";
	}
	else {
		shark.className = "sharkL1R type3";
	}

	mainfield.appendChild(shark);
	// двигаем акулу
	sharkMoove = setInterval(function () {
		shark.style.transition = "all 0.5s";
		shark.style.left = shark.offsetLeft - 300 + "px";

		if (shark.offsetLeft < -150) {
			shark.remove();
			createFishLevel1_R()
			clearInterval(sharkMoove);
		}
	}, 5);
}
// =======================================================
function createFishLevel2_L() {
	sharkL2 = document.createElement("div");


	var sharkL2Type = random(2);
	if (sharkL2Type == 1) {
		sharkL2.className = "sharkL2_L type1_L2";
	}
	else {
		sharkL2.className = "sharkL2_L type2_L2";
	}

	mainfield.appendChild(sharkL2);

	sharkMoove = setInterval(function () {
		sharkL2.style.transition = "all 0.5s";
		sharkL2.style.left = sharkL2.offsetLeft + 300 + "px";

		if (sharkL2.offsetLeft > 750) {
			sharkL2.remove();
			createFishLevel2_L();
			clearInterval(sharkMoove);
		}
	}, 5);
}
// ===============================================
function createFishLevel3_R() {
	sharkL3 = document.createElement("div");


	var sharkL3Type = random(2);
	if (sharkL3Type == 1) {
		sharkL3.className = "sharkL3R type2";
	}
	else {
		sharkL3.className = "sharkL3R type3";
	}

	mainfield.appendChild(sharkL3);

	sharkMoove = setInterval(function () {
		sharkL3.style.transition = "all 0.5s";
		sharkL3.style.left = sharkL3.offsetLeft - 550 + "px";

		if (sharkL3.offsetLeft < -200) {
			sharkL3.remove();
			createFishLevel3_R();
			clearInterval(sharkMoove);
		}
	}, 20);
}

// =======================================================
function createFishLevel1_L() {
	sharkL1L = document.createElement("div");


	var sharkL1LType = random(2);
	if (sharkL1LType == 1) {
		sharkL1L.className = "sharkL1_L type1_L2";
	}
	else {
		sharkL1L.className = "sharkL1_L type2_L2";
	}

	mainfield.appendChild(sharkL1L);

	sharkMoove = setInterval(function () {
		sharkL1L.style.transition = "all 0.5s";
		sharkL1L.style.left = sharkL1L.offsetLeft + 150 + "px";

		if (sharkL1L.offsetLeft > 750) {
			sharkL1L.remove();
			createFishLevel1_L();
			clearInterval(sharkMoove);
		}
	}, 5);
}
// =======================================================
function createFishLevel2_R() {
	sharkL2R = document.createElement("div");

	var sharkL2RType = random(2);
	if (sharkL2RType == 1) {
		sharkL2R.className = "sharkL2R type2";
	}
	else {
		sharkL2R.className = "sharkL2R type3";
	}

	mainfield.appendChild(sharkL2R);

	sharkSlowMoove = setInterval(function () {
		sharkL2R.style.transition = "all 0.5s";
		sharkL2R.style.left = sharkL2R.offsetLeft - 150 + "px";

		if (sharkL2R.offsetLeft < -150) {
			sharkL2R.remove();
			createFishLevel2_R();
			clearInterval(sharkSlowMoove);
		}
	}, 5);
}
// =================================================== 
// МЕГАЛАДОН 
// ===================================================
function createBigShark() {
	bigshark = document.createElement("div");
	bigshark.id = "bigSharkId";
	helloWindow.appendChild(bigshark);

	setTimeout(function () {

		sharkMove = setInterval(function () {
			bigshark.style.transition = 0;
			bigshark.style.left = bigshark.offsetLeft - 1600 + "px";
			bigshark.style.top = bigshark.offsetTop + 600 + "px";
			if (bigshark.offsetTop > 830) {
				bigshark.remove();
				clearInterval(sharkMove);
			}
		}, 10)
	}, 2000);
}
// ===============================================================
// ПУЗЫРИ
// ===============================================================
// СОЗДАНИЕ ВСЕХ ПУЗЫРЬКОВ
function allBubblesCreate() {
	createbubblesLeft();
	createbubblesLeft2();
	createbubblesRight();
	createbubblesRight2();
}
// ===============================================================

function createbubblesLeft() {
	bubblesL = document.createElement("div");
	bubblesSize = random(5);
	if (bubblesSize == 1) {
		bubblesL.className = "bubblesL size_1";
	}
	else if (bubblesSize == 2) {
		bubblesL.className = "bubblesL size_2";
	}
	else if (bubblesSize == 3) {
		bubblesL.className = "bubblesL size_3";
	}
	else if (bubblesSize == 4) {
		bubblesL.className = "bubblesL size_4";
	}
	else {
		bubblesL.className = "bubblesL size_5";
	}

	mainfield.appendChild(bubblesL);

	bubblesSmallMove = setInterval(function () {
		bubblesL.style.transition = 0;
		bubblesL.style.top = bubblesL.offsetTop - 300 + "px";
		bubblesL.style.width = bubblesL.clientWidth + 2 + "px";
		bubblesL.style.height = bubblesL.clientHeight + 2 + "px";

		if (bubblesL.offsetTop < 0) {
			bubblesL.remove();
			clearInterval(bubblesSmallMove);
			createbubblesLeft();
		}
	}, 100)

}
// ======================================================================
function createbubblesLeft2() {
	bubblesL2 = document.createElement("div");
	bubbles2Size = random(3);
	if (bubbles2Size == 1) {
		bubblesL2.className = "bubblesL2 size_1";
	}
	else if (bubbles2Size == 2) {
		bubblesL2.className = "bubblesL2 size_2";
	}
	else {
		bubblesL2.className = "bubblesL2 size_3";
	}

	mainfield.appendChild(bubblesL2);

	bubbles2SmallMove = setInterval(function () {
		bubblesL2.style.transition = 0;
		bubblesL2.style.top = bubblesL2.offsetTop - 150 + "px";
		bubblesL2.style.width = bubblesL2.clientWidth + 2 + "px";
		bubblesL2.style.height = bubblesL2.clientHeight + 2 + "px";

		if (bubblesL2.offsetTop < 0) {
			bubblesL2.remove();
			clearInterval(bubbles2SmallMove);
			createbubblesLeft2();
		}
	}, 100)

}
// ======================================================================
function createbubblesRight() {
	bubblesR = document.createElement("div");
	bubblesRSize = random(5);
	if (bubblesRSize == 1) {
		bubblesR.className = "bubblesR size_1R";
	}
	else if (bubblesRSize == 2) {
		bubblesR.className = "bubblesR size_2R";
	}
	else if (bubblesRSize == 2) {
		bubblesR.className = "bubblesR size_3R";
	}
	else if (bubblesRSize == 2) {
		bubblesR.className = "bubblesR size_4R";
	}
	else {
		bubblesR.className = "bubblesR size_5R";
	}

	mainfield.appendChild(bubblesR);

	bubblesRMove = setInterval(function () {
		bubblesR.style.transition = 0;
		bubblesR.style.top = bubblesR.offsetTop - 300 + "px";
		bubblesR.style.width = bubblesR.clientWidth + 2 + "px";
		bubblesR.style.height = bubblesR.clientHeight + 2 + "px";

		if (bubblesR.offsetTop < 0) {
			bubblesR.remove();
			clearInterval(bubblesRMove);
			createbubblesRight();
		}
	}, 100)
	// console.dir(bubbles);
}
// ===========================================================
function createbubblesRight2() {
	bubblesR2 = document.createElement("div");
	bubblesR2Size = random(5);
	if (bubblesR2Size == 1) {
		bubblesR2.className = "bubblesR2 size_1R";
	}
	else if (bubblesR2Size == 2) {
		bubblesR2.className = "bubblesR2 size_2R";
	}
	else if (bubblesRSize == 2) {
		bubblesR2.className = "bubblesR2 size_3R";
	}
	else if (bubblesRSize == 2) {
		bubblesR2.className = "bubblesR2 size_4R";
	}
	else {
		bubblesR2.className = "bubblesR2 size_5R";
	}

	mainfield.appendChild(bubblesR2);

	bubblesR2Move = setInterval(function () {
		bubblesR2.style.transition = 0;
		bubblesR2.style.top = bubblesR2.offsetTop - 200 + "px";
		bubblesR2.style.width = bubblesR2.clientWidth + 2 + "px";
		bubblesR2.style.height = bubblesR2.clientHeight + 2 + "px";

		if (bubblesR2.offsetTop < 0) {
			bubblesR2.remove();
			clearInterval(bubblesR2Move);
			createbubblesRight2();
		}
	}, 100)
	// console.dir(bubbles);
}
// ===============================================================
// СТР 4 КОНЕЦ ИГРЫ ПРОИГРЫШ
// ===============================================================
function playOverwindow() {
	if (gamestatus != "game_win") {
		mainfield.remove();

		playover = document.createElement("div");
		playover.id = "playoverid";
		helloWindow.appendChild(playover);
		mainfield.remove();

		playoverMessageArea = document.createElement("div");
		playoverMessageArea.id = "playoverMessageAreaid";
		playover.appendChild(playoverMessageArea);

		playover_message = document.createElement("p1");
		playover_message.id = "playover_messageid";
		playover_message.innerHTML = "<p1> Да...не повезло. <br> Не отчаивайся! Тебе обязательно повезет в следующий раз!</p1>";
		playover.appendChild(playover_message);

		playoverButtonArea = document.createElement("div");
		playoverButtonArea.id = "playoverButtonAreaid";
		playover.appendChild(playoverButtonArea);

		playoverButtonArea2 = document.createElement("div");
		playoverButtonArea2.id = "playoverButtonArea2id";
		playover.appendChild(playoverButtonArea2);

		playoverButton = document.createElement("div");
		playoverButton.id = "playoverButtonid";
		playover.appendChild(playoverButton);

		playoverButton2 = document.createElement("div");
		playoverButton2.id = "playoverButton2id";
		playover.appendChild(playoverButton2);

		playoverButtonText = document.createElement("p1");
		playoverButtonText.id = "playoverButtonTextid";
		playoverButtonText.innerText = "Выйти";
		playoverButton.appendChild(playoverButtonText);

		playoverButtonText2 = document.createElement("p1");
		playoverButtonText2.id = "playoverButtonText2id";
		playoverButtonText2.innerText = "Попробовать ещё!";
		playoverButton2.appendChild(playoverButtonText2);
		// КЛИКИ НА КНОПКАХ
		playoverButton.onclick = exit;
		playoverButton2.onclick = restartgame;
	}
}
// ==================================================================
// КНОПКИ ВЫХОД И НАЧАТЬ ЗАНОВО
// ==================================================================
function exit() {
	location.reload()
}
// ФУНКЦИЯ ДОЛЖНА ПЕРЕБРАСЫВАТЬ В 3-Е ОКНО ТАМ ГДЕ КОРАБЛЬ (MAINFIELD)
// ПОКА НЕ РАБОТАЕТ
function restartgame() {
	location.reload()
}
// ============================================================
// КОНЕЦ ИГРЫ ПОБЕДА!!!
// ===============================================================
function winwindowshow() {

	winwindow = document.createElement("div");
	winwindow.id = "winwindowid";
	helloWindow.appendChild(winwindow);

	winMessageArea = document.createElement("div");
	winMessageArea.id = "winMessageAreaid";
	winwindow.appendChild(winMessageArea);

	win_message = document.createElement("p1");
	win_message.id = "win_messageid";
	win_message.innerHTML = "<p1> УРА!!! <br> У тебя все получилось!</p1>";
	winMessageArea.appendChild(win_message);

	playoverButtonArea = document.createElement("div");
	playoverButtonArea.id = "winButtonAreaid";
	winwindow.appendChild(playoverButtonArea);

	playoverButton = document.createElement("div");
	playoverButton.id = "winButtonid";
	winwindow.appendChild(playoverButton);

	playoverButtonText = document.createElement("p1");
	playoverButtonText.id = "winButtonTextid";
	playoverButtonText.innerText = "Выйти";
	playoverButton.appendChild(playoverButtonText);

	playoverButton.onclick = exit;
}
function createMess2() {
	winMessageArea2 = document.createElement("div");
	winMessageArea2.id = "winMessageArea2id";
	winwindow.appendChild(winMessageArea2);

	win_message2 = document.createElement("p1");
	win_message2.id = "win_message2id";
	win_message2.innerHTML = "<p1> Ой...Это все мне? :)</p1>";
	winMessageArea2.appendChild(win_message2);

	setTimeout(function () {

		messMove = setInterval(function () {
			winMessageArea2.style.transition = 0.8;
			winMessageArea2.style.left = winMessageArea2.offsetLeft + 100 + "px";
			if (winMessageArea2.offsetLeft > 100) {
				// 					
				clearInterval(messMove);
			}
		}, 10)
	}, 2000);
}