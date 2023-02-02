let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
let navOverlay = document.querySelector(".navbar-overlay");
let servContentBtn1 = document.querySelector(".serv-content-btn1");
let servContentBtn2 = document.querySelector(".serv-content-btn2");
let servContentBtn3 = document.querySelector(".serv-content-btn3");
let servBtnPhoto1 = document.querySelector(".serv-btn-photo1");
let servBtnPhoto2 = document.querySelector(".serv-btn-photo2");
let servBtnPhoto3 = document.querySelector(".serv-btn-photo3");
let servBtnPhoto4 = document.querySelector(".serv-btn-photo4");
let servBtnPhoto5 = document.querySelector(".serv-btn-photo5");
let servBtnPhoto6 = document.querySelector(".serv-btn-photo6");
let photoCommon = document.querySelectorAll(".photo-common");
let accordionItems = document.querySelectorAll(".accordionItems");
let accordionHeader = document.querySelectorAll(".accordion-header");
let accordion = document.querySelector(".accordion");
let btnprice = document.querySelectorAll(".btnprice");
let arrow = document.querySelector(".arrow");
let arrowhide = document.querySelector(".arrowhide");
let selectHeader = document.querySelectorAll(".select-header");
let selectItem = document.querySelectorAll(".select-item");
let selecticonActive = document.querySelector(".selecticon-active");
let selecticonUnactive = document.querySelector(".selecticon-unactive");
let contactInfo = document.querySelectorAll(".contact-info");
let contactInfoCanandaigua = document.querySelector(".contact-info.canandaigua");
let contactInfoNewYork = document.querySelector(".contact-info.new-york");
let contactInfoYonkers = document.querySelector(".contact-info.yonkers");
let contactInfoSherrill = document.querySelector(".contact-info.sherrill");
let contactWoman = document.querySelector(".contactwoman");
let contactHead = document.querySelector(".contact-head");

servContentBtn1.disabled = false;
servContentBtn2.disabled = false;
servContentBtn3.disabled = false;


hamb.addEventListener("click", mobileMenu);
function mobileMenu() {
	hamb.classList.toggle("active");
	navMenu.classList.toggle("active");
	navOverlay.classList.toggle("active");
}
navItem.forEach(n => n.addEventListener("click", closeMenu));
navOverlay.addEventListener("click", closeMenu);
function closeMenu() {
	hamb.classList.remove("active");
	navMenu.classList.remove("active");
	navOverlay.classList.remove("active");
}

servContentBtn1.addEventListener("click", blurPhotoGardens);
function blurPhotoGardens() {
	servContentBtn1.classList.toggle("active");
	if (servContentBtn1.classList.contains("active") || servContentBtn2.classList.contains("active") || servContentBtn3.classList.contains("active")) {
		photoCommon.forEach(n => n.classList.add("blur"));
		if (servContentBtn1.classList.contains("active") && !servContentBtn2.classList.contains("active") && !servContentBtn3.classList.contains("active")) {
			servBtnPhoto1.classList.remove("blur");
			servBtnPhoto5.classList.remove("blur");
		}
		else if (servContentBtn1.classList.contains("active") && servContentBtn2.classList.contains("active")) {
			servBtnPhoto1.classList.remove("blur");
			servBtnPhoto5.classList.remove("blur");
			servBtnPhoto3.classList.remove("blur");
			servContentBtn3.disabled = true;

		}
		else if (servContentBtn1.classList.contains("active") && servContentBtn3.classList.contains("active")) {
			servBtnPhoto1.classList.remove("blur");
			servBtnPhoto5.classList.remove("blur");
			servBtnPhoto2.classList.remove("blur");
			servBtnPhoto4.classList.remove("blur");
			servBtnPhoto6.classList.remove("blur");
			servContentBtn2.disabled = true;
		}
		else if (!servContentBtn1.classList.contains("active") && servContentBtn2.classList.contains("active")) {
			servBtnPhoto1.classList.add("blur");
			servBtnPhoto5.classList.add("blur");
			servBtnPhoto3.classList.remove("blur");
			servContentBtn1.disabled = false;
			servContentBtn2.disabled = false;
			servContentBtn3.disabled = false;
		}
		else if (!servContentBtn1.classList.contains("active") && servContentBtn3.classList.contains("active")) {
			servBtnPhoto1.classList.add("blur");
			servBtnPhoto5.classList.add("blur");
			servBtnPhoto2.classList.remove("blur");
			servBtnPhoto4.classList.remove("blur");
			servBtnPhoto6.classList.remove("blur");
			servContentBtn1.disabled = false;
			servContentBtn2.disabled = false;
			servContentBtn3.disabled = false;
		}
	}
	else {
		photoCommon.forEach(n => n.classList.remove("blur"));
	}
}
servContentBtn2.addEventListener("click", blurPhotoLown);
function blurPhotoLown() {
	servContentBtn2.classList.toggle("active");
	if (servContentBtn1.classList.contains("active") || servContentBtn2.classList.contains("active") || servContentBtn3.classList.contains("active")) {
		photoCommon.forEach(n => n.classList.add("blur"));
		if (servContentBtn2.classList.contains("active") && !servContentBtn1.classList.contains("active") && !servContentBtn3.classList.contains("active")) {
			servBtnPhoto3.classList.remove("blur");
		}
		else if (servContentBtn2.classList.contains("active") && servContentBtn1.classList.contains("active")) {
			servBtnPhoto1.classList.remove("blur");
			servBtnPhoto5.classList.remove("blur");
			servBtnPhoto3.classList.remove("blur");
			servContentBtn3.disabled = true;
		}
		else if (servContentBtn2.classList.contains("active") && servContentBtn3.classList.contains("active")) {
			servBtnPhoto3.classList.remove("blur");
			servBtnPhoto2.classList.remove("blur");
			servBtnPhoto4.classList.remove("blur");
			servBtnPhoto6.classList.remove("blur");
			servContentBtn1.disabled = true;
		}
		else if (!servContentBtn2.classList.contains("active") && servContentBtn1.classList.contains("active")) {
			servBtnPhoto3.classList.add("blur");
			servBtnPhoto1.classList.remove("blur");
			servBtnPhoto5.classList.remove("blur");
			servContentBtn1.disabled = false;
			servContentBtn2.disabled = false;
			servContentBtn3.disabled = false;
		}
		else if (!servContentBtn2.classList.contains("active") && servContentBtn3.classList.contains("active")) {
			servBtnPhoto3.classList.add("blur");
			servBtnPhoto2.classList.remove("blur");
			servBtnPhoto4.classList.remove("blur");
			servBtnPhoto6.classList.remove("blur");
			servContentBtn1.disabled = false;
			servContentBtn2.disabled = false;
			servContentBtn3.disabled = false;
		}
	} else {
		photoCommon.forEach(n => n.classList.remove("blur"));
	}
}
servContentBtn3.addEventListener("click", blurPhotoPlanting);
function blurPhotoPlanting() {
	servContentBtn3.classList.toggle("active");
	if (servContentBtn1.classList.contains("active") || servContentBtn2.classList.contains("active") || servContentBtn3.classList.contains("active")) {
		photoCommon.forEach(n => n.classList.add("blur"));
		if (servContentBtn3.classList.contains("active") && !servContentBtn1.classList.contains("active") && !servContentBtn2.classList.contains("active")) {
			servBtnPhoto2.classList.remove("blur");
			servBtnPhoto4.classList.remove("blur");
			servBtnPhoto6.classList.remove("blur");
		}
		else if (servContentBtn3.classList.contains("active") && servContentBtn1.classList.contains("active")) {
			servBtnPhoto1.classList.remove("blur");
			servBtnPhoto5.classList.remove("blur");
			servBtnPhoto2.classList.remove("blur");
			servBtnPhoto4.classList.remove("blur");
			servBtnPhoto6.classList.remove("blur");
			servContentBtn2.disabled = true;
		}
		else if (servContentBtn3.classList.contains("active") && servContentBtn2.classList.contains("active")) {
			servBtnPhoto3.classList.remove("blur");
			servBtnPhoto2.classList.remove("blur");
			servBtnPhoto4.classList.remove("blur");
			servBtnPhoto6.classList.remove("blur");
			servContentBtn1.disabled = true;
		}
		else if (!servContentBtn3.classList.contains("active") && servContentBtn1.classList.contains("active")) {
			servBtnPhoto2.classList.add("blur");
			servBtnPhoto4.classList.add("blur");
			servBtnPhoto6.classList.add("blur");
			servBtnPhoto1.classList.remove("blur");
			servBtnPhoto5.classList.remove("blur");
			servContentBtn1.disabled = false;
			servContentBtn2.disabled = false;
			servContentBtn3.disabled = false;
		}
		else if (!servContentBtn3.classList.contains("active") && servContentBtn2.classList.contains("active")) {
			servBtnPhoto2.classList.add("blur");
			servBtnPhoto4.classList.add("blur");
			servBtnPhoto6.classList.add("blur");
			servBtnPhoto3.classList.remove("blur");
			servContentBtn1.disabled = false;
			servContentBtn2.disabled = false;
			servContentBtn3.disabled = false;
		}
	} else {
		photoCommon.forEach(n => n.classList.remove("blur"));
	}
}
accordionHeader.forEach(n => n.addEventListener("click", controlAccordion));
function controlAccordion(e) {
	if (e.target.closest(".accordionItems").classList.contains("opened")) {
		e.target.closest(".accordionItems").classList.remove("opened");
	}
	else {
		accordionItems.forEach(n => n.classList.remove("opened"));
		e.target.closest(".accordionItems").classList.add("opened");
	}
}


let select = function () {

	selectHeader.forEach(n => n.addEventListener("click", selectToggle));
	selectItem.forEach(n => n.addEventListener("click", selectChoose));

	function selectToggle() {
		this.parentElement.classList.toggle("is-active");
		selectHeader.forEach(n => n.classList.add("is-active"));
		selecticonActive.classList.add("is-active");
		selecticonUnactive.classList.add("is-active");
		contactWoman.classList.add("is-active");
	}
	function selectChoose() {
		let text = this.innerText,
			select = this.closest(".select")
		currentText = select.querySelector(".select-current");
		currentText.innerText = text;
		select.classList.remove("is-active");
		if (currentText.innerText.includes("Canandaigua")) {
			contactInfo.forEach(n => n.classList.remove("is-active"));
			contactInfoCanandaigua.classList.add("is-active");
		} else if (currentText.innerText.includes("New")) {
			contactInfo.forEach(n => n.classList.remove("is-active"));
			contactInfoNewYork.classList.add("is-active");
		} else if (currentText.innerText.includes("Yonkers")) {
			contactInfo.forEach(n => n.classList.remove("is-active"));
			contactInfoYonkers.classList.add("is-active");
		} else {
			contactInfo.forEach(n => n.classList.remove("is-active"));
			contactInfoSherrill.classList.add("is-active");
		}

	}
};
select();



console.log('1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n\n* При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20\n* Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20\n* Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10\n\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n\n* При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25\n* Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25\n\n3. В разделе contacts реализован select с выбором городов +25\n\n *В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n* При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10\n\n Итого: 125.')