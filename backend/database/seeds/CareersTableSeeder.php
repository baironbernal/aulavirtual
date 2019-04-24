<?php

use App\Models\Cut;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class CareersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Cut::create(['name' => 'Primer corte']);
         Cut::create(['name' => 'Segundo corte']);
         Cut::create(['name' => 'Tercer corte']);
    }
}
