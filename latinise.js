var latiniseChar1 = function(a) {
	a = a.charCodeAt(0);
	switch (true) {
	case (192 <= a && 195 >= a): return 'A';
	case (200 <= a && 202 >= a): return 'E';
	case (204 <= a && 205 >= a): return 'I';
	case (210 <= a && 213 >= a): return 'O';
	case (217 <= a && 218 >= a): return 'U';
	case (221 == a): return 'Y';
	case (224 <= a && 227 >= a): return 'a';
	case (232 <= a && 234 >= a): return 'e';
	case (236 <= a && 237 >= a): return 'i';
	case (242 <= a && 245 >= a): return 'o';
	case (249 <= a && 250 >= a): return 'u';
	case (253 == a): return 'y';
	case (258 == a): return 'A';
	case (259 == a): return 'a';
	case (272 == a): return 'D';
	case (273 == a): return 'd';
	case (296 == a): return 'I';
	case (297 == a): return 'i';
	case (360 == a): return 'U';
	case (361 == a): return 'u';
	case (416 == a): return 'O';
	case (417 == a): return 'o';
	case (431 == a): return 'U';
	case (432 == a): return 'u';
	case (7840 <= a && 7863 >= a): return 0 == a % 2 ? 'A' : 'a';
	case (7864 <= a && 7879 >= a): return 0 == a % 2 ? 'E' : 'e';
	case (7880 <= a && 7883 >= a): return 0 == a % 2 ? 'I' : 'i';
	case (7884 <= a && 7907 >= a): return 0 == a % 2 ? 'O' : 'o';
	case (7908 <= a && 7921 >= a): return 0 == a % 2 ? 'U' : 'u';
	case (7922 <= a && 7929 >= a): return 0 == a % 2 ? 'Y' : 'y';	
	default: return ''
	}
};

var latiniseChar2 = function(a) {
	a = a.charCodeAt(0);
	switch (true) {
	case ((192 <= a && 195 >= a) || (224 <= a && 227 >= a) || (258 <= a && 259 >= a) || (7840 <= a && 7863 >= a)):
		return 'a';
	case ((200 <= a && 202 >= a) || (232 <= a && 234 >= a) || (7864 <= a && 7879 >= a)):
		return 'e';
	case ((204 <= a && 205 >= a) || (236 <= a && 237 >= a) || (296 <= a && 297 >= a) || (7880 <= a && 7883 >= a)):
		return 'i';
	case ((210 <= a && 213 >= a) || (242 <= a && 245 >= a) || (416 <= a && 417 >= a) || (7884 <= a && 7907 >= a)):
		return 'o';
	case ((217 <= a && 218 >= a) || (249 <= a && 250 >= a) || (360 <= a && 361 >= a) || (431 <= a && 432 >= a) || (7908 <= a && 7921 >= a)):
		return 'u';
	case ((221 == a) || (253 == a) || (7922 <= a && 7929 >= a)):
		return 'y';
	case ((272 == a) || (273 == a)):
		return 'd';
	default:
		return '';
	}
};

var latinise1 = function(text) {
	return text.replace(/[^A-Za-z0-9\s]/g, latiniseChar1)
}

var latinise2 = function(text) {
	return text.replace(/[^A-Za-z0-9\s]/g, latiniseChar2)
}
