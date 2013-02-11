module.exports = my_function

function my_function(key_dot_path) {
	if (typeof(key_dot_path) !== "string") {
		return undefined;
	} 
	var keys = key_dot_path.split(".");
	return function next_function(obj) {
		var next_obj = obj;
		for (var i = 0; i < keys.length; ++i) {
			if (next_obj === undefined ||
				  next_obj === null) {
				return undefined;
			}
			next_obj = next_obj[keys[i]];
		}
		return next_obj;
	}
}

