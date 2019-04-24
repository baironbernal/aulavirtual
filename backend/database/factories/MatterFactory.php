<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Matter::class, function (Faker $faker) {

	$users = \App\User::with('roles')->get();
	$teachers = [];

	foreach ($users as $user) {
		if ($user->hasRole('teacher')) {
			array_push($teachers, $user->id);
		}
	}

    return [
        'name' => $faker->name,
        'user_id' => $faker->randomElement($teachers)
    ];
});
