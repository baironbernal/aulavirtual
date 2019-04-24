<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class MattersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Matter::class, 20)->create()->each(function ($matter) {
	        $matter->careers()->save(factory(App\Models\Career::class)->make());
	    });
    }
}
