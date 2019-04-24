<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Career::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'code' => $faker->numberBetween($min = 100000, $max = 9000000),
        'semesters' => $faker->randomDigitNotNull
    ];
});



