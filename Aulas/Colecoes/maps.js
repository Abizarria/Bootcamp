// ----> Clone <-----
// const getAdmins = (map) => {
// 	let admins = [];

// 	for ([key, value] of map) {
// 		if (value === 'ADMIN') {
// 			admins.push(key);
// 		}
// 	}

// 	return admins;
// };

// const userRoles = new Map();

// userRoles.set('Stephany', 'SUDO');
// userRoles.set('Luiz', 'ADMIN');
// userRoles.set('Elvira', 'ADMIN');
// userRoles.set('Carolina', 'USER');
// userRoles.set('Guilherme', 'USER');

// console.log(getAdmins(userRoles));
// ----> Clone <-----

function getAdmins(map) {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		} 
	}
	return admins;
}

const usuarios = new Map();

usuarios.set('Luís', "Admin");
usuarios.set('Adilson', "User");
usuarios.set('Celso', "Admin");
usuarios.set('Maria', "User");
usuarios.set('Fernanda', "Admin");

console.log('Administradores:', getAdmins(usuarios));