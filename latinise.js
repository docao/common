var latiniseChar1 = function(a) {
	a = a.charCodeAt(0);
	if (192 <= a && 195 >= a) return 'A';
	if (200 <= a && 202 >= a) return 'E';
	if (204 <= a && 205 >= a) return 'I';
	if (210 <= a && 213 >= a) return 'O';
	if (217 <= a && 218 >= a) return 'U';
	if (221 == a) return 'Y';
	if (224 <= a && 227 >= a) return 'a';
	if (232 <= a && 234 >= a) return 'e';
	if (236 <= a && 237 >= a) return 'i';
	if (242 <= a && 245 >= a) return 'o';
	if (249 <= a && 250 >= a) return 'u';
	if (253 == a) return 'y'; 
	if (258 == a) return 'A';
	if (259 == a) return 'a';
	if (272 == a) return 'D';
	if (273 == a) return 'd';
	if (296 == a) return 'I';
	if (297 == a) return 'i';
	if (360 == a) return 'U';
	if (361 == a) return 'u';
	if (416 == a) return 'O';
	if (417 == a) return 'o';
	if (431 == a) return 'U';
	if (432 == a) return 'u';
	if (7840 <= a && 7863 >= a) return 0 == a % 2 ? 'A' : 'a';
	if (7864 <= a && 7879 >= a) return 0 == a % 2 ? 'E' : 'e';
	if (7880 <= a && 7883 >= a) return 0 == a % 2 ? 'I' : 'i';
	if (7884 <= a && 7907 >= a) return 0 == a % 2 ? 'O' : 'o';
	if (7908 <= a && 7921 >= a) return 0 == a % 2 ? 'U' : 'u';
	if (7922 <= a && 7929 >= a) return 0 == a % 2 ? 'Y' : 'y';
	return '';
};

var latiniseChar2 = function(a) {
	a = a.charCodeAt(0);
	if ((192 <= a && 195 >= a) || (224 <= a && 227 >= a) || (258 <= a && 259 >= a) || (7840 <= a && 7863 >= a)) return 'a';
	if ((200 <= a && 202 >= a) || (232 <= a && 234 >= a) || (7864 <= a && 7879 >= a)) return 'e';
	if ((204 <= a && 205 >= a) || (236 <= a && 237 >= a) || (296 <= a && 297 >= a) || (7880 <= a && 7883 >= a)) return 'i';
	if ((210 <= a && 213 >= a) || (242 <= a && 245 >= a) || (416 <= a && 417 >= a) || (7884 <= a && 7907 >= a)) return 'o';
	if ((217 <= a && 218 >= a) || (249 <= a && 250 >= a) || (360 <= a && 361 >= a) || (431 <= a && 432 >= a) || (7908 <= a && 7921 >= a))
		return 'u';
	if ((221 == a) || (253 == a) || (7922 <= a && 7929 >= a)) return 'y';
	if ((272 == a) || (273 == a)) return 'd';
	return '';
};

var latiniseChar1 = function(text) {
	return text.replace(/[^A-Za-z0-9]/g, latiniseChar1)
}

var latiniseChar2 = function(text) {
	return text.replace(/[^A-Za-z0-9]/g, latiniseChar2)
}
