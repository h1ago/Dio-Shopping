INSERT INTO categorys(id,name) VALUES(1, 'Seleções');
INSERT INTO categorys(id,name) VALUES(2, 'Clubes Nacionais');
INSERT INTO categorys(id,name) VALUES(3, 'Clubes Internacionais');

INSERT INTO products(id, categoryId, name, regular_price, actual_price, discount_percentage, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    1,
    1,
    'camisa da alamanha 2020',
    'R$ 299,90',
    'R$ 149,90',
    50,
    '3x R$ 49,96',
    'alemanha.jpg',
    'true',
    'true',
    'true',
    'true',
    'true'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, discount_percentage, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    2,
    1,
    'camisa do brasil 2020',
    'R$ 199,90',
    'R$ 99,90',
    50,
    '2x R$ 49,90',
    'brasil.jpg',
    'true',
    'true',
    'false',
    'true',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    3,
    1,
    'camisa do brasil 1994',
    'R$ 599,90',
    'R$ 599,90',
    '2x R$ 299,90',
    'brasil94.jpg',
    'false',
    'true',
    'true',
    'true',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    4,
    3,
    'camisa do arsenal 2020',
    'R$ 199,90',
    'R$ 199,90',
    '2x R$ 99,90',
    'arsenal.jpg',
    'false',
    'true',
    'true',
    'false',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    5,
    2,
    'camisa do flamengo 2020',
    'R$ 199,90',
    'R$ 199,90',
    '2x R$ 99,90',
    'fla.jpg',
    'false',
    'true',
    'true',
    'false',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    6,
    2,
    'camisa do flamengo 1981',
    'R$ 499,90',
    'R$ 499,90',
    '2x R$ 249,90',
    'fla81.jpg',
    'true',
    'true',
    'true',
    'true',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    7,
    2,
    'camisa de treino do flamengo',
    'R$ 199,90',
    'R$ 199,90',
    '2x R$ 99,90',
    'fla_treino.jpg',
    'true',
    'true',
    'true',
    'true',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    8,
    2,
    'camisa do grêmio',
    'R$ 199,90',
    'R$ 199,90',
    '2x R$ 99,90',
    'gremio.jpg',
    'true',
    'false',
    'false',
    'false',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    9,
    3,
    'camisa do manchester city',
    'R$ 399,90',
    'R$ 399,90',
    '4x R$ 99,90',
    'man-city.jpg',
    'true',
    'false',
    'true',
    'false',
    'false'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    10,
    3,
    'camisa do milan',
    'R$ 399,90',
    'R$ 399,90',
    '1x R$ 399,90',
    'milan.jpg',
    'true',
    'true',
    'true',
    'false',
    'true'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, discount_percentage, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    11,
    2,
    'camisa do palmeiras',
    'R$ 399,90',
    'R$ 279,93',
    30,
    '5x R$ 55,98',
    'palmeiras.jpg',
    'true',
    'true',
    'false',
    'true',
    'true'
);

INSERT INTO products(id, categoryId, name, regular_price, actual_price, installments, image, size_pp, size_p, size_m, size_g, size_gg) 
VALUES(
    12,
    3,
    'camisa de treino do real madrid',
    'R$ 299,90',
    'R$ 299,90',
    '4x R$ 49,90',
    'real_treino.jpg',
    'true',
    'false',
    'true',
    'false',
    'false'
);